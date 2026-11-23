import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Loader from './components/Loader.jsx'
import Background from './components/Background.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Lock scrolling while the loading screen is visible.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    // reducedMotion="user" makes every Framer Motion animation honour the OS setting.
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Background />
      <ScrollProgress />
      <Navbar />

      <motion.main
        id="main"
        initial={{ opacity: 0, y: 16 }}
        animate={loading ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero ready={!loading} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </motion.main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}