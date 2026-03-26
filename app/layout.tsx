import Link from 'next/link';
import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shadow-sm bg-white sticky top-0 z-50">
          <Link href="/" className="font-normal text-xl bg-white text-black px-4 py-2">
            MeetingAI
          </Link>
          <div className="flex gap-8 text-sm">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>
          <Link href="/signup" className="btn-primary text-sm">
            Get started
          </Link>
        </nav>
        <main className="bg-white">{children}</main>
        <footer className="border-t border-gray-200 px-6 py-8 text-sm text-gray-600 flex justify-between bg-gray-50">
          <span>© 2025 MeetingAI</span>
          <span className="flex gap-4"><a href="#" className="hover:text-blue-600">Privacy</a> · <a href="#" className="hover:text-blue-600">Terms</a></span>
        </footer>
      </body>
    </html>
  )
}
