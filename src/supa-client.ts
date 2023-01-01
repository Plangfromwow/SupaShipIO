import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl = (import.meta as any).env.APIURL;
const supabaseKey = (import.meta as any).env.ANONKEY;

export const supaClient = createClient<Database>(supabaseUrl, supabaseKey);

supaClient.from('user_profiles').select('*').then(({ data }) => { });
