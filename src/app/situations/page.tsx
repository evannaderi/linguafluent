// File: src/app/situations/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '../../context/ThemeContext'
import { DarkModeToggle } from '../../components/DarkModeToggle'

type Situation = {
  id: number
  name: string
  description: string
}

export default function Situations() {
  const { darkMode } = useTheme()
  const [situations, setSituations] = useState<Situation[]>([
    { id: 1, name: "At the Restaurant", description: "Practice ordering food and drinks" },
    { id: 2, name: "Job Interview", description: "Prepare for common interview questions" },
  ])
  const [newSituation, setNewSituation] = useState({ name: '', description: '' })

  const handleAddSituation = () => {
    if (newSituation.name && newSituation.description) {
      setSituations([...situations, { ...newSituation, id: situations.length + 1 }])
      setNewSituation({ name: '', description: '' })
    }
  }

return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'} flex flex-col`}>
      <header className={`${darkMode ? 'bg-purple-800' : 'bg-purple-500'} p-4 text-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Situations</h1>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-purple-200 transition duration-300">Home</Link>
            <DarkModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 mb-4`}>
          <h2 className="text-xl font-semibold mb-4">Add New Situation</h2>
          <input
            type="text"
            value={newSituation.name}
            onChange={(e) => setNewSituation({ ...newSituation, name: e.target.value })}
            className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded p-2 mb-2`}
            placeholder="Situation Name"
          />
          <textarea
            value={newSituation.description}
            onChange={(e) => setNewSituation({ ...newSituation, description: e.target.value })}
            className={`w-full border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'} rounded p-2 mb-2`}
            placeholder="Situation Description"
          ></textarea>
          <button
            onClick={handleAddSituation}
            className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white px-4 py-2 rounded transition duration-300`}
          >
            Add Situation
          </button>
        </div>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
          <h2 className="text-xl font-semibold mb-4">Saved Situations</h2>
          <div className="space-y-4">
            {situations.map(situation => (
              <div key={situation.id} className={`border ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200'} rounded p-4`}>
                <h3 className="text-lg font-semibold">{situation.name}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{situation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
