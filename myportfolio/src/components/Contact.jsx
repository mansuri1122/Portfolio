import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { contact, profile } from '../data/content.js'
import { GithubMark, LinkedinMark } from './BrandIcons.jsx'
import { LinkButton, Reveal, SectionHeading } from './ui.jsx'

const field =
  'w-full rounded-xl border border-line bg-chip px-4 py-3.5 text-[0.95rem] text-fg placeholder:text-faint outline-none transition-colors focus:border-[var(--brand-2)]'

export default function Contact() {
  const [notice, setNotice] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!profile.email) {
      setNotice('Email is not set up yet. Add your address in src/data/content.js to enable this form.')
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setNotice('Opening your email app to send the message…')
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="Get in touch" title="Contact" />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="glass rounded-[1.5rem] p-8 md:p-10">
            <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight tracking-[-0.02em]">{contact.heading}</h3>
            <p className="mt-4 max-w-[30rem] leading-[1.75] text-muted">{contact.text}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton
                href={profile.email ? `mailto:${profile.email}` : null}
                icon={<Mail size={17} aria-hidden="true" />}
                className="btn btn-ghost"
              >
                {profile.email ?? 'Email'}
              </LinkButton>
              <LinkButton href={profile.github} icon={<GithubMark className="h-[17px] w-[17px]" />} className="btn btn-ghost">
                GitHub
              </LinkButton>
              <LinkButton href={profile.linkedin} icon={<LinkedinMark className="h-[17px] w-[17px]" />} className="btn btn-ghost">
                LinkedIn
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass rounded-[1.5rem] p-8 md:p-10" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-[0.85rem] font-medium">
                  Name
                  <input name="name" required autoComplete="name" placeholder="Your name" className={`${field} mt-2`} />
                </label>
                <label className="block text-[0.85rem] font-medium">
                  Email
                  <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={`${field} mt-2`} />
                </label>
              </div>
              <label className="mt-5 block text-[0.85rem] font-medium">
                Message
                <textarea name="message" required rows={5} placeholder="Tell me about the role or project" className={`${field} mt-2 resize-y`} />
              </label>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-primary">
                  <Send size={16} aria-hidden="true" />
                  Send message
                </button>
                <p role="status" className="text-[0.85rem] text-muted">
                  {notice}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
