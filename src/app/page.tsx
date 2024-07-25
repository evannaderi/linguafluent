// File: src/app/page.tsx
'use client'

import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { DarkModeToggle } from '../components/DarkModeToggle'

export default function Home() {
  const { darkMode } = useTheme()

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 to-purple-100'} flex flex-col items-center justify-center p-4`}>
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      <h1 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-8`}>Welcome to Linguafluent</h1>
      <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 text-center max-w-2xl`}>
        Improve your language skills through situational conversations with our AI chatbot.
      </p>
      <div className="space-x-4">
        <Link href="/chat" className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded transition duration-300`}>
          Start Chatting
        </Link>
        <Link href="/situations" className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white font-bold py-2 px-4 rounded transition duration-300`}>
          Manage Situations
        </Link>
      </div>
    </div>
  )
}
