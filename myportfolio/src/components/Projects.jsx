import { ExternalLink, FolderGit2 } from 'lucide-react'
import { projects } from '../data/content.js'
import { GithubMark } from './BrandIcons.jsx'
import { LinkButton, Reveal, SectionHeading } from './ui.jsx'

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          text="Practical applications built with Java, Spring Boot, React and SQL — from REST APIs to responsive interfaces."
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} delay={(i % 2) * 0.08} className="glass flex flex-col rounded-[1.4rem] p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-chip text-brand">
                  <FolderGit2 size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[1.2rem] font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-[1.7] text-muted">{p.description}</p>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {p.tech.map((t) => (
                  <li key={t} className="chip !py-1.5 text-[0.78rem]">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 pt-1">
                <LinkButton href={p.github} icon={<GithubMark className="h-4 w-4" />} className="btn btn-ghost !px-5 !py-3 text-[0.88rem]">
                  Code
                </LinkButton>
                <LinkButton href={p.live} icon={<ExternalLink size={16} aria-hidden="true" />} className="btn btn-ghost !px-5 !py-3 text-[0.88rem]">
                  Live demo
                </LinkButton>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
