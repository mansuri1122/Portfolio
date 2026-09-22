import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { images, navLinks, profile } from '../data/content.js'

export function Avatar({ size = 40 }) {
  return (
    <span
      className="relative inline-block shrink-0 rounded-full p-[2px]"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(140deg, #7aa2ff, #8b6cff 55%, #38bdf8)',
      }}
    >
      <span
        className="block h-full w-full overflow-hidden rounded-full"
        style={{ background: 'radial-gradient(circle at 50% 30%, #3b5bd6, #0b1440)' }}
      >
        <img src={images.avatar} alt="" className="h-full w-full object-cover object-top" width={size} height={size} />
      </span>
    </span>
  )
}

export default function Navbar({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderColor: 'var(--line)',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : undefined,
        backdropFilter: scrolled ? 'blur(16px)' : undefined,
      }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Sahil Khan — home">
          <Avatar />
          <span className="font-display text-[1.05rem] font-bold tracking-tight">
            {profile.firstName} <span className="text-brand">{profile.lastName}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((l) => {
            const isActive = active === l.id
            return (
              <li key={l.id} className="relative">
                <a
                  href={`#${l.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative block rounded-xl px-4 py-2 text-[0.92rem] transition-colors ${
                    isActive ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-xl border"
                      style={{ background: 'var(--chip)', borderColor: 'var(--line)' }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    >
                      <span
                        className="absolute -bottom-[13px] left-1/2 h-[2px] w-1/2 -translate-x-1/2 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent, var(--brand-2), transparent)',
                          boxShadow: '0 0 12px 1px var(--brand)',
                        }}
                      />
                    </motion.span>
                  )}
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            download={profile.resumeFileName}
            className="btn btn-ghost hidden !px-5 !py-3 text-[0.9rem] md:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn btn-ghost !h-11 !w-11 !p-0"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn btn-ghost !h-11 !w-11 !p-0 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t xl:hidden"
            style={{ borderColor: 'var(--line)', background: 'var(--nav-bg)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}
          >
            <ul className="mx-auto grid max-w-[1400px] gap-1 px-5 py-4 md:px-10">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-[0.98rem] ${
                      active === l.id ? 'bg-chip text-fg' : 'text-muted'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 md:hidden">
                <a href={profile.resume} download={profile.resumeFileName} className="btn btn-ghost w-full">
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
