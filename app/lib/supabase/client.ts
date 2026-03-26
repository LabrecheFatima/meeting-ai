import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    return createBrowserClient(
        process.env.m_mSUPABASE_URL!,
        process.env.m_SUPABASE_ANON_KEY!
    );
}