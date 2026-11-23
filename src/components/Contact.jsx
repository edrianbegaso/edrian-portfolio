import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleAlert, CircleCheck, Mail, Send } from 'lucide-react'
import { profile } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate({ name, email, message }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).'
  if (!email.trim()) errors.email = 'Please enter your email address.'
  else if (!emailPattern.test(email.trim())) errors.email = 'That email address does not look right.'
  if (message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

/**
 * No email service is configured, so the form never claims a message was sent.
 * On a valid submit it opens the visitor's own email app with the message
 * pre-filled and tells them so. To send from the site itself, replace
 * `handleSubmit` with a call to a service such as Formspree or EmailJS.
 */
export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'opened'

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    if (status) setStatus(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('opened')
  }

  const field = (id, label, props = {}) => (
    <div className={`field ${errors[id] ? 'has-error' : ''}`}>
      <label htmlFor={`contact-${id}`}>{label}</label>
      {id === 'message' ? (
        <textarea
          id={`contact-${id}`}
          name={id}
          rows="5"
          value={values[id]}
          onChange={onChange}
          aria-invalid={Boolean(errors[id])}
          aria-describedby={errors[id] ? `err-${id}` : undefined}
          {...props}
        />
      ) : (
        <input
          id={`contact-${id}`}
          name={id}
          value={values[id]}
          onChange={onChange}
          aria-invalid={Boolean(errors[id])}
          aria-describedby={errors[id] ? `err-${id}` : undefined}
          {...props}
        />
      )}
      <AnimatePresence>
        {errors[id] && (
          <motion.p
            id={`err-${id}`}
            className="field__error"
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {errors[id]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Contact"
          title={<span id="contact-title">Let's Build Something Great.</span>}
          description="Have a project idea or want to connect? Feel free to reach out."
        />

        <div className="contact">
          <motion.div
            className="contact__info glass"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="info-card__icon">
              <Mail size={22} aria-hidden="true" />
            </span>
            <h3>Email me directly</h3>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p>I'm always happy to talk about web development, projects, or learning opportunities.</p>
          </motion.div>

          <motion.form
            className="contact__form glass"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {field('name', 'Name', { type: 'text', autoComplete: 'name', placeholder: 'Your name' })}
            {field('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
            {field('message', 'Message', { placeholder: 'Tell me about your idea…' })}

            <motion.button type="submit" className="btn btn--primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              Compose Email <Send size={18} aria-hidden="true" />
            </motion.button>

            <p className="form__note">
              This form opens your email app with the message ready to send. Nothing is sent from this site.
            </p>

            <div aria-live="polite">
              <AnimatePresence>
                {status === 'opened' && (
                  <motion.p
                    className="form__status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <CircleCheck size={18} aria-hidden="true" />
                    Message is ready. We tried to open your email app, but this cannot be confirmed from the page.
                    If nothing opened, write to {profile.email} directly. Nothing has been sent yet.
                  </motion.p>
                )}
              </AnimatePresence>
              {Object.keys(errors).some((k) => errors[k]) && (
                <p className="sr-only">
                  <CircleAlert size={1} aria-hidden="true" /> The form has errors. Please review the highlighted fields.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}