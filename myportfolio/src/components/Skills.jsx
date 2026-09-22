import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Braces, Database, Globe, Layers, Server, SquareTerminal, Wrench } from 'lucide-react'
import { CodeMark } from './BrandIcons.jsx'
import { images, profile, skillGroups, skillsIntro } from '../data/content.js'
import { Reveal, SectionHeading } from './ui.jsx'

const GROUP_ICONS = { code: Braces, globe: Globe, server: Server, database: Database, wrench: Wrench, layers: Layers }
const CHIP_ICONS = { code: Braces, globe: Globe, server: Server, database: Database, wrench: SquareTerminal, layers: Braces }
// Cards that carry the blue glowing outline in the design reference.
const GLOW = new Set(['programming', 'frontend', 'backend', 'tools'])

function SkillsVisual() {
  return (
    <div className="relative hidden h-[270px] w-[430px] shrink-0 md:block" aria-hidden="true">
      <svg viewBox="0 0 430 270" className="absolute inset-0 h-full w-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="sk-orbit" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#8b6cff" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#7aa2ff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="150" rx="205" ry="98" transform="rotate(-18 200 150)" stroke="url(#sk-orbit)" strokeWidth="1.2" />
      </svg>
      <div
        className="hero-frame"
        style={{ left: '22%', top: '2%', width: '46%', height: '96%', transform: 'perspective(1000px) rotateY(-8deg) skewX(-6deg)' }}
      >
        <div className="hero-frame-inner" />
      </div>
      <img
        src={images.skills}
        alt=""
        width="555"
        height="534"
        loading="lazy"
        className="person-glow absolute select-none"
        style={{ left: '20%', top: '3%', width: '54%' }}
        draggable="false"
      />
      {/* laptop tile */}
      <div className="absolute" style={{ right: '6%', bottom: '4%', width: '20%' }}>
        <div
          className="tile aspect-[1.25/1] !rounded-xl text-brand"
          style={{ transform: 'perspective(500px) rotateX(12deg) rotateY(-14deg) rotate(-4deg)' }}
        >
          <CodeMark className="w-[42%] text-[#7aa2ff]" />
        </div>
      </div>
      <div className="absolute right-0 top-[3%] w-[22%]">
        <p className="handwriting text-[1.25rem]" style={{ transform: 'rotate(4deg)' }}>
          Explore<br />Learn<br />Implement<br />Grow
        </p>
      </div>
    </div>
  )
}

export default function Skills() {
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState('all')
  const tabs = [{ id: 'all', label: 'All Domains' }, ...skillGroups.map((g) => ({ id: g.id, label: g.tabLabel ?? g.title }))]
  const groups = filter === 'all' ? skillGroups : skillGroups.filter((g) => g.id === filter)

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <SectionHeading eyebrow="Expertise" title={skillsIntro.title} text={skillsIntro.text} className="max-w-[36rem]" />
          <Reveal delay={0.1}>
            <SkillsVisual />
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div role="group" aria-label="Filter skills by domain" className="flex flex-wrap gap-2.5">
            {tabs.map((t) => {
              const on = filter === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(t.id)}
                  className={`rounded-full border px-5 py-2.5 text-[0.9rem] font-medium transition-colors ${
                    on
                      ? 'border-transparent text-white'
                      : 'border-line bg-chip text-muted hover:border-[var(--line-strong)] hover:text-fg'
                  }`}
                  style={on ? { background: 'linear-gradient(90deg,#2a55ff,#3b82ff)', boxShadow: '0 8px 26px -8px rgba(47,107,255,.8)' } : undefined}
                >
                  {t.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <motion.ul layout={!reduce} className="mt-8 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {groups.map((g) => {
              const Icon = GROUP_ICONS[g.icon]
              const ChipIcon = CHIP_ICONS[g.icon]
              return (
                <motion.li
                  key={g.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className={`glass rounded-[1.4rem] p-6 ${GLOW.has(g.id) ? 'glow-border' : ''} ${filter !== 'all' ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="flex items-center gap-3 font-display text-[1.05rem] font-semibold">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-chip text-brand">
                        <Icon size={19} aria-hidden="true" />
                      </span>
                      {g.title}
                    </h3>
                    <span className="text-[0.82rem] text-muted">
                      {g.items.length} skills
                    </span>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="chip !whitespace-normal">
                        <ChipIcon size={14} className="shrink-0 text-brand" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-20 flex justify-center">
          <p className="glass flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.95rem]">
            <span className="h-2.5 w-2.5 rounded-full bg-violet" style={{ boxShadow: '0 0 12px var(--violet)' }} aria-hidden="true" />
            “{profile.skillsQuote}”
          </p>
        </div>
      </div>
    </section>
  )
}
