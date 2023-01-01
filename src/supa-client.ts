import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (import.meta as any).env.APIURL;
const supabaseKey = (import.meta as any).env.ANONKEY;

export const supaClient = createClient(supabaseUrl, supabaseKey);

