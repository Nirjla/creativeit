"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between p-6">
      {/* Left Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800/80">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">N</span>
        </div>
      </motion.div>

      {/* Right Logo */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800/80">
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 dark:from-zinc-300 dark:to-zinc-500"></div>
        </div>
      </motion.div>
    </header>
  )
}
