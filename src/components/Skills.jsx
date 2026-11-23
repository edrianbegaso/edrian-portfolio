import { motion } from 'framer-motion'
import { skillGroups, learning } from '../data/content.js'
import { DataIcon } from './Icons.jsx'
import SectionHeading, { fadeUp, stagger } from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Skills"
          title={<span id="skills-title">Technical skills</span>}
          description="The tools and technologies I work with, and the ones I'm actively growing into."
        />

        <motion.div
          className="skills-grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {skillGroups.map((group) => (
            <motion.article key={group.title} className="skill-group glass" variants={fadeUp}>
              <header className="skill-group__head">
                <span className="skill-group__icon">
                  <DataIcon name={group.icon} size={20} />
                </span>
                <h3>{group.title}</h3>
              </header>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <motion.li
                    key={skill.name}
                    className="skill-chip"
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <DataIcon name={skill.icon} size={18} />
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.article
          className="learning glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="learning__head">
            <span className="pulse-dot" aria-hidden="true" />
            <h3>Currently learning</h3>
          </div>
          <ul className="skill-list">
            {learning.map((skill) => (
              <motion.li
                key={skill.name}
                className="skill-chip skill-chip--learning"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <DataIcon name={skill.icon} size={18} />
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}