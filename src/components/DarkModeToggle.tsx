// File: src/components/DarkModeToggle.tsx
'use client'

import { useTheme } from '../context/ThemeContext'

export const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

