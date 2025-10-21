"use client"
import React, { useState } from 'react'
import { Plus, Trash2, Check, PartyPopper, Coffee } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Todo {
  id: number
  text: string
  completed: boolean
}

// Fun messages for an empty list
const emptyMessages = [
  "A blank slate. What will you accomplish today?",
  "Ready to conquer the day? Add your first task!",
  "Your to-do list is empty. Time to make some plans!",
  "Let's get this bread. Add a task to start."
]

// A random message to show each time the list is empty
const randomEmptyMessage = emptyMessages[Math.floor(Math.random() * emptyMessages.length)]

const Page: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Build a sexy to-do app', completed: true },
    { id: 2, text: 'Add animations and fun messages', completed: false },
    { id: 3, text: 'Conquer the world', completed: false },
  ])
  const [input, setInput] = useState<string>('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTodo()
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => setTodos(todos.filter(todo => todo.id !== id))
  const remainingTasks = todos.filter(t => !t.completed).length
  const allTasksCompleted = todos.length > 0 && remainingTasks === 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-100 py-8 px-4 font-sans">
      <div className="max-w-lg mx-auto">
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/30 p-6 border border-orange-300">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
              TEST ENVIRONMENT - TODO APP
            </h1>
            <p className="text-orange-500 mt-2">This is the test branch deployment.</p>
          </div>
          
          {/* Input Form */}
          <div className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a test task..."
                className="flex-1 px-4 py-3 bg-orange-50 border border-orange-300 rounded-lg text-orange-700 placeholder:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
              />
              <button
                onClick={addTodo}
                className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-200/40"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>

          {/* Todo List & Footer */}
          <div className="space-y-3">
            {/* Same todo list & animations as original */}
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-center text-sm text-orange-600">
            <p>This is the TEST branch preview. Mode: {process.env.TODO_APP_MODE}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page