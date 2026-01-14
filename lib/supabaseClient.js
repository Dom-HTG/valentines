
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Set the default schema to valentine_orders
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: { schema: 'valentine_orders' }
})
