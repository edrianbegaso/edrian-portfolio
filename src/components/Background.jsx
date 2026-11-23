import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/** Fixed ambient layer: gradient orbs, grid and floating particles with light parallax. */
export default function Background() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 3000], [0, reduced ? 0 : -220])
  const y2 = useTransform(scrollY, [0, 3000], [0, reduced ? 0 : 160])

  return (
    <div className="bg" aria-hidden="true">
      <motion.div className="bg__orb bg__orb--blue" style={{ y: y1 }} />
      <motion.div className="bg__orb bg__orb--purple" style={{ y: y2 }} />
      <div className="bg__grid" />
      <div className="bg__noise" />
      {!reduced && (
        <>
          <span className="bg__dot bg__dot--1" />
          <span className="bg__dot bg__dot--2" />
          <span className="bg__dot bg__dot--3" />
          <span className="bg__dot bg__dot--4" />
          <span className="bg__dot bg__dot--5" />
        </>
      )}
    </div>
  )
}