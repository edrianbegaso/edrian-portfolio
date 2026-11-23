import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/content.js'

export default function Loader({ onDone }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(onDone, reduced ? 300 : 2000)
    return () => clearTimeout(timer)
  }, [onDone, reduced])

  return (
    <motion.div
      className="loader"
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loader__mark">
        <svg className="loader__ring" viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <linearGradient id="loaderGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2f8bff" />
              <stop offset="1" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="url(#loaderGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: reduced ? 0.2 : 1.6, ease: 'easeInOut' }}
            style={{ rotate: -90, transformOrigin: '60px 60px' }}
          />
        </svg>
        <motion.span
          className="loader__initials gradient-text"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.initials}
        </motion.span>
      </div>
      <motion.p
        className="loader__text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Loading portfolio
      </motion.p>
    </motion.div>
  )
}