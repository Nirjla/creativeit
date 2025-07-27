"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { supabase } from "@/lib/supabase-client"
import { Loader2 } from "lucide-react"
import { Project } from "@/lib/types"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: "some",
  })
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFeaturedProjects()
  }, [])

  const fetchFeaturedProjects = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(4)

      if (error) throw error

      setProjects(data || [])
    } catch (err) {
      console.error("Error fetching projects:", err)
      setError("Failed to load projects")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="relative py-20 bg-white dark:bg-zinc-800">
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
      <section className="relative py-20 bg-white dark:bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-20 bg-white dark:bg-zinc-800">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">Crafting digital experiences through code and creativity</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image_url || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                  {project.tech_stack?.join(", ") || "No tech stack specified"}
                </p>
                {project.description && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2">{project.description}</p>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  )
}
