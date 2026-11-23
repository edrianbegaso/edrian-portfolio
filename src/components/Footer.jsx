import { Mail } from 'lucide-react'
import { navLinks, profile } from '../data/content.js'
import { GithubIcon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  const go = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name gradient-text">{profile.name}</p>
          <p>{profile.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={go(link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" /> {profile.email}
          </a>
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
      <p className="footer__copy container">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}