import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpnwfgkyswexznhkkjpw.supabase.co";
const supabaseAnonKey =
  "sb_publishable_HgJ1EwxuEIMarOX1TVlAFQ_Vgsmb_ai";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
