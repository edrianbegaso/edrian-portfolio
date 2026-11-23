import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { journey } from '../data/content.js'
import { DataIcon } from './Icons.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Journey() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.2 })

  return (
    <section id="journey" className="section" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading
          eyebrow="04 / Journey"
          title={<span id="journey-title">My development journey</span>}
          description="How my programming and development learning has progressed so far, and where it's heading."
        />

        <ol className="timeline" ref={ref}>
          <div className="timeline__track" aria-hidden="true">
            <motion.div className="timeline__fill" style={{ scaleY: fill }} />
          </div>

          {journey.map((step, i) => (
            <motion.li
              key={step.stage}
              className={`timeline__item ${i % 2 ? 'is-right' : ''}`}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={`timeline__node ${step.current ? 'is-current' : ''}`} aria-hidden="true">
                <DataIcon name={step.icon} size={18} />
              </span>
              <div className="timeline__card glass">
                <div className="timeline__meta">
                  <span className="timeline__step">Stage {String(i + 1).padStart(2, '0')}</span>
                  {step.date && <span className="timeline__date">{step.date}</span>}
                  {step.current && <span className="badge badge--now">Now</span>}
                  {step.upcoming && <span className="badge">Goal</span>}
                </div>
                <h3>{step.stage}</h3>
                <p>{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}