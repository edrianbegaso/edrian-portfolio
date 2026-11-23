import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Rocket, Users } from 'lucide-react'
import { profile } from '../data/content.js'
import SectionHeading, { fadeUp, stagger } from './SectionHeading.jsx'

const cards = [
  { icon: GraduationCap, label: 'Education', value: profile.education.short },
  { icon: BookOpen, label: 'Year Level', value: profile.education.year },
  { icon: Users, label: 'Section', value: profile.education.section },
  { icon: Rocket, label: 'Focus', value: 'Web & Full-Stack Development' },
]

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title={<span id="about-title">Get to know me</span>} />

        <div className="about">
          <motion.div
            className="about__profile glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="avatar">
              <div className="avatar__ring" aria-hidden="true" />
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="640" height="800" />
            </div>
            <h3>{profile.name}</h3>
            <p className="about__role">{profile.title}</p>
            <p className="about__degree">{profile.education.degree}</p>
          </motion.div>

          <div className="about__content">
            <motion.p
              className="about__intro"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              {profile.intro}
            </motion.p>

            <motion.ul
              className="info-grid"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              {cards.map(({ icon: Icon, label, value }) => (
                <motion.li key={label} className="info-card glass" variants={fadeUp} whileHover={{ y: -6 }}>
                  <span className="info-card__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="info-card__label">{label}</span>
                  <strong>{value}</strong>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}