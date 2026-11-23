import { useEffect, useState } from 'react'

/**
 * Cycles through `words`, typing and deleting each one.
 * When `enabled` is false (reduced motion) the first word is returned as-is.
 */
export default function useTypewriter(words, { enabled = true, type = 70, erase = 40, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(enabled ? '' : words[0])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!enabled) return undefined

    const word = words[index]
    let delay = deleting ? erase : type

    if (!deleting && text === word) delay = hold
    if (deleting && text === '') delay = 400

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, enabled, type, erase, hold])

  return enabled ? text : words[0]
}