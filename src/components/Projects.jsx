import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/content.js'
import { GithubIcon } from './Icons.jsx'
import SectionHeading, { fadeUp, stagger } from './SectionHeading.jsx'

function ProjectCard({ project }) {
  const { title, description, image, imageAlt, tags, github, demo } = project
  const hasLinks = Boolean(github || demo)

  return (
    <motion.article className="project glass" variants={fadeUp} whileHover={{ y: -8 }}>
      <div className="project__media">
        <img src={image} alt={imageAlt} loading="lazy" width="800" height="500" />
        <div className="project__shade" aria-hidden="true" />
      </div>
      <div className="project__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-btn">
              <GithubIcon size={16} /> Code
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="link-btn">
              <ExternalLink size={16} aria-hidden="true" /> Live demo
            </a>
          )}
          {!hasLinks && <span className="project__soon">Links coming soon</span>}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Projects"
          title={<span id="projects-title">Featured projects</span>}
          description="A few things I've built while learning. Code and demo links will appear here once they're added."
        />
        <motion.div
          className="projects-grid"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}