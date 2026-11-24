export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string
          quantity: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          quantity?: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          quantity?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      client_intakes: {
        Row: {
          activity_level: string
          age: number
          age_group: string | null
          allergies: string[]
          bmi: number
          city: string | null
          created_at: string
          diet_preference: string
          email: string
          full_name: string
          gender: string
          health_conditions: string[]
          health_goals: string[]
          height_cm: number
          id: string
          lifestyle: string | null
          notes: string | null
          nutritional_status: string | null
          phone: string
          primary_goal: string
          selected_plan_slug: string | null
          status: string
          target_weight_kg: number | null
          user_id: string
          weight_kg: number
        }
        Insert: {
          activity_level: string
          age: number
          age_group?: string | null
          allergies?: string[]
          bmi: number
          city?: string | null
          created_at?: string
          diet_preference: string
          email: string
          full_name: string
          gender: string
          health_conditions?: string[]
          health_goals?: string[]
          height_cm: number
          id?: string
          lifestyle?: string | null
          notes?: string | null
          nutritional_status?: string | null
          phone: string
          primary_goal: string
          selected_plan_slug?: string | null
          status?: string
          target_weight_kg?: number | null
          user_id: string
          weight_kg: number
        }
        Update: {
          activity_level?: string
          age?: number
          age_group?: string | null
          allergies?: string[]
          bmi?: number
          city?: string | null
          created_at?: string
          diet_preference?: string
          email?: string
          full_name?: string
          gender?: string
          health_conditions?: string[]
          health_goals?: string[]
          height_cm?: number
          id?: string
          lifestyle?: string | null
          notes?: string | null
          nutritional_status?: string | null
          phone?: string
          primary_goal?: string
          selected_plan_slug?: string | null
          status?: string
          target_weight_kg?: number | null
          user_id?: string
          weight_kg?: number
        }
        Relationships: [
          {
            foreignKeyName: "client_intakes_selected_plan_slug_fkey"
            columns: ["selected_plan_slug"]
            isOneToOne: false
            referencedRelation: "diet_plans"
            referencedColumns: ["slug"]
          },
        ]
      }
      consultations: {
        Row: {
          amount: number
          appointment_date: string
          client_name: string
          clinician: string
          created_at: string
          id: string
          mode: string
          notes: string | null
          payment_reference: string | null
          payment_status: string
          phone: string
          plan_id: string | null
          plan_name: string
          status: string
          time_slot: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          appointment_date: string
          client_name: string
          clinician: string
          created_at?: string
          id?: string
          mode: string
          notes?: string | null
          payment_reference?: string | null
          payment_status?: string
          phone: string
          plan_id?: string | null
          plan_name: string
          status?: string
          time_slot: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          appointment_date?: string
          client_name?: string
          clinician?: string
          created_at?: string
          id?: string
          mode?: string
          notes?: string | null
          payment_reference?: string | null
          payment_status?: string
          phone?: string
          plan_id?: string | null
          plan_name?: string
          status?: string
          time_slot?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "consultations_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "diet_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_enquiries: {
        Row: {
          created_at: string
          email: string | null
          id: string
          kind: string
          message: string
          name: string
          phone: string | null
          status: string
          subject: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          kind?: string
          message: string
          name: string
          phone?: string | null
          status?: string
          subject?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          kind?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string
          subject?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      diet_plans: {
        Row: {
          active: boolean
          billing_period: string
          created_at: string
          features: string[]
          id: string
          is_featured: boolean
          kind: string
          name: string
          price: number
          slug: string
          sort_order: number
          tagline: string | null
        }
        Insert: {
          active?: boolean
          billing_period?: string
          created_at?: string
          features?: string[]
          id?: string
          is_featured?: boolean
          kind?: string
          name: string
          price: number
          slug: string
          sort_order?: number
          tagline?: string | null
        }
        Update: {
          active?: boolean
          billing_period?: string
          created_at?: string
          features?: string[]
          id?: string
          is_featured?: boolean
          kind?: string
          name?: string
          price?: number
          slug?: string
          sort_order?: number
          tagline?: string | null
        }
        Relationships: []
      }
      food_logs: {
        Row: {
          calories: number
          carbs_g: number
          created_at: string
          fat_g: number
          fiber_g: number
          food_name: string
          id: string
          logged_on: string
          meal_type: string
          protein_g: number
          score: number | null
          source: string
          user_id: string
        }
        Insert: {
          calories?: number
          carbs_g?: number
          created_at?: string
          fat_g?: number
          fiber_g?: number
          food_name: string
          id?: string
          logged_on?: string
          meal_type: string
          protein_g?: number
          score?: number | null
          source?: string
          user_id: string
        }
        Update: {
          calories?: number
          carbs_g?: number
          created_at?: string
          fat_g?: number
          fiber_g?: number
          food_name?: string
          id?: string
          logged_on?: string
          meal_type?: string
          protein_g?: number
          score?: number | null
          source?: string
          user_id?: string
        }
        Relationships: []
      }
      nutriscan_scans: {
        Row: {
          analysis: Json
          calories: number
          carbs_g: number
          created_at: string
          fat_g: number
          fiber_g: number
          food_name: string
          id: string
          method: string
          protein_g: number
          score: number
          serving: string | null
          user_id: string
          verdict: string
        }
        Insert: {
          analysis?: Json
          calories?: number
          carbs_g?: number
          created_at?: string
          fat_g?: number
          fiber_g?: number
          food_name: string
          id?: string
          method?: string
          protein_g?: number
          score: number
          serving?: string | null
          user_id: string
          verdict: string
        }
        Update: {
          analysis?: Json
          calories?: number
          carbs_g?: number
          created_at?: string
          fat_g?: number
          fiber_g?: number
          food_name?: string
          id?: string
          method?: string
          protein_g?: number
          score?: number
          serving?: string | null
          user_id?: string
          verdict?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: string
          line_total: number
          order_id: string
          product_id: string | null
          product_name: string
          quantity: number
          unit_price: number
        }
        Insert: {
          id?: string
          line_total: number
          order_id: string
          product_id?: string | null
          product_name: string
          quantity: number
          unit_price: number
        }
        Update: {
          id?: string
          line_total?: number
          order_id?: string
          product_id?: string | null
          product_name?: string
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          address_line: string | null
          city: string | null
          created_at: string
          fulfilment: string
          id: string
          notes: string | null
          order_number: string
          payment_method: string
          payment_reference: string | null
          payment_status: string
          phone: string
          pincode: string | null
          shipping_fee: number
          shipping_name: string
          status: string
          subtotal: number
          total: number
          tracking_number: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address_line?: string | null
          city?: string | null
          created_at?: string
          fulfilment?: string
          id?: string
          notes?: string | null
          order_number: string
          payment_method: string
          payment_reference?: string | null
          payment_status?: string
          phone: string
          pincode?: string | null
          shipping_fee?: number
          shipping_name: string
          status?: string
          subtotal: number
          total: number
          tracking_number?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address_line?: string | null
          city?: string | null
          created_at?: string
          fulfilment?: string
          id?: string
          notes?: string | null
          order_number?: string
          payment_method?: string
          payment_reference?: string | null
          payment_status?: string
          phone?: string
          pincode?: string | null
          shipping_fee?: number
          shipping_name?: string
          status?: string
          subtotal?: number
          total?: number
          tracking_number?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean
          badge: string | null
          benefits: string[]
          brand: string
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          ingredients: string | null
          is_gluten_free: boolean
          is_informed_choice: boolean
          is_lab_verified: boolean
          is_vegan: boolean
          mrp: number | null
          name: string
          price: number
          rating: number
          review_count: number
          short_description: string | null
          size_label: string | null
          slug: string
          sort_order: number
          stock: number
          updated_at: string
        }
        Insert: {
          active?: boolean
          badge?: string | null
          benefits?: string[]
          brand?: string
          category: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          ingredients?: string | null
          is_gluten_free?: boolean
          is_informed_choice?: boolean
          is_lab_verified?: boolean
          is_vegan?: boolean
          mrp?: number | null
          name: string
          price: number
          rating?: number
          review_count?: number
          short_description?: string | null
          size_label?: string | null
          slug: string
          sort_order?: number
          stock?: number
          updated_at?: string
        }
        Update: {
          active?: boolean
          badge?: string | null
          benefits?: string[]
          brand?: string
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          ingredients?: string | null
          is_gluten_free?: boolean
          is_informed_choice?: boolean
          is_lab_verified?: boolean
          is_vegan?: boolean
          mrp?: number | null
          name?: string
          price?: number
          rating?: number
          review_count?: number
          short_description?: string | null
          size_label?: string | null
          slug?: string
          sort_order?: number
          stock?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          activity_level: string | null
          age: number | null
          age_group: string | null
          allergies: string[]
          city: string | null
          clinical_notes: string | null
          created_at: string
          current_weight_kg: number | null
          daily_calorie_target: number | null
          daily_water_target_ml: number
          date_of_birth: string | null
          diet_preference: string | null
          email: string | null
          full_name: string | null
          gender: string | null
          health_conditions: string[]
          health_goals: string[]
          height_cm: number | null
          id: string
          lifestyle: string | null
          nutritional_status: string | null
          onboarding_complete: boolean
          onboarding_step: number
          phone: string | null
          primary_goal: string | null
          selected_plan_slug: string | null
          target_weight_kg: number | null
          updated_at: string
        }
        Insert: {
          activity_level?: string | null
          age?: number | null
          age_group?: string | null
          allergies?: string[]
          city?: string | null
          clinical_notes?: string | null
          created_at?: string
          current_weight_kg?: number | null
          daily_calorie_target?: number | null
          daily_water_target_ml?: number
          date_of_birth?: string | null
          diet_preference?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          health_conditions?: string[]
          health_goals?: string[]
          height_cm?: number | null
          id: string
          lifestyle?: string | null
          nutritional_status?: string | null
          onboarding_complete?: boolean
          onboarding_step?: number
          phone?: string | null
          primary_goal?: string | null
          selected_plan_slug?: string | null
          target_weight_kg?: number | null
          updated_at?: string
        }
        Update: {
          activity_level?: string | null
          age?: number | null
          age_group?: string | null
          allergies?: string[]
          city?: string | null
          clinical_notes?: string | null
          created_at?: string
          current_weight_kg?: number | null
          daily_calorie_target?: number | null
          daily_water_target_ml?: number
          date_of_birth?: string | null
          diet_preference?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          health_conditions?: string[]
          health_goals?: string[]
          height_cm?: number | null
          id?: string
          lifestyle?: string | null
          nutritional_status?: string | null
          onboarding_complete?: boolean
          onboarding_step?: number
          phone?: string | null
          primary_goal?: string | null
          selected_plan_slug?: string | null
          target_weight_kg?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_selected_plan_slug_fkey"
            columns: ["selected_plan_slug"]
            isOneToOne: false
            referencedRelation: "diet_plans"
            referencedColumns: ["slug"]
          },
        ]
      }
      recipes: {
        Row: {
          active: boolean
          badge: string | null
          calories: number
          carbs_g: number
          category_label: string | null
          created_at: string
          description: string | null
          fat_g: number
          featured: boolean
          fiber_g: number
          id: string
          image_url: string | null
          ingredients: string[]
          method: string | null
          prep_label: string | null
          protein_g: number
          slug: string
          sort_order: number
          tags: string[]
          title: string
        }
        Insert: {
          active?: boolean
          badge?: string | null
          calories?: number
          carbs_g?: number
          category_label?: string | null
          created_at?: string
          description?: string | null
          fat_g?: number
          featured?: boolean
          fiber_g?: number
          id?: string
          image_url?: string | null
          ingredients?: string[]
          method?: string | null
          prep_label?: string | null
          protein_g?: number
          slug: string
          sort_order?: number
          tags?: string[]
          title: string
        }
        Update: {
          active?: boolean
          badge?: string | null
          calories?: number
          carbs_g?: number
          category_label?: string | null
          created_at?: string
          description?: string | null
          fat_g?: number
          featured?: boolean
          fiber_g?: number
          id?: string
          image_url?: string | null
          ingredients?: string[]
          method?: string | null
          prep_label?: string | null
          protein_g?: number
          slug?: string
          sort_order?: number
          tags?: string[]
          title?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          amount: number
          created_at: string
          id: string
          kind: string
          payment_reference: string | null
          plan_name: string
          renews_on: string | null
          starts_on: string | null
          status: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          kind: string
          payment_reference?: string | null
          plan_name: string
          renews_on?: string | null
          starts_on?: string | null
          status?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          kind?: string
          payment_reference?: string | null
          plan_name?: string
          renews_on?: string | null
          starts_on?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      water_logs: {
        Row: {
          amount_ml: number
          created_at: string
          id: string
          logged_on: string
          user_id: string
        }
        Insert: {
          amount_ml: number
          created_at?: string
          id?: string
          logged_on?: string
          user_id: string
        }
        Update: {
          amount_ml?: number
          created_at?: string
          id?: string
          logged_on?: string
          user_id?: string
        }
        Relationships: []
      }
      weight_logs: {
        Row: {
          created_at: string
          id: string
          logged_on: string
          user_id: string
          weight_kg: number
        }
        Insert: {
          created_at?: string
          id?: string
          logged_on?: string
          user_id: string
          weight_kg: number
        }
        Update: {
          created_at?: string
          id?: string
          logged_on?: string
          user_id?: string
          weight_kg?: number
        }
        Relationships: []
      }
      wishlist_items: {
        Row: {
          created_at: string
          id: string
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wishlist_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      book_consultation: {
        Args: {
          _client_name: string
          _clinician: string
          _date: string
          _mode: string
          _notes?: string
          _phone: string
          _plan_slug: string
          _slot: string
        }
        Returns: string
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      place_order: {
        Args: {
          _address: string
          _city: string
          _fulfilment: string
          _name: string
          _notes?: string
          _payment_method: string
          _phone: string
          _pincode: string
        }
        Returns: string
      }
      request_nutriscan_plan: { Args: { _tier: string }; Returns: string }
      save_client_registration: {
        Args: { _complete?: boolean; _data: Json; _step: number }
        Returns: string
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
