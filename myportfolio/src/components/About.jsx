import { BookOpen, Building2, CalendarDays, GraduationCap, LayoutGrid, Puzzle, Target, Users, Zap } from 'lucide-react'
import { about, images } from '../data/content.js'
import { Reveal, SectionHeading } from './ui.jsx'

const VALUE_ICONS = { puzzle: Puzzle, book: BookOpen, users: Users, target: Target }

function highlight(text) {
  return text.split(/(Python|FastAPI|PostgreSQL|asynchronous RESTful services|220\+ algorithmic challenges)/).map((part, i) =>
    i % 2 ? (
      <b key={i} className="font-semibold text-fg">
        {part}
      </b>
    ) : (
      part
    ),
  )
}

export default function About() {
  const edu = about.education
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="Background" title="About Me" />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          {/* portrait */}
          <Reveal className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div
              className="glow-border relative rounded-[1.7rem] p-[10px]"
              style={{
                background: 'linear-gradient(160deg, rgba(40,70,200,0.18), rgba(8,12,40,0.6))',
                boxShadow: '0 30px 80px -30px rgba(70,90,255,0.6), 0 0 60px -18px rgba(139,108,255,0.5)',
              }}
            >
              <img
                src={images.about1}
                alt={`${about.plateTitle} in a blazer`}
                width="642"
                height="945"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-[50%_18%]"
              />

              <span className="glass absolute -top-3.5 right-6 flex items-center gap-2 rounded-full px-4 py-2 text-[0.8rem] font-medium">
                <Zap size={14} className="text-amber-300" aria-hidden="true" />
                {about.badge}
              </span>

              <div className="glow-border glass absolute inset-x-5 -bottom-7 flex items-center gap-4 rounded-2xl px-5 py-4 backdrop-blur-xl">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-chip text-violet">
                  <LayoutGrid size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-[1.05rem] font-semibold leading-tight">{about.plateTitle}</span>
                  <span className="block text-[0.85rem] text-brand">{about.plateSubtitle}</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal delay={0.08} className="pt-8 lg:pt-0">
            <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              {about.headingLine1}
              <br />
              {about.headingLine2} <span className="grad-text">{about.headingAccent}</span>
            </h3>

            <div className="mt-6 max-w-[38rem] space-y-5 text-[1rem] leading-[1.8] text-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{highlight(p)}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {about.values.map((v) => {
                const Icon = VALUE_ICONS[v.icon]
                return (
                  <li key={v.title} className="glass flex gap-3.5 rounded-2xl p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-chip text-brand">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[0.92rem] font-semibold">{v.title}</span>
                      <span className="mt-1 block text-[0.8rem] leading-snug text-muted">{v.text}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        {/* education */}
        <Reveal className="mt-20">
          <div className="glass rounded-[1.5rem] p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-2.5 text-[0.8rem] font-semibold tracking-[0.16em] text-brand">
                <GraduationCap size={19} aria-hidden="true" />
                EDUCATION
              </p>
              <p className="glow-border rounded-full bg-chip px-5 py-2 text-[0.92rem] font-medium">
                CGPA: {edu.cgpa}
              </p>
            </div>
            <h3 className="mt-5 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-bold tracking-[-0.01em]">{edu.degree}</h3>
            <p className="mt-2 flex items-center gap-2 text-[1.02rem] text-muted">
              <Building2 size={16} className="text-faint" aria-hidden="true" />
              {edu.school}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-9 gap-y-3 text-[0.9rem] text-muted">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-faint" aria-hidden="true" />
                Session: {edu.session}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={16} className="text-faint" aria-hidden="true" />
                {edu.branch}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
