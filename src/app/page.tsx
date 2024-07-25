// File: src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to Linguafluent</h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
        Improve your language skills through situational conversations with our AI chatbot.
      </p>
      <div className="space-x-4">
        <Link href="/chat" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Start Chatting
        </Link>
        <Link href="/situations" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Manage Situations
        </Link>
      </div>
    </div>
  )
}
