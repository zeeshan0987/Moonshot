import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.VITE_IMG_APP_SUPERBASE_URL
const supabaseKey = import.meta.env.VITE_IMG_APP_SUPERBASE_ANON_KEY

export const  supabase = createClient(supabaseUrl,supabaseKey )
 