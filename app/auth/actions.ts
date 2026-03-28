'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createClient } from '@/app/lib/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const rememberMe = formData.get('remember') === 'on'

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // Show the exact auth error from Supabase when login fails.
  if (error) return { error: error.message }

  // Extra guard if no session is returned even without explicit error.
  if (!data?.session) {
    return { error: 'Unable to sign in. Please check your credentials and try again.' }
  }

  // ``remember me`` support: set a persistent cookie that can be read later.
  // Supabase itself sets its own HTTP-only auth cookies via server client.
  const cookieStore = await cookies()

  if (rememberMe) {
    cookieStore.set({
      name: 'remember_me',
      value: '1',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  } else {
    cookieStore.delete('remember_me')
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Basic validation before hitting Supabase
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' }
  }

  const { data, error } = await supabase.auth.signUp({ email, password })

  // If Supabase returns an error object, display it to the user.
  if (error) return { error: error.message }

  // Some setups may return no user when email already exists; handle that gracefully.
  if (!data?.user && data.user?.identities?.length === 0) {
    return { error: 'This email is already registered. Please sign in or use a different email.' }
  }

  // Supabase sends a confirmation email — tell the user
  redirect('/login?message=Check your email to confirm your account')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}