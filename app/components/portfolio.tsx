"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from "@/lib/supabase-client"
import { Project } from "@/lib/types"
import { Loader2 } from "lucide-react"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [error, setError] = useState<string | null>(null)
  const categories = ["all", "frontend", "backend", "design", "mobile"]
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false })
        if (error) throw error
        setProjects(data || [])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching projects:", error)
        setError("Failed to load projects")
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  // const works = [
  //   {
  //     id: 1,
  //     title: "E-commerce Platform",
  //     category: "frontend",
  //     image: "/placeholder.svg?height=400&width=600",
  //     year: "2024",
  //     tech: ["Next.js", "TypeScript", "Tailwind"],
  //   },
  //   {
  //     id: 2,
  //     title: "API Gateway Service",
  //     category: "backend",
  //     image: "/placeholder.svg?height=400&width=600",
  //     year: "2023",
  //     tech: ["Node.js", "GraphQL", "PostgreSQL"],
  //   },
  //   {
  //     id: 3,
  //     title: "Design System",
  //     category: "design",
  //     image: "/placeholder.svg?height=400&width=600",
  //     year: "2024",
  //     tech: ["Figma", "Storybook", "React"],
  //   },
  //   {
  //     id: 4,
  //     title: "Trading App",
  //     category: "mobile",
  //     image: "/placeholder.svg?height=400&width=600",
  //     year: "2023",
  //     tech: ["React Native", "Redux", "WebSocket"],
  //   },
  //   {
  //     id: 5,
  //     title: "Analytics Dashboard",
  //     category: "frontend",
  //     image: "/placeholder.svg?height=400&width=600",
  //     year: "2024",
  //     tech: ["React", "D3.js", "Chart.js"],
  //   },
  //   {
  //     id: 6,
  //     title: "Microservices Architecture",
  //     category: "backend",
  //     image: "/placeholder.svg?height=400&width=600",
  //     year: "2023",
  //     tech: ["Docker", "Kubernetes", "Go"],
  //   },
  // ]

  const filteredWorks = projects.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))
  if (loading) {
    return (
      <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-zinc-600 dark:text-zinc-400" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Portfolio
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            A collection of projects spanning frontend, backend, and design
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm capitalize transition-all ${selectedCategory === category
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                : "border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700"
                }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={work.image_url || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{work.title}</h3>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">{work.year}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {work.tech_stack.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs text-zinc-600 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
