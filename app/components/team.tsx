"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, X, MapPin, Calendar, Award, Code, Mail, Phone, Star, Users, Sparkles } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import { TeamMember } from "@/lib/types"

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase.from("team_members").select("*")
        if (error) throw error
        setTeamMembers(data || [])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching team members:", error)
        setError("Failed to load team members")
      } finally {
        setLoading(false)
      }
    }
    fetchTeamMembers()
  }, [])
  // const teamMembers: TeamMember[] = [
  //   {
  //     id: 1,
  //     name: "Alex Chen",
  //     role: "Frontend Developer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Passionate about creating intuitive user experiences with modern web technologies.",
  //     skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  //     social: {
  //       github: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     details: {
  //       experience: "5+ years",
  //       location: "San Francisco, CA",
  //       email: "alex.chen@company.com",
  //       phone: "+1 (555) 123-4567",
  //       joinDate: "January 2022",
  //       projects: [
  //         "E-commerce Platform Redesign",
  //         "Mobile-First Dashboard",
  //         "Component Library System",
  //         "Progressive Web App",
  //       ],
  //       achievements: [
  //         "Led frontend architecture for 3 major projects",
  //         "Improved page load times by 40%",
  //         "Mentored 5 junior developers",
  //         "Speaker at React Conference 2023",
  //       ],
  //       expertise: [
  //         "React Ecosystem",
  //         "Performance Optimization",
  //         "Responsive Design",
  //         "State Management",
  //         "Testing (Jest, Cypress)",
  //       ],
  //       languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Johnson",
  //     role: "UI/UX Designer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Crafting beautiful and functional designs that solve real user problems.",
  //     skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  //     social: {
  //       github: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     details: {
  //       experience: "6+ years",
  //       location: "New York, NY",
  //       email: "sarah.johnson@company.com",
  //       phone: "+1 (555) 234-5678",
  //       joinDate: "March 2021",
  //       projects: [
  //         "Mobile Banking App Design",
  //         "SaaS Dashboard Redesign",
  //         "Design System Creation",
  //         "User Research Initiative",
  //       ],
  //       achievements: [
  //         "Increased user engagement by 60%",
  //         "Created company-wide design system",
  //         "Won UX Design Award 2023",
  //         "Published 10+ design articles",
  //       ],
  //       expertise: ["User Experience Design", "Visual Design", "Design Systems", "User Research", "Accessibility"],
  //       languages: ["English", "Spanish", "French"],
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: "Marcus Rodriguez",
  //     role: "Backend Engineer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Building scalable systems and APIs that power amazing user experiences.",
  //     skills: ["Node.js", "Python", "PostgreSQL", "Docker"],
  //     social: {
  //       github: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     details: {
  //       experience: "7+ years",
  //       location: "Austin, TX",
  //       email: "marcus.rodriguez@company.com",
  //       phone: "+1 (555) 345-6789",
  //       joinDate: "June 2020",
  //       projects: [
  //         "Microservices Architecture",
  //         "Real-time Chat System",
  //         "Payment Processing API",
  //         "Data Pipeline Optimization",
  //       ],
  //       achievements: [
  //         "Reduced server costs by 35%",
  //         "Built systems handling 1M+ requests/day",
  //         "Open source contributor (50+ PRs)",
  //         "Tech lead for 3 major migrations",
  //       ],
  //       expertise: [
  //         "System Architecture",
  //         "Database Design",
  //         "API Development",
  //         "Cloud Infrastructure",
  //         "Performance Optimization",
  //       ],
  //       languages: ["Python", "JavaScript", "Go", "SQL", "Rust"],
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: "Emily Zhang",
  //     role: "DevOps Specialist",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Ensuring smooth deployments and maintaining robust infrastructure.",
  //     skills: ["AWS", "Kubernetes", "CI/CD", "Monitoring"],
  //     social: {
  //       github: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     details: {
  //       experience: "4+ years",
  //       location: "Seattle, WA",
  //       email: "emily.zhang@company.com",
  //       phone: "+1 (555) 456-7890",
  //       joinDate: "September 2022",
  //       projects: [
  //         "Kubernetes Migration",
  //         "CI/CD Pipeline Automation",
  //         "Infrastructure as Code",
  //         "Monitoring & Alerting System",
  //       ],
  //       achievements: [
  //         "Reduced deployment time by 80%",
  //         "Achieved 99.9% uptime",
  //         "AWS Certified Solutions Architect",
  //         "Automated 90% of manual processes",
  //       ],
  //       expertise: [
  //         "Cloud Infrastructure",
  //         "Container Orchestration",
  //         "Automation",
  //         "Monitoring & Logging",
  //         "Security",
  //       ],
  //       languages: ["Python", "Bash", "YAML", "Terraform", "Go"],
  //     },
  //   },
  //   {
  //     id: 5,
  //     name: "David Kim",
  //     role: "Mobile Developer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Creating seamless mobile experiences across iOS and Android platforms.",
  //     skills: ["React Native", "Swift", "Kotlin", "Flutter"],
  //     social: {
  //       github: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     details: {
  //       experience: "5+ years",
  //       location: "Los Angeles, CA",
  //       email: "david.kim@company.com",
  //       phone: "+1 (555) 567-8901",
  //       joinDate: "November 2021",
  //       projects: [
  //         "Cross-platform E-commerce App",
  //         "Fitness Tracking Application",
  //         "Social Media Platform",
  //         "AR Shopping Experience",
  //       ],
  //       achievements: [
  //         "Apps downloaded 2M+ times",
  //         "4.8+ star rating on app stores",
  //         "Featured in App Store",
  //         "Mobile development workshop speaker",
  //       ],
  //       expertise: [
  //         "Cross-platform Development",
  //         "Native iOS/Android",
  //         "Mobile UI/UX",
  //         "App Store Optimization",
  //         "Performance Optimization",
  //       ],
  //       languages: ["JavaScript", "Swift", "Kotlin", "Dart", "Java"],
  //     },
  //   },
  //   {
  //     id: 6,
  //     name: "Lisa Thompson",
  //     role: "Product Manager",
  //     image: "/placeholder.svg?height=400&width=400",
  //     bio: "Bridging the gap between user needs and technical implementation.",
  //     skills: ["Strategy", "Analytics", "Agile", "User Stories"],
  //     social: {
  //       github: "#",
  //       linkedin: "#",
  //       twitter: "#",
  //     },
  //     details: {
  //       experience: "8+ years",
  //       location: "Boston, MA",
  //       email: "lisa.thompson@company.com",
  //       phone: "+1 (555) 678-9012",
  //       joinDate: "February 2020",
  //       projects: [
  //         "Product Roadmap 2024",
  //         "User Onboarding Optimization",
  //         "Feature Prioritization Framework",
  //         "Market Research Initiative",
  //       ],
  //       achievements: [
  //         "Increased user retention by 45%",
  //         "Launched 15+ successful features",
  //         "PMP Certified",
  //         "Led cross-functional team of 12",
  //       ],
  //       expertise: [
  //         "Product Strategy",
  //         "Data Analysis",
  //         "User Research",
  //         "Agile Methodologies",
  //         "Stakeholder Management",
  //       ],
  //       languages: ["English", "German", "Mandarin"],
  //     },
  //   },
  // ]


  return (
    <section className="bg-zinc-50 dark:bg-zinc-900 py-20 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            My Team
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Meet the talented individuals who bring creativity and innovation to every project
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredMember(Number(member.id))}
              onHoverEnd={() => setHoveredMember(null)}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm transition-all hover:shadow-xl group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500"
                      animate={{
                        scale: hoveredMember === Number(member.id) ? 1.1 : 1,
                      }}
                    />

                    {/* Overlay with social links */}
                    <AnimatePresence>
                      {hoveredMember === Number(member.id) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-zinc-900/80 flex items-center justify-center"
                        >
                          <div className="flex gap-4">
                            <motion.a
                              href={member.social_github}
                              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github className="h-5 w-5 text-white" />
                            </motion.a>
                            <motion.a
                              href={member.social_linkedin}
                              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Linkedin className="h-5 w-5 text-white" />
                            </motion.a>
                            <motion.a
                              href={member.social_twitter}
                              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Twitter className="h-5 w-5 text-white" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{member.name}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{member.role}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      onClick={() => setSelectedMember(member)}
                      className="w-full py-2 px-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Users, number: "6+", label: "Creative Wings" },
            { icon: Star, number: "50+", label: "Combined Years" },
            { icon: Users, number: "100+", label: "Total Members" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 rounded-full mb-3"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <stat.icon className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
              </motion.div>
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{stat.number}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-zinc-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-zinc-200 dark:border-zinc-700">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                >
                  <X className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </button>

                <div className="flex items-start gap-6">
                  <img
                    src={selectedMember.image_url || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{selectedMember.name}</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-2">{selectedMember.role}</p>
                    {/* <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {selectedMember.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined {selectedMember.join_date}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                      <Mail className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{selectedMember.email}</span>
                    </div>
                    {/* <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                      <Phone className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">{selectedMember.phone}</span>
                    </div> */}
                  </div>
                </div>

                {/* Experience & Bio */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">About</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{selectedMember.bio}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm text-zinc-700 dark:text-zinc-300">
                    <Award className="h-4 w-4" />
                    {selectedMember.experience} experience
                  </div>
                </div>

                {/* Projects */}
                {/* <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Recent Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedMember.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg"
                      >
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{project}</span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                {/* Achievements */}
                {/* <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Key Achievements</h3>
                  <div className="space-y-2">
                    {selectedMember.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg"
                      >
                        <Award className="h-4 w-4 text-zinc-500 dark:text-zinc-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                {/* Expertise */}
                {/* <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div> */}

                {/* Programming Languages */}
                {/* <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.languages.map((language, index) => (
                      <motion.span
                        key={language}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
                      >
                        {language}
                      </motion.span>
                    ))}
                  </div>
                </div> */}

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Connect</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedMember.social_github}
                      className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={selectedMember.social_linkedin}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors hover:bg-blue-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </motion.a>
                    {/* <motion.a
                      href={selectedMember.social_twitter}
                      className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg text-sm font-medium transition-colors hover:bg-sky-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </motion.a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
