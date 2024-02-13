import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lbvzlwqkrdhudqywajbw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxidnpsd3FrcmRodWRxeXdhamJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5MTU2ODgsImV4cCI6MjAyMjQ5MTY4OH0.7gbWa4eI6FI5c_zOx49uLtOSf26p6MM3ctxo1pv4FuA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
