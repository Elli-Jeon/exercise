import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const supabaseUrl = 'https://lhpxywoprvcrswsmmgnl.supabase.co';
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey!);

export default supabase;
