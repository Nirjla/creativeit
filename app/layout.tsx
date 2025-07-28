"use client"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import dynamic from "next/dynamic"
const ThemeProvider = dynamic(() => import("./components/theme-provider").then((mod) => mod.ThemeProvider), {
  ssr: false,
})
import Header from "./components/header"
import ThemeSwitcher from "./components/theme-switcher"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {/* <Header /> */}
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

