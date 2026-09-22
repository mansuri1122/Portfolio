import { motion, useReducedMotion } from 'framer-motion'

/** Fades a block in once when it scrolls into view. Skipped for reduced-motion users. */
export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, text, className = '' }) {
  return (
    <Reveal className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-[clamp(2.4rem,4.6vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.03em]">
        {title}
      </h2>
      {text && <p className="mt-5 max-w-[42rem] text-[1.02rem] leading-[1.75] text-muted">{text}</p>}
    </Reveal>
  )
}

/**
 * Renders a real link when `href` is set, otherwise a disabled "Coming soon" button,
 * so the page never links to a dead URL (see README).
 */
export function LinkButton({ href, icon, children, className = 'btn btn-ghost', soonLabel = 'Coming soon' }) {
  if (!href) {
    return (
      <span role="link" aria-disabled="true" className={className} title="Add this link in src/data/content.js">
        {icon}
        {children}
        <span className="rounded-full border border-line px-2 py-0.5 text-[0.68rem] font-medium text-faint">{soonLabel}</span>
      </span>
    )
  }
  const external = /^https?:/i.test(href)
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      {children}
    </a>
  )
}
