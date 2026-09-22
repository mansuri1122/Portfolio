import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/content.js'
import { LinkButton, Reveal, SectionHeading } from './ui.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <SectionHeading eyebrow="Credentials" title="Certifications" text="Structured learning that backs up the hands-on projects." />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.07} className="glass flex flex-col rounded-[1.4rem] p-7">
              {c.image && (
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="-mx-2 -mt-2 mb-5 overflow-hidden rounded-xl border border-line bg-chip">
                  <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </a>
              )}
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-chip text-violet">
                <Award size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-[1.12rem] font-semibold leading-snug">{c.title}</h3>
              {(c.issuer || c.year) && (
                <p className="mt-1.5 text-[0.88rem] text-muted">{[c.issuer, c.year].filter(Boolean).join(' • ')}</p>
              )}
              <div className="mt-auto pt-6">
                <LinkButton
                  href={c.link}
                  icon={<ExternalLink size={15} aria-hidden="true" />}
                  className="btn btn-ghost !px-4 !py-2.5 text-[0.82rem]"
                >
                  View certificate
                </LinkButton>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
