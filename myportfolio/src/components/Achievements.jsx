import { GitCommitHorizontal, GraduationCap, FolderGit2, Trophy } from 'lucide-react'
import { achievements } from '../data/content.js'
import { Reveal, SectionHeading } from './ui.jsx'

const ICONS = { trophy: Trophy, folder: FolderGit2, commit: GitCommitHorizontal, grad: GraduationCap }

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="Milestones" title="Achievements" />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon]
            return (
              <Reveal as="li" key={a.title} delay={i * 0.06} className="glass rounded-[1.4rem] p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-chip text-cyan">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[1.08rem] font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-[1.65] text-muted">{a.text}</p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
