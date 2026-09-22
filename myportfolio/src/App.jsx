import About from './components/About.jsx'
import Achievements from './components/Achievements.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import SpaceBackground from './components/SpaceBackground.jsx'
import { navLinks } from './data/content.js'
import useScrollSpy from './hooks/useScrollSpy.js'
import useTheme from './hooks/useTheme.js'

const SECTION_IDS = navLinks.map((l) => l.id)

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useScrollSpy(SECTION_IDS)

  return (
    <div className="relative">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <SpaceBackground />
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
