import { motion, useReducedMotion } from 'framer-motion'
import { Binary, Boxes, Cloud, Container } from 'lucide-react'
import { CodeMark, DockerMark, FastApiMark, GithubMark, PostgresMark, PythonMark } from './BrandIcons.jsx'
import { exploring, images, profile } from '../data/content.js'

// Positions are % of the visual box (700 x 690 design grid) so it scales cleanly.
const TILES = [
  { key: 'python', left: 15.7, top: 2.5, w: 13, rot: -9, icon: <PythonMark className="w-[68%]" />, dur: 6.2, delay: 0 },
  { key: 'fastapi', left: 0.6, top: 24.5, w: 15.2, rot: -11, icon: <FastApiMark className="w-[72%]" />, dur: 7, delay: -2 },
  { key: 'postgres', left: 5.2, top: 48.5, w: 16, rot: -13, icon: <PostgresMark className="w-[78%]" />, dur: 6.6, delay: -1 },
  { key: 'docker', left: 47.6, top: 60.5, w: 13, rot: 7, icon: <DockerMark className="w-[62%]" />, dur: 7.4, delay: -3 },
  { key: 'github', left: 66.4, top: 30, w: 15, rot: 9, icon: <GithubMark className="w-[66%] text-white" />, dur: 6.8, delay: -1.5 },
  { key: 'code', left: 72, top: 50.5, w: 14, rot: 11, icon: <CodeMark className="w-[52%] text-white" />, dur: 5.8, delay: -2.6 },
]

const EXPLORE_ICONS = [Container, Cloud, Boxes, Binary]

function FloatTile({ tile }) {
  const reduce = useReducedMotion()
  return (
    <div className="absolute z-20" style={{ left: `${tile.left}%`, top: `${tile.top}%`, width: `${tile.w}%` }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: tile.dur, repeat: Infinity, ease: 'easeInOut', delay: tile.delay }}
      >
        <div className="tile aspect-square w-full" style={{ transform: `perspective(500px) rotateX(8deg) rotateY(${tile.rot}deg) rotate(${tile.rot / 2}deg)` }}>
          {tile.icon}
        </div>
      </motion.div>
    </div>
  )
}

export default function HeroVisual() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.15 }}
      className="relative mx-auto aspect-[700/690] w-full max-w-[720px] lg:ml-auto"
    >
      {/* orbit rings */}
      <svg viewBox="0 0 700 690" className="absolute inset-0 z-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="orbit-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8fa8ff" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#7aa2ff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#8b6cff" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbit-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b6cff" stopOpacity="0.25" />
            <stop offset="0.55" stopColor="#5b8cff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <ellipse cx="345" cy="345" rx="335" ry="215" transform="rotate(-34 345 345)" stroke="url(#orbit-a)" strokeWidth="1.3" />
        <path
          id="orbit-b-path"
          d="M 40 470 A 345 235 24 1 1 655 360 A 345 235 24 0 1 40 470"
          stroke="url(#orbit-b)"
          strokeWidth="1.1"
          transform="rotate(8 350 345)"
        />
        {!reduce && (
          <circle r="4.5" fill="#6ea0ff" style={{ filter: 'drop-shadow(0 0 6px #5b8cff)' }}>
            <animateMotion dur="26s" repeatCount="indefinite" rotate="auto">
              <mpath href="#orbit-b-path" />
            </animateMotion>
          </circle>
        )}
      </svg>

      {/* glass frame + person */}
      <div className="hero-frame z-10" style={{ left: '22%', top: '7.5%', width: '54%', height: '62%' }}>
        <div className="hero-frame-inner" />
      </div>
      <img
        src={images.hero}
        alt={`Portrait of ${profile.name}`}
        width="760"
        height="838"
        fetchPriority="high"
        className="person-glow absolute z-10 select-none"
        style={{ left: '22.5%', top: '8%', width: '56%' }}
        draggable="false"
      />

      {TILES.map((t) => (
        <FloatTile key={t.key} tile={t} />
      ))}

      {/* handwriting */}
      <div
        className="pointer-events-none absolute z-10 hidden sm:block"
        style={{ right: '0.5%', top: '17.5%', width: '17%' }}
        aria-hidden="true"
      >
        <p className="handwriting text-[clamp(1.05rem,2vw,1.55rem)]" style={{ transform: 'rotate(5deg)' }}>
          Design<br />Build<br />Optimize<br />Scale
        </p>
        <svg viewBox="0 0 60 50" className="mt-1 ml-1 w-[42%] text-faint" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <path d="M50 4c6 14-4 30-34 36" />
          <path d="M24 32 14 40l12 5" />
        </svg>
      </div>

      {/* currently exploring */}
      <div
        className="absolute z-30"
        style={{
          left: '56%',
          top: '69%',
          width: '43.5%',
          transform: 'perspective(900px) rotateX(4deg) rotateY(-6deg) rotate(6deg)',
        }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: -1 }}
          className="glass rounded-[1.4rem] px-[7%] py-[5.5%]"
        >
          <p className="flex items-center gap-2.5 font-display text-[clamp(0.72rem,1.25vw,0.98rem)] font-semibold">
            <span className="h-2.5 w-2.5 rounded-full bg-good" style={{ boxShadow: '0 0 10px var(--green)' }} />
            Currently Exploring
          </p>
          <ul className="mt-[4%] space-y-[3%] text-[clamp(0.66rem,1.05vw,0.86rem)] text-muted">
            {exploring.map((item, i) => {
              const Icon = EXPLORE_ICONS[i % EXPLORE_ICONS.length]
              return (
                <li key={item} className="flex items-center gap-2.5 py-[2px]">
                  <span className="grid h-[1.35em] w-[1.35em] shrink-0 place-items-center rounded-md border border-line bg-chip text-brand">
                    <Icon size={12} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
