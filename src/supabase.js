import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oufdjrrfwhmwirixnjtw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91ZmRqcnJmd2htd2lyaXhuanR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2ODI5OTMsImV4cCI6MjAzODI1ODk5M30.ZFHyONKkOlvPvzc0ZwEzmwIHRpIxjAkkKP8Qm4FnYxI'
export const supabase = createClient(supabaseUrl, supabaseKey)