// File: src/app/chat/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Message = {
  id: number
  text: string
  sender: 'user' | 'bot'
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [situation, setSituation] = useState('')

  useEffect(() => {
    // Simulating bot's initial message
    setMessages([{ id: 1, text: "Hello! What situation would you like to practice today?", sender: 'bot' }])
  }, [])

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, text: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput('')
      
      // Simulating bot response
      setTimeout(() => {
        const botResponse: Message = { id: messages.length + 2, text: "That's great! Let's practice that situation. How can I assist you?", sender: 'bot' }
        setMessages(prev => [...prev, botResponse])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Linguafluent Chat</h1>
          <Link href="/" className="text-white hover:text-blue-200 transition duration-300">Home</Link>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 flex flex-col">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Current Situation:</h2>
          <p>{situation || "No situation selected"}</p>
        </div>
        <div className="flex-grow bg-white rounded-lg shadow-md p-4 mb-4 overflow-y-auto">
          {messages.map(message => (
            <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  )
}
