import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://bwcvsziflddiyibbkmep.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Y3ZzemlmbGRkaXlpYmJrbWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NDAxMTcsImV4cCI6MjA5NTAxNjExN30.QXie5maS2JzsVPn4Fr4Nx9Luxg_OeTgEfWRGX1yM0-s"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)