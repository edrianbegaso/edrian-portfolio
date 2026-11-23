import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = (delay = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.span className="eyebrow" variants={fadeUp}>
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp}>{title}</motion.h2>
      {description && (
        <motion.p className="section-heading__desc" variants={fadeUp}>
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}