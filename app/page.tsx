
export default function HomePage() {
  return (
    <>
      <section className="text-center py-32 px-6 bg-gradient-to-br from-white via-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight text-gray-900">
          Turn meetings into<br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">clear action items</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload any recording and get a summary, decisions, and action items in seconds with AI-powered intelligence.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/signup" className="btn-primary text-base">
            Start free today
          </a>
          <a href="/demo" className="btn-secondary text-base">
            Watch demo
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Summaries</h3>
            <p className="text-gray-600">Get concise meeting summaries with key points and discussion highlights.</p>
          </div>
          <div className="card p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Action Items</h3>
            <p className="text-gray-600">Automatically extract and assign action items with clear owners and deadlines.</p>
          </div>
          <div className="card p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
            <p className="text-gray-600">Process any recording in seconds and get instant insights and recommendations.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your meetings?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of teams already using MeetingAI to make meetings more productive.</p>
          <a href="/signup" className="btn-primary text-base inline-block">
            Get started free
          </a>
        </div>
      </section>
    </>
  )
}
