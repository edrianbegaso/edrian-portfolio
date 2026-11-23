import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { profile, typewriterTitles } from '../data/content.js'
import useTypewriter from '../hooks/useTypewriter.js'
import { GithubIcon } from './Icons.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

function RevealWord({ children }) {
  return (
    <span className="reveal-mask">
      <motion.span
        className="reveal-mask__inner"
        variants={{ hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero({ ready }) {
  const reduced = useReducedMotion()
  const typed = useTypewriter(typewriterTitles, { enabled: ready && !reduced })
  const { scrollY } = useScroll()
  const visualY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -60])

  const goTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const [first, ...rest] = profile.name.toUpperCase().split(' ')

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate={ready ? 'show' : 'hidden'}>
          <motion.span className="pill" variants={item}>
            <Sparkles size={14} aria-hidden="true" /> BSIT Student · Open to learning
          </motion.span>

          <h1 id="hero-title" className="hero__title" aria-label={profile.name}>
            <RevealWord>{first}</RevealWord>
            <br />
            <RevealWord>
              <span className="gradient-text">{rest.join(' ')}</span>
            </RevealWord>
          </h1>

          <motion.p className="hero__role" variants={item}>
            <span className="sr-only">{profile.title}</span>
            <span aria-hidden="true">
              {typed}
              <span className="caret" />
            </span>
          </motion.p>

          <motion.p className="hero__tagline" variants={item}>
            {profile.tagline}
          </motion.p>

          <motion.p className="hero__intro" variants={item}>
            {profile.intro}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <motion.a
              href="#projects"
              className="btn btn--primary"
              onClick={goTo('projects')}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Projects <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn--ghost"
              onClick={goTo('contact')}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.ul className="socials" variants={item} aria-label="Social links">
            <li>
              <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`} className="socials__link">
                <Mail size={20} aria-hidden="true" />
              </a>
            </li>
            {profile.socials.github && (
              <li>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="socials__link"
                >
                  <GithubIcon />
                </a>
              </li>
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual"
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="code-card glass">
            <div className="code-card__bar">
              <span /><span /><span />
              <em>developer.js</em>
            </div>
            <pre className="code-card__body">
              <code>
                <span className="c-k">const</span> <span className="c-v">developer</span> = {'{'}
                {'\n  '}name: <span className="c-s">'Edrian Begaso'</span>,
                {'\n  '}role: <span className="c-s">'Aspiring Full-Stack'</span>,
                {'\n  '}studying: <span className="c-s">'BSIT 3B'</span>,
                {'\n  '}stack: [<span className="c-s">'JavaScript'</span>,
                {'\n          '}<span className="c-s">'Python'</span>,
                {'\n          '}<span className="c-s">'PostgreSQL'</span>],
                {'\n  '}learning: <span className="c-s">'React.js'</span>,
                {'\n  '}<span className="c-f">build</span>() {'{'} <span className="c-k">return</span> <span className="c-s">'great things'</span> {'}'}
                {'\n}'}<span className="caret caret--sm" />
              </code>
            </pre>
          </div>

          <motion.div
            className="chip chip--a glass"
            animate={reduced ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            React.js
          </motion.div>
          <motion.div
            className="chip chip--b glass"
            animate={reduced ? {} : { y: [0, 14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            Python
          </motion.div>
          <motion.div
            className="chip chip--c glass"
            animate={reduced ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            SQL
          </motion.div>
        </motion.div>
      </div>

      <a className="hero__scroll" href="#about" onClick={goTo('about')} aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  )
}