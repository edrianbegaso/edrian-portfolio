import {
  Atom,
  Blocks,
  Braces,
  CodeXml,
  Database,
  FileCode,
  Layers,
  Layout,
  Palette,
  Rocket,
  Server,
  Terminal,
} from 'lucide-react'

// Lucide dropped brand icons, so GitHub is a small inline SVG.
export function GithubIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const map = {
  atom: Atom,
  blocks: Blocks,
  braces: Braces,
  code: CodeXml,
  database: Database,
  file: FileCode,
  layers: Layers,
  layout: Layout,
  palette: Palette,
  rocket: Rocket,
  server: Server,
  terminal: Terminal,
}

/** Renders a Lucide icon by the string key used in data/content.js. */
export function DataIcon({ name, size = 22, ...props }) {
  const Icon = map[name] || CodeXml
  return <Icon size={size} aria-hidden="true" {...props} />
}