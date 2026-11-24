import { describe,it,expect } from 'vitest';
import { registrationSchema,nextIntakeStep } from './registration';
const details={full_name:'Test Customer',phone:'9876543210',email:'customer@example.com',city:'Chandigarh',age:42,gender:'Female',age_group:'36–45',height_cm:165,weight_kg:70,target_weight_kg:65,lifestyle:'Shift work',activity_level:'Lightly Active',health_goals:['Healthy Weight Gain','General Vitality & Energy'],diet_preference:'Vegetarian',nutritional_status:'Nutrition deficiency',health_conditions:['PCOS / PCOD','Thyroid / Hypothyroid'],allergies:['Lactose / Dairy','Tree Nuts / Peanuts'],selected_plan_slug:'fitness-muscle',notes:''};
describe('complete registration',()=>{
 it('retains gender',()=>expect(registrationSchema.parse(details).gender).toBe('Female'));
 it('retains age group',()=>expect(registrationSchema.parse(details).age_group).toBe('36–45'));
 it('retains lifestyle',()=>expect(registrationSchema.parse(details).lifestyle).toBe('Shift work'));
 it('retains activity level',()=>expect(registrationSchema.parse(details).activity_level).toBe('Lightly Active'));
 it('retains all health goals',()=>expect(registrationSchema.parse(details).health_goals).toEqual(['Healthy Weight Gain','General Vitality & Energy']));
 it('retains nutritional status',()=>expect(registrationSchema.parse(details).nutritional_status).toBe('Nutrition deficiency'));
 it('retains all health conditions',()=>expect(registrationSchema.parse(details).health_conditions).toEqual(['PCOS / PCOD','Thyroid / Hypothyroid']));
 it('retains all food allergies',()=>expect(registrationSchema.parse(details).allergies).toEqual(['Lactose / Dairy','Tree Nuts / Peanuts']));
 it('Save & Next advances from first to second step',()=>expect(nextIntakeStep(1)).toBe(2));
 it('retains chosen diet plan',()=>expect(registrationSchema.parse(details).selected_plan_slug).toBe('fitness-muscle'));
 it('rejects an invalid contact',()=>expect(registrationSchema.safeParse({...details,phone:'123'}).success).toBe(false));
});
