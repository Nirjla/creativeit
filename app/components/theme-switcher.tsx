"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./theme-provider"
import { Sun, Moon, Monitor, Palette } from "lucide-react"
import { useState } from "react"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false)

  const themes = [
    { name: "light", icon: Sun, label: "Light", color: "bg-zinc-100" },
    { name: "dark", icon: Moon, label: "Dark", color: "bg-zinc-900" },
  ]

  const currentTheme = themes.find((t) => t.name === theme) || themes[0]
  const CurrentIcon = currentTheme.icon

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isThemeMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-48 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm shadow-lg"
          >
            <div className="p-2">
              {themes.map((themeOption, index) => {
                const Icon = themeOption.icon
                return (
                  <motion.button
                    key={themeOption.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setTheme(themeOption.name)
                      setIsThemeMenuOpen(false)
                    }}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 ${theme === themeOption.name
                        ? "bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-600 dark:text-zinc-400"
                      }`}
                  >
                    <div className={`h-3 w-3 rounded-full ${themeOption.color}`} />
                    <Icon className="h-4 w-4" />
                    {themeOption.label}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CurrentIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
      </motion.button>
    </div>
  )
}
