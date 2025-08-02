"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { supabase } from "@/lib/supabase-client"
import { Sparkles } from "lucide-react"
import { Project } from "@/lib/types"
import { Zap, Rocket, Palette, Code, Star, Eye, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: "some",
  })
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showComingSoon, setShowComingSoon] = useState(true)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    setShowComingSoon(true)
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
      // .limit(4)

      if (error) throw error

      setProjects(data || [])
    } catch (err) {
      console.error("Error fetching projects:", err)
      setError("Failed to load projects")
    } finally {
      setLoading(false)
    }
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
  console.log(projects)
  const upcomingProjects = [
    {
      ...projects[0],
      progress: 0,
      status: "Starting Soon",
      color: "from-purple-500 to-pink-500",
      icon: Rocket,
    },
    {
      ...projects[1],
      progress: 0,
      status: "Starting Soon",
      color: "from-blue-500 to-cyan-500",
      icon: Zap,
    },
    // {
    //   title: "Mobile Experience Platform",
    //   category: "Mobile App",
    //   progress: 60,
    //   status: "Design Phase",
    //   tech: ["React Native", "Node.js", "GraphQL"],
    //   color: "from-purple-500 to-pink-500",
    //   icon: Rocket,
    //   description: "Next-generation mobile experience with seamless interactions",
    // },
    // {
    //   title: "Creative Design System",
    //   category: "Design System",
    //   progress: 85,
    //   status: "Testing",
    //   tech: ["Figma", "Storybook", "React"],
    //   color: "from-green-500 to-emerald-500",
    //   icon: Palette,
    //   description: "Comprehensive design system for modern applications",
    // },
    // {
    //   title: "Real-time Collaboration Tool",
    //   category: "SaaS Platform",
    //   progress: 40,
    //   status: "Planning",
    //   tech: ["WebSocket", "Redis", "PostgreSQL"],
    //   color: "from-orange-500 to-red-500",
    //   icon: Code,
    //   description: "Advanced collaboration platform for distributed teams",
    // },
    // {
    //   title: "E-commerce Innovation",
    //   category: "E-commerce",
    //   progress: 90,
    //   status: "Final Review",
    //   tech: ["Next.js", "Stripe", "Tailwind"],
    //   color: "from-indigo-500 to-purple-500",
    //   icon: Star,
    //   description: "Revolutionary shopping experience with AI recommendations",
    // },
    // {
    //   title: "Data Visualization Suite",
    //   category: "Analytics",
    //   progress: 55,
    //   status: "Development",
    //   tech: ["D3.js", "Python", "FastAPI"],
    //   color: "from-teal-500 to-blue-500",
    //   icon: Eye,
    //   description: "Interactive data visualization with real-time updates",
    // },
  ]

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

  // Show coming soon section if enabled
  if (showComingSoon) {
    return (
      <section className="relative py-20 bg-white dark:bg-zinc-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        {/* Floating code symbols */}
        <div className="absolute inset-0 overflow-hidden">
          {["</>", "{}", "[]", "()", "&&", "||", "=>", "++"].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-zinc-300 dark:text-zinc-700 font-mono text-sm opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        <div ref={ref} className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={showComingSoon ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800 rounded-full px-6 py-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Innovation in Progress</span>
            </motion.div>

            <h2 className="mb-4 text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Upcoming Projects
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Exciting new projects are currently in development. Get ready for innovative solutions that will transform
              digital experiences.
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {upcomingProjects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={showComingSoon ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -10 }}
                >
                  <Card className="overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm transition-all hover:shadow-xl group relative">
                    <CardContent className="p-0">
                      {/* Project Preview Area */}
                      <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 overflow-hidden">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-30">
                          <motion.div
                            className={`w-full h-full bg-gradient-to-br ${project.color} opacity-20`}
                            animate={{
                              scale: hoveredProject === index ? [1, 1.1, 1] : 1,
                            }}
                            transition={{
                              duration: 2,
                              repeat: hoveredProject === index ? Number.POSITIVE_INFINITY : 0,
                            }}
                          />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                            animate={{
                              rotate: hoveredProject === index ? [0, 360] : 0,
                              scale: hoveredProject === index ? [1, 1.1, 1] : 1,
                            }}
                            transition={{
                              duration: 2,
                              repeat: hoveredProject === index ? Number.POSITIVE_INFINITY : 0,
                            }}
                          >
                            <Icon className="h-8 w-8 text-white" />
                          </motion.div>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <motion.div
                            className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-full px-3 py-1 border border-zinc-200 dark:border-zinc-700"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                              {project.status}
                            </span>
                          </motion.div>
                        </div>

                        {/* Progress indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-700">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${project.color}`}
                            initial={{ width: 0 }}
                            animate={showComingSoon ? { width: `${project.progress}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                            {project.title}
                          </h3>
                          <span className="text-sm text-zinc-500 dark:text-zinc-400 ml-2">{project.progress}%</span>
                        </div>

                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{project.category}</p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1">
                          {project.tech_stack?.map((tech: string, techIndex: number) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
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
            Upcoming Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">Currently working on these projects</p>
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
