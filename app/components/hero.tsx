"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const waves: Wave[] = []
    const waveCount = 3

    class Wave {
      y: number
      length: number
      amplitude: number
      frequency: number
      increment: number
      opacity: number

      constructor(y: number, amplitude: number, frequency: number, opacity: number) {
        this.y = y
        this.length = 0.01
        this.amplitude = amplitude
        this.frequency = frequency
        this.increment = frequency
        this.opacity = opacity
      }

      update() {
        this.increment += this.frequency
      }

      draw() {
        if (!ctx) return
        ctx.strokeStyle = `rgba(113, 113, 122, ${this.opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(0, this.y)

        for (let i = 0; i < canvas.width; i++) {
          ctx.lineTo(i, this.y + Math.sin(i * this.length + this.increment) * this.amplitude)
        }
        ctx.stroke()
      }
    }

    // Create multiple waves
    for (let i = 0; i < waveCount; i++) {
      waves.push(new Wave(canvas.height / 2 + i * 50, 30 + i * 10, 0.01 + i * 0.005, 0.1 - i * 0.02))
    }

    // Floating geometric shapes
    const shapes: Shape[] = []
    const shapeCount = 15

    class Shape {
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
      type: "circle" | "square" | "triangle"
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 10
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.opacity = Math.random() * 0.3 + 0.1
        this.type = ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle"
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Wrap around screen
        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.strokeStyle = `rgba(113, 113, 122, ${this.opacity})`
        ctx.fillStyle = `rgba(113, 113, 122, ${this.opacity * 0.3})`
        ctx.lineWidth = 1

        switch (this.type) {
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.stroke()
            ctx.fill()
            break
          case "square":
            ctx.beginPath()
            ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size)
            ctx.stroke()
            ctx.fill()
            break
          case "triangle":
            ctx.beginPath()
            ctx.moveTo(0, -this.size / 2)
            ctx.lineTo(-this.size / 2, this.size / 2)
            ctx.lineTo(this.size / 2, this.size / 2)
            ctx.closePath()
            ctx.stroke()
            ctx.fill()
            break
        }
        ctx.restore()
      }
    }

    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      for (const wave of waves) {
        wave.update()
        wave.draw()
      }

      // Draw shapes
      for (const shape of shapes) {
        shape.update()
        shape.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          className="mb-8 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          For Tenure 2025/26
        </motion.div>

        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100 sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NIRJLA
        </motion.h1>

        <motion.p
          className="max-w-[600px] text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creative Hub Lead
        </motion.p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="rounded-lg border border-zinc-900 bg-zinc-900 px-6 py-3 text-white transition-all hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200" onClick={() => window.open("https://nirjalashakya.com.np", "_blank")}>
            Visit Portfolio
          </button>
          <button className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700" onClick={() => window.open("https://creativehub.primeitclub.com", "_blank")}>
            Visit Creative Hub
          </button>
          <button className="rounded-lg border border-zinc-900 bg-zinc-900 px-6 py-3 text-white transition-all hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200" onClick={() => window.open("mailto:shakyanirjala6@gmail.com", "_blank")}>
            Get in Touch
          </button>

        </motion.div>
      </div>
    </div>
  )
}
