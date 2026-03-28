import Link from 'next/link'
import { createClient } from '@/app/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        {user ? (
          <>
            <p className="mb-6 text-gray-700">Hello, <strong>{user.email}</strong>! You are signed in.</p>
            <div className="flex gap-3">
              <Link href="/" className="btn-secondary">Home</Link>
              <Link href="/login" className="btn-primary">Switch account</Link>
            </div>
          </>
        ) : (
          <p className="text-gray-700">No user session found. Please <Link href="/login" className="text-blue-600 underline">sign in</Link>.</p>
        )}
      </div>
    </div>
  )
}
