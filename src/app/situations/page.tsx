// File: src/app/situations/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

type Situation = {
  id: number
  name: string
  description: string
}

export default function Situations() {
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-purple-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Situations</h1>
          <Link href="/" className="text-white hover:text-purple-200 transition duration-300">Home</Link>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-semibold mb-4">Add New Situation</h2>
          <input
            type="text"
            value={newSituation.name}
            onChange={(e) => setNewSituation({ ...newSituation, name: e.target.value })}
            className="w-full border border-gray-300 rounded p-2 mb-2"
            placeholder="Situation Name"
          />
          <textarea
            value={newSituation.description}
            onChange={(e) => setNewSituation({ ...newSituation, description: e.target.value })}
            className="w-full border border-gray-300 rounded p-2 mb-2"
            placeholder="Situation Description"
          ></textarea>
          <button
            onClick={handleAddSituation}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
          >
            Add Situation
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">Saved Situations</h2>
          <div className="space-y-4">
            {situations.map(situation => (
              <div key={situation.id} className="border border-gray-200 rounded p-4">
                <h3 className="text-lg font-semibold">{situation.name}</h3>
                <p className="text-gray-600">{situation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
