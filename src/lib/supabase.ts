import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export interface Problem {
  id: string
  user_id: string
  title: string
  description: string
  image_url: string
  problem_type: 'plantas_daninhas' | 'doencas_solo' | 'nematoides' | 'doencas_foliares' | 'pragas' | 'deficiencia_nutricional'
  identified_problem?: string
  bioinsumo_suggestions?: BioinsumoSuggestion[]
  location?: string
  created_at: string
}

export interface BioinsumoSuggestion {
  id: string
  name: string
  description: string
  application_method: string
  dosage: string
  supplier_contacts: SupplierContact[]
}

export interface SupplierContact {
  id: string
  name: string
  phone: string
  email?: string
  location: string
  distance?: number
}

export interface UserProfile {
  id: string
  email: string
  full_name: string
  location: string
  property_size?: string
  main_crops?: string[]
  created_at: string
}