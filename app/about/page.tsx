
export const metadata= {title: 'About · MeetingAI'};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <p className="text-xs text-blue-600 uppercase tracking-widest font-bold mb-3">About</p>
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Built for teams who meet a lot</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-12">
        MeetingAI is a solo project built with Next.js, Supabase, AssemblyAI, and Claude. 
        The goal: make every meeting actionable without anyone having to take notes.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { num: '~24', label: 'Features across 5 phases' },
          { num: '7',   label: 'Pages in the full app' },
          { num: '3',   label: 'Backend API routes' },
          { num: '1',   label: 'Developer building it' },
        ].map(item => (
          <div key={item.label} className="card p-6 text-center">
            <p className="text-4xl font-bold text-blue-600">{item.num}</p>
            <p className="text-sm text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-blue-600 uppercase tracking-widest font-bold mb-4">Tech stack</p>
      <div className="flex flex-wrap gap-3">
        {['Next.js 14','TypeScript','Supabase','AssemblyAI','Claude API','Tailwind CSS','Vercel']
          .map(t => <span key={t} className="text-sm bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-2 font-medium">{t}</span>)}
      </div>
    </section>
  )
}