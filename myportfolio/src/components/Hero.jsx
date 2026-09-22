import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Download, Mail, Power, UserRound } from 'lucide-react'
import HeroVisual from './HeroVisual.jsx'
import { profile, stats } from '../data/content.js'

function RingIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ring-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a3e635" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="11" stroke="url(#ring-g)" strokeWidth="4.2" strokeDasharray="15 5" strokeLinecap="round" />
    </svg>
  )
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <path d="M16 3 26.5 7v8.5c0 6.4-4.3 10.6-10.5 13.5C9.8 26.1 5.5 21.9 5.5 15.5V7z" fill="#8b6cff" />
      <circle cx="16" cy="13.5" r="3" fill="#0a0f2b" />
      <path d="M14.6 15.5h2.8l.8 5.5h-4.4z" fill="#0a0f2b" />
    </svg>
  )
}

const STAT_ICONS = {
  projects: <RingIcon />,
  commits: <Power size={30} strokeWidth={2.4} className="text-violet" aria-hidden="true" />,
  certs: <BadgeIcon />,
  hackathon: <UserRound size={30} strokeWidth={2.2} className="text-cyan" aria-hidden="true" />,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const contactHref = '#contact'

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div className="mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-6 px-5 pb-32 pt-28 md:px-10 lg:grid-cols-[1.02fr_1fr] lg:gap-2 lg:pb-24 lg:pt-[88px]">
        <motion.div variants={container} initial={reduce ? 'show' : 'hidden'} animate="show" className="relative z-10">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.9rem] font-medium"
            style={{
              color: 'var(--green)',
              borderColor: 'color-mix(in srgb, var(--green) 35%, transparent)',
              background: 'color-mix(in srgb, var(--green) 9%, transparent)',
            }}
          >
            <span aria-hidden="true">🚀</span>
            {profile.status}
          </motion.p>

          <motion.p variants={item} className="mt-7 flex items-center gap-2 font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold">
            Hi, I’m
            <motion.span
              aria-hidden="true"
              className="inline-block origin-[70%_70%]"
              animate={reduce ? undefined : { rotate: [0, 16, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.6, delay: 1.1, ease: 'easeInOut' }}
            >
              👋
            </motion.span>
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 font-display font-extrabold leading-[1.02] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(3.4rem, 8.4vw, 7rem)' }}
          >
            {profile.firstName} <span className="grad-text">{profile.lastName}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-display text-[clamp(1.1rem,1.7vw,1.45rem)] font-semibold">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-[34rem] text-[1.06rem] leading-[1.75] text-muted">
            {profile.intro.split(/(Java|Spring Boot)/).map((part, i) =>
              i % 2 ? (
                <b key={i} className="font-medium text-fg">
                  {part}
                </b>
              ) : (
                part
              ),
            )}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3.5">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href={profile.resume} download={profile.resumeFileName} className="btn btn-ghost">
              <Download size={17} aria-hidden="true" />
              Download Resume
            </a>
            <a href={contactHref} className="btn btn-ghost">
              <Mail size={17} aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-12 grid max-w-[46rem] grid-cols-2 gap-y-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.key}
                className={`flex items-start gap-3 sm:pl-5 ${i > 0 ? 'sm:border-l' : 'sm:pl-0'}`}
                style={{ borderColor: 'var(--line)' }}
              >
                <div className="mt-0.5 shrink-0">{STAT_ICONS[s.key]}</div>
                <div>
                  <dd className="font-display text-[1.25rem] font-semibold leading-none">{s.value}</dd>
                  <dt className="mt-1.5 whitespace-nowrap text-[0.8rem] leading-tight text-muted">{s.label}</dt>
                </div>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <HeroVisual />
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-10 left-5 z-10 hidden items-center gap-4 text-[0.92rem] text-muted transition-colors hover:text-fg md:left-10 md:flex"
      >
        <span className="mouse" aria-hidden="true" />
        <span className="h-9 w-px bg-line" aria-hidden="true" />
        Scroll Down
        <ChevronDown size={16} aria-hidden="true" />
      </a>

      {/* quote */}
      <div className="glass absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full px-7 py-3.5 text-[0.95rem]">
        <span className="h-2.5 w-2.5 rounded-full bg-brand" style={{ boxShadow: '0 0 12px var(--brand)' }} aria-hidden="true" />
        “{profile.quote}”
      </div>
    </section>
  )
}
