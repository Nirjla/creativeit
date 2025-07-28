import Hero from "./components/hero"
import Projects from "./components/projects"
import Team from "./components/team"
import Footer from "./components/footer"
import Portfolio from "./components/portfolio"
import About from "./components/about"
export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <Hero />
      <About />
      <Projects />
      <Team />
      {/* <Portfolio /> */}
      <Footer />
    </main>
  )
}
