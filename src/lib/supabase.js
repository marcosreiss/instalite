import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpnwfgkyswexznhkkjpw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwbndmZ2t5c3dleHpuaGtranB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MTgzOTgsImV4cCI6MjA1MjM5NDM5OH0.wX0P9fR-Kp86i6rC-C80GwGy_FNuMKTVLG-8rO-D3qI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
