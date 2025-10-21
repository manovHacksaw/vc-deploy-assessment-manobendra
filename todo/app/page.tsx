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
    // Some default todos to showcase the styling
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
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const remainingTasks = todos.filter(t => !t.completed).length
  const allTasksCompleted = todos.length > 0 && remainingTasks === 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-8 px-4 font-sans">
      <div className="max-w-lg mx-auto">
        {/* Main Card with Glassmorphism Effect */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/30 p-6 border border-slate-700">
          
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              What's Next?
            </h1>
            <p className="text-slate-400 mt-2">Your personal task slayer.</p>
          </div>
          
          {/* Input Form */}
          <div className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g., Learn how to animate things..."
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-all duration-300"
              />
              <button
                onClick={addTodo}
                className="bg-gradient-to-br from-fuchsia-600 to-blue-600 text-white p-3 rounded-lg hover:from-fuchsia-500 hover:to-blue-500 active:scale-95 transition-all duration-300 shadow-lg shadow-fuchsia-900/40"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>

          {/* Todo List with Animations */}
          <div className="space-y-3">
            <AnimatePresence>
              {todos.map(todo => (
                <motion.div
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700"
                >
                  <motion.button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      todo.completed
                        ? 'bg-green-500 border-green-400'
                        : 'border-slate-600 hover:border-green-500'
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    {todo.completed && <Check size={18} className="text-white" />}
                  </motion.button>
                  
                  <span
                    className={`flex-1 transition-all duration-300 ${
                      todo.completed
                        ? 'line-through text-slate-500'
                        : 'text-slate-200'
                    }`}
                  >
                    {todo.text}
                  </span>
                  
                  <motion.button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-slate-500 hover:text-red-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 size={18} />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Conditional Footer Messages */}
          <div className="mt-8 text-center text-sm text-slate-400">
            {todos.length === 0 && !allTasksCompleted && (
              <div className="py-4 flex flex-col items-center gap-2">
                <Coffee size={24} />
                <p>{randomEmptyMessage}</p>
              </div>
            )}
            {allTasksCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 flex flex-col items-center gap-2 text-green-400"
              >
                <PartyPopper size={24} />
                <p>All done! You crushed it. Time for a break! 🥳</p>
              </motion.div>
            )}
            {todos.length > 0 && !allTasksCompleted && (
              <p>{remainingTasks} of {todos.length} tasks remaining. Keep going!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page