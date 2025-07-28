"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/nirjla" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nirjalashakya/" },
    { name: "Twitter", href: "https://x.com/nirjalashakya" },
    // { name: "Dribbble", href: "#" },
  ]

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-8 sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Nirjla</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Creative Hub Lead</p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-zinc-600 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-8 text-center"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Nirjla. Crafted with code and creativity.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
