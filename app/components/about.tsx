"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
      const ref = useRef(null)
      const isInView = useInView(ref, { once: true, margin: "-100px" })

      return (
            <section
                  ref={ref}
                  className="relative py-20 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden"
            >
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-30">
                        {Array.from({ length: 30 }).map((_, i) => (
                              <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-zinc-400 dark:bg-zinc-600 rounded-full"
                                    style={{
                                          left: `${Math.random() * 100}%`,
                                          top: `${Math.random() * 100}%`,
                                    }}
                                    animate={{
                                          scale: [1, 1.5, 1],
                                          opacity: [0.3, 0.8, 0.3],
                                    }}
                                    transition={{
                                          duration: 2 + Math.random() * 3,
                                          repeat: Number.POSITIVE_INFINITY,
                                          delay: Math.random() * 2,
                                    }}
                              />
                        ))}
                  </div>

                  {/* Connecting lines animation */}
                  <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full">
                              <motion.path
                                    d="M 200 300 Q 400 200 600 300"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-zinc-400 dark:text-zinc-600"
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                              />
                              <motion.path
                                    d="M 150 400 Q 400 350 650 400"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                    className="text-zinc-300 dark:text-zinc-700"
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                    transition={{ duration: 2.5, delay: 0.8 }}
                              />
                        </svg>
                  </div>

                  <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                              className="text-center mb-16"
                              initial={{ opacity: 0, y: 30 }}
                              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                              transition={{ duration: 0.8 }}
                        >
                              <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-5xl mb-4">
                                    About
                              </h2>
                              <div className="w-24 h-1 bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-300 mx-auto rounded-full"></div>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                              {/* Left side - Logos */}
                              <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                              >
                                    <div className="relative flex flex-col items-center space-y-8">
                                          {/* Prime It Club Logo */}
                                          <motion.div
                                                className="relative group"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                          >
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                                <div className="relative bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-700 group-hover:shadow-xl transition-all duration-300">
                                                      <div className="flex flex-col items-center space-y-4">
                                                            {/* Prime It Club Logo Placeholder */}
                                                            <div className="w-20 h-20 
                                                            flex items-center justify-center ">
                                                                  <span className="text-white font-bold text-2xl">
                                                                        <Image src="/primeit.png" alt="Prime It Club" width={80} height={80} />
                                                                  </span>
                                                            </div>
                                                            <div className="text-center cursor-pointer" onClick={() => window.open("https://primeitclub.com", "_blank")} >
                                                                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Prime IT Club</h3>
                                                                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Processing Future</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </motion.div>

                                          {/* Connection Element */}
                                          <motion.div
                                                className="flex items-center justify-center"
                                                initial={{ scale: 0 }}
                                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                          >
                                                <div className="relative">
                                                      <div className="w-16 h-16 border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-full flex items-center justify-center">
                                                            <motion.div
                                                                  className="w-8 h-8 bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-500 dark:to-zinc-300 rounded-full"
                                                                  animate={{ rotate: 360 }}
                                                                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                                            />
                                                      </div>
                                                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                                      </div>
                                                </div>
                                          </motion.div>

                                          {/* Creative Hub Logo */}
                                          <motion.div
                                                className="relative group"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                          >
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                                                <div className="relative bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-700 group-hover:shadow-xl transition-all duration-300">
                                                      <div className="flex flex-col items-center space-y-4">
                                                            {/* Creative Hub Logo Placeholder */}
                                                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                                                  <span className="text-white font-bold text-2xl">
                                                                        <Image src="/creativehub.jpg" alt="Prime It Club" width={80} height={80} />
                                                                  </span>
                                                            </div>
                                                            <div className="text-center">
                                                                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Prime Creative Hub</h3>
                                                                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Wing of Prime IT Club</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </motion.div>
                                    </div>

                                    {/* Floating elements around logos */}
                                    <motion.div
                                          className="absolute -top-4 -left-4 w-3 h-3 bg-blue-400 rounded-full"
                                          animate={{
                                                y: [0, -10, 0],
                                                opacity: [0.5, 1, 0.5],
                                          }}
                                          transition={{
                                                duration: 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 0.5,
                                          }}
                                    />
                                    <motion.div
                                          className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full"
                                          animate={{
                                                y: [0, 10, 0],
                                                opacity: [0.5, 1, 0.5],
                                          }}
                                          transition={{
                                                duration: 2.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: 1,
                                          }}
                                    />
                              </motion.div>

                              {/* Right side - Description */}
                              <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                              >
                                    <div className="space-y-4">
                                          <motion.h3
                                                className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                          >
                                                Leading Innovation Through Creative Collaboration
                                          </motion.h3>

                                          <motion.p
                                                className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                          >
                                                Prime IT Club, established in 2004, is a community of students who are passionate about technology and innovation. We are a group of students who are dedicated to learning and growing together.
                                          </motion.p>

                                          <motion.p
                                                className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.6, delay: 1.0 }}
                                          >
                                                Prime Creative Hub is a wing of Prime IT Club, initiated in 2019 and reinitiated in 2025 by Former President of Prime IT Club of the tenure 2024/25,
                                                <b> <a href="https://www.linkedin.com/in/sundayace/" target="_blank" rel="noopener noreferrer"> Sandesh Basnet. </a> </b>
                                                We are a tech savy to the club.
                                          </motion.p>
                                    </div>

                                    {/* Key highlights */}
                                    <motion.div
                                          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                          transition={{ duration: 0.6, delay: 1.2 }}
                                    >
                                          {[
                                                { icon: "🚀", title: "Innovation", desc: "Learning and growing together" },
                                                { icon: "🤝", title: "Collaboration", desc: "Building stronger networks" },
                                                { icon: "⚡", title: "Knowledge Sharing", desc: "Sharing knowledge within the club" },
                                                { icon: "💡", title: "Wing of Prime IT Club", desc: "Techy side of the club" },
                                          ].map((item, index) => (
                                                <motion.div
                                                      key={index}
                                                      className="flex items-start space-x-3 p-4 rounded-lg bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50"
                                                      whileHover={{ scale: 1.02, y: -2 }}
                                                      transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                      <span className="text-2xl">{item.icon}</span>
                                                      <div>
                                                            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{item.title}</h4>
                                                            <p className="text-xs text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                                                      </div>
                                                </motion.div>
                                          ))}
                                    </motion.div>

                                    {/* Call to action */}
                                    {/* <motion.div
                                          className="pt-6"
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                          transition={{ duration: 0.6, delay: 1.4 }}
                                    >
                                          <motion.button
                                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 text-white dark:text-zinc-900 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                          >
                                                <span>Explore Our Work</span>
                                                <motion.svg
                                                      className="ml-2 w-4 h-4"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      viewBox="0 0 24 24"
                                                      animate={{ x: [0, 4, 0] }}
                                                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                                >
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </motion.svg>
                                          </motion.button>
                                    </motion.div> */}
                              </motion.div>
                        </div>

                        {/* Bottom decorative element */}
                        <motion.div
                              className="flex justify-center mt-16"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ duration: 0.8, delay: 1.6 }}
                        >
                              <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                              </div>
                        </motion.div>
                  </div>
            </section>
      )
}
