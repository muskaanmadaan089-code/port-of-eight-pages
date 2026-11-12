-- ===== Roles =====
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role public.app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Users read own roles" on public.user_roles for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "Admins manage roles" on public.user_roles for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

-- ===== updated_at helper =====
create or replace function public.touch_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end; $$;

-- ===== Profiles =====
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  city text,
  gender text,
  date_of_birth date,
  height_cm numeric(5,1),
  current_weight_kg numeric(5,1),
  target_weight_kg numeric(5,1),
  activity_level text,
  primary_goal text,
  diet_preference text,
  health_conditions text[] not null default '{}',
  allergies text[] not null default '{}',
  daily_calorie_target integer,
  daily_water_target_ml integer not null default 3000,
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "Own profile select" on public.profiles for select to authenticated
  using (id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "Own profile insert" on public.profiles for insert to authenticated with check (id = auth.uid());
create policy "Own profile update" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());
create trigger profiles_touch before update on public.profiles for each row execute function public.touch_updated_at();

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'), new.email)
  on conflict (id) do nothing;
  insert into public.user_roles (user_id, role) values (new.id, 'user') on conflict do nothing;
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- ===== Client intake (registration submissions) =====
create table public.client_intakes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  full_name text not null,
  phone text not null,
  email text not null,
  city text,
  gender text not null,
  age integer not null,
  height_cm numeric(5,1) not null,
  weight_kg numeric(5,1) not null,
  target_weight_kg numeric(5,1),
  bmi numeric(4,1) not null,
  activity_level text not null,
  primary_goal text not null,
  diet_preference text not null,
  health_conditions text[] not null default '{}',
  allergies text[] not null default '{}',
  notes text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);
grant select, insert, update on public.client_intakes to authenticated;
grant all on public.client_intakes to service_role;
alter table public.client_intakes enable row level security;
create policy "Own intake select" on public.client_intakes for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "Own intake insert" on public.client_intakes for insert to authenticated with check (user_id = auth.uid());
create policy "Admin intake update" on public.client_intakes for update to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

-- ===== Diet plans (catalog) =====
create table public.diet_plans (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  kind text not null default 'membership', -- membership | session
  price integer not null,
  billing_period text not null default 'month', -- month | session
  tagline text,
  features text[] not null default '{}',
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
grant select on public.diet_plans to anon, authenticated;
grant insert, update, delete on public.diet_plans to authenticated;
grant all on public.diet_plans to service_role;
alter table public.diet_plans enable row level security;
create policy "Plans public read" on public.diet_plans for select to anon, authenticated using (active or public.has_role(auth.uid(), 'admin'));
create policy "Admin plans write" on public.diet_plans for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

-- ===== Consultations =====
create table public.consultations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  plan_id uuid references public.diet_plans(id),
  plan_name text not null,
  amount integer not null,
  mode text not null check (mode in ('online','offline')),
  clinician text not null,
  appointment_date date not null,
  time_slot text not null,
  client_name text not null,
  phone text not null,
  notes text,
  status text not null default 'pending_payment', -- pending_payment | confirmed | completed | cancelled
  payment_status text not null default 'unpaid', -- unpaid | paid | refunded
  payment_reference text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.consultations to authenticated;
grant all on public.consultations to service_role;
alter table public.consultations enable row level security;
create policy "Own consult select" on public.consultations for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "Admin consult update" on public.consultations for update to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create trigger consult_touch before update on public.consultations for each row execute function public.touch_updated_at();

-- Booking goes through a function so the price always comes from the catalog
create or replace function public.book_consultation(
  _plan_slug text, _mode text, _clinician text, _date date, _slot text,
  _client_name text, _phone text, _notes text default null)
returns uuid language plpgsql security definer set search_path = public as $$
declare _plan public.diet_plans; _id uuid;
begin
  if auth.uid() is null then raise exception 'Please sign in to book a consultation'; end if;
  select * into _plan from public.diet_plans where slug = _plan_slug and active;
  if not found then raise exception 'Selected plan is not available'; end if;
  if _date < current_date then raise exception 'Please choose a future date'; end if;
  if _mode not in ('online','offline') then raise exception 'Invalid consultation mode'; end if;
  if length(coalesce(trim(_client_name),'')) < 2 then raise exception 'Please enter your full name'; end if;
  if length(regexp_replace(coalesce(_phone,''), '\D', '', 'g')) < 10 then raise exception 'Please enter a valid phone number'; end if;
  insert into public.consultations (user_id, plan_id, plan_name, amount, mode, clinician, appointment_date, time_slot, client_name, phone, notes)
  values (auth.uid(), _plan.id, _plan.name, _plan.price, _mode, _clinician, _date, _slot, trim(_client_name), trim(_phone), _notes)
  returning id into _id;
  return _id;
end; $$;
revoke all on function public.book_consultation from public, anon;
grant execute on function public.book_consultation to authenticated;

-- ===== Products =====
create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  brand text not null default 'NutriMaster Pure Lab',
  category text not null,
  short_description text,
  description text,
  ingredients text,
  benefits text[] not null default '{}',
  price integer not null check (price >= 0),
  mrp integer,
  image_url text,
  badge text,
  size_label text,
  rating numeric(2,1) not null default 0,
  review_count integer not null default 0,
  stock integer not null default 0 check (stock >= 0),
  is_vegan boolean not null default false,
  is_gluten_free boolean not null default false,
  is_lab_verified boolean not null default true,
  is_informed_choice boolean not null default false,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant all on public.products to service_role;
alter table public.products enable row level security;
create policy "Products public read" on public.products for select to anon, authenticated using (active or public.has_role(auth.uid(), 'admin'));
create policy "Admin products write" on public.products for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create trigger products_touch before update on public.products for each row execute function public.touch_updated_at();

-- ===== Wishlist & cart =====
create table public.wishlist_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);
grant select, insert, delete on public.wishlist_items to authenticated;
grant all on public.wishlist_items to service_role;
alter table public.wishlist_items enable row level security;
create policy "Own wishlist" on public.wishlist_items for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create table public.cart_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  product_id uuid not null references public.products(id) on delete cascade,
  quantity integer not null default 1 check (quantity > 0 and quantity <= 20),
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);
grant select, insert, update, delete on public.cart_items to authenticated;
grant all on public.cart_items to service_role;
alter table public.cart_items enable row level security;
create policy "Own cart" on public.cart_items for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ===== Orders =====
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  user_id uuid not null,
  status text not null default 'pending_payment', -- pending_payment | confirmed | processing | shipped | delivered | cancelled
  payment_method text not null check (payment_method in ('upi','cod','razorpay')),
  payment_status text not null default 'unpaid', -- unpaid | paid | refunded
  payment_reference text,
  fulfilment text not null default 'delivery' check (fulfilment in ('delivery','pickup')),
  subtotal integer not null,
  shipping_fee integer not null default 0,
  total integer not null,
  shipping_name text not null,
  phone text not null,
  address_line text,
  city text,
  pincode text,
  tracking_number text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, update on public.orders to authenticated;
grant all on public.orders to service_role;
alter table public.orders enable row level security;
create policy "Own orders select" on public.orders for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "Admin orders update" on public.orders for update to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create trigger orders_touch before update on public.orders for each row execute function public.touch_updated_at();

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  unit_price integer not null,
  quantity integer not null,
  line_total integer not null
);
grant select on public.order_items to authenticated;
grant all on public.order_items to service_role;
alter table public.order_items enable row level security;
create policy "Own order items" on public.order_items for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id and (o.user_id = auth.uid() or public.has_role(auth.uid(), 'admin'))));

-- Checkout: prices and stock are taken from the catalog, never from the browser
create or replace function public.place_order(
  _payment_method text, _fulfilment text, _name text, _phone text,
  _address text, _city text, _pincode text, _notes text default null)
returns uuid language plpgsql security definer set search_path = public as $$
declare _uid uuid := auth.uid(); _subtotal integer := 0; _ship integer := 0; _order_id uuid; _num text; r record;
begin
  if _uid is null then raise exception 'Please sign in to place an order'; end if;
  if _payment_method not in ('upi','cod') then raise exception 'Unsupported payment method'; end if;
  if _fulfilment not in ('delivery','pickup') then raise exception 'Invalid fulfilment option'; end if;
  if length(coalesce(trim(_name),'')) < 2 then raise exception 'Please enter the recipient name'; end if;
  if length(regexp_replace(coalesce(_phone,''), '\D', '', 'g')) < 10 then raise exception 'Please enter a valid phone number'; end if;
  if _fulfilment = 'delivery' and (length(coalesce(trim(_address),'')) < 5 or coalesce(trim(_pincode),'') !~ '^\d{6}$') then
    raise exception 'Please enter a full delivery address and 6-digit PIN code';
  end if;
  if not exists (select 1 from public.cart_items where user_id = _uid) then raise exception 'Your cart is empty'; end if;

  for r in select c.quantity, p.* from public.cart_items c join public.products p on p.id = c.product_id where c.user_id = _uid for update of p loop
    if not r.active then raise exception '% is no longer available', r.name; end if;
    if r.stock < r.quantity then raise exception 'Only % left in stock for %', r.stock, r.name; end if;
    _subtotal := _subtotal + r.price * r.quantity;
  end loop;

  _ship := case when _fulfilment = 'pickup' or _subtotal >= 999 then 0 else 79 end;
  _num := 'NM-' || to_char(now(), 'YYMMDD') || '-' || upper(substr(md5(random()::text), 1, 5));

  insert into public.orders (order_number, user_id, status, payment_method, fulfilment, subtotal, shipping_fee, total, shipping_name, phone, address_line, city, pincode, notes)
  values (_num, _uid, case when _payment_method = 'cod' then 'confirmed' else 'pending_payment' end, _payment_method, _fulfilment,
          _subtotal, _ship, _subtotal + _ship, trim(_name), trim(_phone), _address, _city, _pincode, _notes)
  returning id into _order_id;

  insert into public.order_items (order_id, product_id, product_name, unit_price, quantity, line_total)
  select _order_id, p.id, p.name, p.price, c.quantity, p.price * c.quantity
  from public.cart_items c join public.products p on p.id = c.product_id where c.user_id = _uid;

  update public.products p set stock = p.stock - c.quantity
  from public.cart_items c where c.product_id = p.id and c.user_id = _uid;

  delete from public.cart_items where user_id = _uid;
  return _order_id;
end; $$;
revoke all on function public.place_order from public, anon;
grant execute on function public.place_order to authenticated;

-- ===== Recipes =====
create table public.recipes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category_label text,
  badge text,
  description text,
  image_url text,
  tags text[] not null default '{}',
  prep_label text,
  calories integer not null default 0,
  protein_g numeric(5,1) not null default 0,
  carbs_g numeric(5,1) not null default 0,
  fat_g numeric(5,1) not null default 0,
  fiber_g numeric(5,1) not null default 0,
  ingredients text[] not null default '{}',
  method text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
grant select on public.recipes to anon, authenticated;
grant insert, update, delete on public.recipes to authenticated;
grant all on public.recipes to service_role;
alter table public.recipes enable row level security;
create policy "Recipes public read" on public.recipes for select to anon, authenticated using (active or public.has_role(auth.uid(), 'admin'));
create policy "Admin recipes write" on public.recipes for all to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

-- ===== Health tracking =====
create table public.food_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  logged_on date not null default current_date,
  meal_type text not null check (meal_type in ('breakfast','lunch','snack','dinner')),
  food_name text not null,
  calories integer not null default 0 check (calories >= 0),
  protein_g numeric(6,1) not null default 0,
  carbs_g numeric(6,1) not null default 0,
  fat_g numeric(6,1) not null default 0,
  fiber_g numeric(6,1) not null default 0,
  score integer check (score between 1 and 10),
  source text not null default 'manual',
  created_at timestamptz not null default now()
);
grant select, insert, update, delete on public.food_logs to authenticated;
grant all on public.food_logs to service_role;
alter table public.food_logs enable row level security;
create policy "Own food logs" on public.food_logs for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "Admin food logs read" on public.food_logs for select to authenticated using (public.has_role(auth.uid(), 'admin'));

create table public.weight_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  logged_on date not null default current_date,
  weight_kg numeric(5,1) not null check (weight_kg > 20 and weight_kg < 350),
  created_at timestamptz not null default now(),
  unique (user_id, logged_on)
);
grant select, insert, update, delete on public.weight_logs to authenticated;
grant all on public.weight_logs to service_role;
alter table public.weight_logs enable row level security;
create policy "Own weight logs" on public.weight_logs for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create table public.water_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  logged_on date not null default current_date,
  amount_ml integer not null check (amount_ml > 0 and amount_ml <= 2000),
  created_at timestamptz not null default now()
);
grant select, insert, delete on public.water_logs to authenticated;
grant all on public.water_logs to service_role;
alter table public.water_logs enable row level security;
create policy "Own water logs" on public.water_logs for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ===== NutriScan =====
create table public.nutriscan_scans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  food_name text not null,
  serving text,
  method text not null default 'search', -- search | photo
  score integer not null check (score between 1 and 10),
  verdict text not null,
  calories integer not null default 0,
  protein_g numeric(6,1) not null default 0,
  carbs_g numeric(6,1) not null default 0,
  fat_g numeric(6,1) not null default 0,
  fiber_g numeric(6,1) not null default 0,
  analysis jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
grant select, insert, delete on public.nutriscan_scans to authenticated;
grant all on public.nutriscan_scans to service_role;
alter table public.nutriscan_scans enable row level security;
create policy "Own scans" on public.nutriscan_scans for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ===== Subscriptions (NutriScan tiers & memberships) =====
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  kind text not null check (kind in ('nutriscan','membership')),
  plan_name text not null,
  amount integer not null,
  status text not null default 'pending_payment', -- pending_payment | active | cancelled | expired
  starts_on date,
  renews_on date,
  payment_reference text,
  created_at timestamptz not null default now()
);
grant select, update on public.subscriptions to authenticated;
grant all on public.subscriptions to service_role;
alter table public.subscriptions enable row level security;
create policy "Own subs select" on public.subscriptions for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "Admin subs update" on public.subscriptions for update to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

create or replace function public.request_nutriscan_plan(_tier text)
returns uuid language plpgsql security definer set search_path = public as $$
declare _name text; _amount integer; _id uuid;
begin
  if auth.uid() is null then raise exception 'Please sign in first'; end if;
  case _tier
    when 'essential' then _name := 'NutriScan Essential'; _amount := 99;
    when 'pro' then _name := 'NutriScan Pro'; _amount := 199;
    when 'fullcare' then _name := 'NutriScan Full Care'; _amount := 299;
    else raise exception 'Unknown plan';
  end case;
  update public.subscriptions set status = 'cancelled'
    where user_id = auth.uid() and kind = 'nutriscan' and status = 'pending_payment';
  insert into public.subscriptions (user_id, kind, plan_name, amount) values (auth.uid(), 'nutriscan', _name, _amount)
  returning id into _id;
  return _id;
end; $$;
revoke all on function public.request_nutriscan_plan from public, anon;
grant execute on function public.request_nutriscan_plan to authenticated;

-- ===== Contact enquiries =====
create table public.contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  kind text not null default 'general' check (kind in ('general','payment')),
  name text not null check (length(name) between 2 and 100),
  email text check (email is null or length(email) <= 255),
  phone text check (phone is null or length(phone) <= 20),
  subject text check (subject is null or length(subject) <= 150),
  message text not null check (length(message) between 2 and 2000),
  status text not null default 'new',
  created_at timestamptz not null default now()
);
grant insert on public.contact_enquiries to anon;
grant select, insert, update on public.contact_enquiries to authenticated;
grant all on public.contact_enquiries to service_role;
alter table public.contact_enquiries enable row level security;
create policy "Anyone can send enquiry" on public.contact_enquiries for insert to anon, authenticated
  with check (user_id is null or user_id = auth.uid());
create policy "Admin enquiries read" on public.contact_enquiries for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admin enquiries update" on public.contact_enquiries for update to authenticated
  using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

-- ===== Seed catalog =====
insert into public.diet_plans (slug, name, kind, price, billing_period, tagline, features, is_featured, sort_order) values
('initial-assessment','Initial Clinical Assessment','session',699,'session','Comprehensive Deep-Dive Session',array['30-minute private 1-on-1 audio/video triage','Biometric metabolic baseline review','Foundational 7-day guidance prescription'],false,1),
('review-follow-up','Review & Follow-Up','session',399,'session','Maintenance & Macro Adjustment',array['20-minute targeted progress evaluation','Calorie/Macro fine-tuning & meal swaps','Continuous metabolic compliance logging'],false,2),
('basic-nutrition','Basic Nutrition Plan','membership',1499,'month','Lifestyle reset for general health and balanced everyday diet habits.',array['General nutritional intake assessment','Personalized weekly diet template','Healthy eating & hydration guidelines','Async email query support (48h reply)'],false,3),
('weight-management','Weight Management Plan','membership',2999,'month','Precision calorie & macro targeting for sustainable body recomposition.',array['Personalized weight loss or muscle gain protocol','Gram-level calorie & macro breakdown','Weekly body metric progress logging','Bi-weekly chart revisions & grocery lists'],true,4),
('fitness-muscle','Fitness & Muscle Building Plan','membership',3999,'month','Tailored energy systems for athletes and strength athletes.',array['Hypertrophy lean-mass dietary framework','Pre & post workout nutrient timing','Clean supplement stack integration','Weekly recovery & hydration monitoring'],false,5),
('premium-wellness','Premium Wellness Plan','membership',5999,'month','Integrated care for Thyroid, PCOS, Diabetes, & Gut dysbiosis.',array['Full clinical pathology & lab review','Bespoke therapeutic chart (PCOS, Thyroid)','Weekly 1-on-1 private follow-up calls','Priority WhatsApp direct dietitian access'],false,6);

insert into public.products (slug, name, category, short_description, description, ingredients, benefits, price, mrp, image_url, badge, size_label, rating, review_count, stock, is_vegan, is_gluten_free, is_lab_verified, is_informed_choice, sort_order) values
('whey-protein-isolate-1kg','100% Whey Protein Isolate 1kg','Whey Protein','27g Protein • Zero Sugar • Cold-Filtered','Cold-filtered whey protein isolate with 27g protein per scoop and zero added sugar, batch-tested for purity.','Whey protein isolate, natural cocoa, sunflower lecithin, stevia.',array['Supports lean muscle repair','Fast-absorbing post-workout protein','Low lactose, easy on digestion'],2899,3499,'/__l5e/assets-v1/e60df268-b6c2-4ea8-8d24-edeca48f3ad2/nutrimaster-img18.jpg','Cold-Filtered','1kg Canister',4.9,148,40,false,true,true,true,1),
('omega-3-fish-oil','Triple Strength Omega-3 Fish Oil','Omega-3 EPA/DHA','1000mg EPA/DHA • Anti-Reflux Enteric','Molecularly distilled fish oil delivering 1000mg EPA/DHA per softgel with an enteric coating to prevent reflux.','Purified fish oil concentrate, gelatin softgel, mixed tocopherols.',array['Supports heart health','Helps maintain healthy triglycerides','Supports brain and joint health'],849,1199,'/__l5e/assets-v1/67080725-6962-4a3b-954f-fa85dd7443cb/nutrimaster-img19.jpg','Molecularly Distilled','60 Softgels',4.8,215,60,false,true,true,false,2),
('plant-protein-greens','Organic Plant Protein Greens Blend','Plant-Based Protein','Pea & Brown Rice • Digestive Enzymes','Organic pea and brown rice protein blend with greens and digestive enzymes for complete plant-based nutrition.','Pea protein isolate, brown rice protein, spirulina, wheatgrass, digestive enzyme blend.',array['Complete plant amino acid profile','Gentle on digestion','Adds daily greens'],1499,1899,'/__l5e/assets-v1/76c37cf9-c1e0-43cb-8df8-ca0bef8dd4af/nutrimaster-img20.jpg','100% Plant Bio','500g Eco-Pouch',4.7,92,35,true,true,true,false,3),
('creatine-monohydrate-250g','Micronized Creatine Monohydrate','Creatine Monohydrate','Ultra-Soluble 200 Mesh • Unflavored Pure','Creapure-grade micronized creatine monohydrate, unflavored and mixes instantly.','100% creatine monohydrate (micronized).',array['Supports strength and power output','Helps muscle recovery','Supports cognitive energy'],999,1299,'/__l5e/assets-v1/707f9835-3b0c-4b1f-82c0-b3cedfea2e6b/nutrimaster-img21.jpg','Creapure Grade','250g (83 Servings)',5.0,312,50,true,true,true,true,4),
('daily-multivitamin','Daily Multi-Vitamin & Minerals','Multivitamins','32 Bioactive Nutrients • Chelated Minerals','Whole-food based multivitamin with 32 bioactive nutrients and chelated minerals for better absorption.','Vitamins A, B-complex, C, D3, E, K2; chelated zinc, magnesium, selenium; whole-food blend.',array['Fills daily nutrient gaps','Supports immunity','Supports energy metabolism'],649,899,'/__l5e/assets-v1/29ec3656-8a47-46a8-bf09-51e72098d911/nutrimaster-img22.jpg','Whole-Food Bio','60 Tablets',4.8,174,80,true,true,true,false,5),
('probiotics-50-billion','Clinical Probiotics 50 Billion CFU','Probiotics','16 Broad-Spectrum Strains • Prebiotic FOS','16 broad-spectrum probiotic strains with prebiotic FOS in delayed-release capsules.','Lactobacillus and Bifidobacterium blend (50 billion CFU), FOS, delayed-release capsule.',array['Supports gut microbiome balance','Supports digestion and regularity','Supports immune function'],1199,1599,'/__l5e/assets-v1/c067ea26-1413-4802-bee1-8fac5eb014b2/nutrimaster-img23.jpg','Delayed-Release','30 Delayed-Capsules',4.9,289,45,true,true,true,false,6);

insert into public.recipes (slug, title, category_label, badge, description, image_url, tags, prep_label, calories, protein_g, carbs_g, fat_g, fiber_g, ingredients, method, featured, sort_order) values
('methi-oats-moong-cheela','Methi Oats Moong Cheela','Breakfast / Snack','Low Glycemic • GI 41','Split yellow moong dal paste blended with rolled oats and tender fresh fenugreek leaves for glucose buffering.','/__l5e/assets-v1/e0bd304e-8292-4c68-9712-cb994d15cb08/nutrimaster-img14.jpg',array['diabetes','breakfast','weight-loss'],'15 min',240,14,32,4.5,7,array['50g Yellow Moong Dal (soaked)','20g Rolled Oats Powder','1/2 cup Fresh Fenugreek (Methi)','Ginger, Green Chili, Cumin & Salt'],'Grind moong into smooth batter, fold oats & methi, cast onto cast-iron griddle with 0.5 tsp cold-pressed mustard oil.',true,1),
('cinnamon-chia-pudding','Cinnamon Seed-Cycling Chia Pudding','Hormone Balancer','PCOS • Phase 1 Sync','Overnight soaked black chia seeds suspended in homemade almond milk with Ceylon cinnamon and freshly crushed raw pumpkin seeds.','/__l5e/assets-v1/4bccc323-0086-47c6-bfef-957b01f12429/nutrimaster-img15.jpg',array['pcos','breakfast','snacks'],'10 min prep',210,8,11,14,9,array['2.5 tbsp Organic Black Chia Seeds','180ml Unsweetened Almond Milk','1 tbsp Crushed Raw Pumpkin & Flax','1/2 tsp Pure Ceylon Cinnamon'],'Whisk chia in milk with cinnamon, refrigerate overnight (6 hrs), top with freshly ground raw seeds right before consumption.',false,2),
('paneer-tofu-tikka','Paneer & Tofu High-Protein Tikka','Lean Protein','Muscle Repair • High-Pro','Equal-ratio blend of artisanal A2 cow paneer and organic sprouted soybean tofu marinated in probiotic hung curd and turmeric.','/__l5e/assets-v1/8769416e-25b8-4add-b920-e9c8105e2b74/nutrimaster-img16.jpg',array['high-protein','snacks','weight-loss'],'25 min',360,28,8,24,3,array['80g Organic Firm Tofu + 60g Low-Fat A2 Paneer','2 tbsp Thick Hung Curd / Greek Yogurt','Ajwain, Kashmiri Deghi Mirch, Kasuri Methi','Diced Bell Peppers and Purple Onions'],'Toss cubes in spiced yogurt rub, marinate 20 min, air-fry or bake at 200°C for 12-14 minutes until gently charred.',false,3),
('quinoa-moong-sprout-salad','Quinoa Moong Sprout Warm Salad','Antioxidant Rich','Gut Microbiome Fuel','Enzyme-active sprouted green moong steamed lightly with Andean quinoa, fresh baby spinach, and cold-pressed olive-lemon vinaigrette.','/__l5e/assets-v1/f453a119-784d-4a5f-867b-0aa6f965e7b9/nutrimaster-img17.jpg',array['diabetes','weight-loss','snacks'],'18 min',280,16,38,6,8,array['50g Cooked Tricolor Quinoa','75g Steam-Sprouted Green Gram (Moong)','2 tbsp Pomegranate Arils + Baby Spinach','Lemon Juice, Rock Salt & Crushed Black Pepper'],'Steam sprouts 3 minutes to activate amylase without degrading heat-labile vitamins; fold into warm quinoa and toss with fresh dressing.',false,4),
('paneer-quinoa-bowl','Paneer Quinoa Bowl','Main Meal','Hormone Balancing','Complete amino acid spectrum, zinc for thyroid peroxidase activation, and complex sustained release energy.','/__l5e/assets-v1/e668b316-2f7c-4d18-ad41-40e628922d60/nutrimaster-img08.jpg',array['pcos','high-protein'],'20 min',380,22,34,12,6,array['60g Cooked Quinoa','80g Low-Fat Paneer Cubes','Cucumber, Cherry Tomatoes & Spinach','Lemon, Olive Oil & Roasted Cumin'],'Sear paneer cubes lightly, toss with warm quinoa and vegetables, finish with lemon-olive dressing.',true,5),
('avocado-moong-salad','Avocado Moong Salad','Main Meal','Gut Microbiome Fuel','Monounsaturated lipid carriers for fat-soluble vitamins combined with enzyme-rich sprouted mung legumes.','/__l5e/assets-v1/43f2bd9b-ed01-44f1-abe2-e3f72c7bdf4a/nutrimaster-img09.jpg',array['diabetes','weight-loss'],'12 min',240,11,22,10,8,array['1/2 Ripe Avocado (diced)','75g Sprouted Green Moong','Onion, Tomato & Coriander','Lemon Juice, Chaat Masala & Black Pepper'],'Lightly steam sprouts, fold in avocado and vegetables, season with lemon and spices just before serving.',true,6);
