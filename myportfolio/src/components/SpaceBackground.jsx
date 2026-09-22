import { useMemo } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Globe from './Globe.jsx'

function rng(seed) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// A low-poly asteroid: irregular outline split into lit / shaded facets.
function RockSvg({ seed }) {
  const facets = useMemo(() => {
    const r = rng(seed)
    const n = 8 + Math.floor(r() * 3)
    const pts = []
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + (r() - 0.5) * 0.5
      const rad = 30 + r() * 17
      pts.push([50 + Math.cos(a) * rad, 50 + Math.sin(a) * rad])
    }
    const c = [50 + (r() - 0.5) * 14, 50 + (r() - 0.5) * 14]
    const light = [-0.55, -0.83]
    return pts.map((p, i) => {
      const q = pts[(i + 1) % n]
      const mx = (p[0] + q[0]) / 2 - 50
      const my = (p[1] + q[1]) / 2 - 50
      const len = Math.hypot(mx, my) || 1
      const lit = (mx / len) * light[0] + (my / len) * light[1] // -1..1
      const l = 12 + (lit + 1) * 13 + r() * 6
      const hue = 215 + r() * 60
      return {
        d: `M${c[0].toFixed(1)} ${c[1].toFixed(1)}L${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}Z`,
        fill: `hsl(${hue.toFixed(0)} 16% ${l.toFixed(1)}%)`,
      }
    })
  }, [seed])

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" aria-hidden="true">
      {facets.map((f, i) => (
        <path key={i} d={f.d} fill={f.fill} stroke="rgba(130,155,255,0.28)" strokeWidth="0.7" strokeLinejoin="round" />
      ))}
    </svg>
  )
}

// x in %, top in vh of the page, size in px
const ROCKS = [
  { x: 39, top: 22, size: 150, seed: 11, blur: 5, rot: -18, o: 0.75, p: 0.06 },
  { x: -3, top: 70, size: 110, seed: 3, blur: 6, rot: 22, o: 0.8, p: 0.1 },
  { x: 60, top: 6, size: 80, seed: 27, blur: 1.5, rot: 40, o: 0.85, p: 0.04 },
  { x: 95, top: 14, size: 120, seed: 8, blur: 4, rot: -30, o: 0.7, p: 0.07 },
  { x: 47, top: 44, size: 64, seed: 14, blur: 1, rot: 8, o: 0.7, p: 0.03 },
  { x: 90, top: 88, size: 170, seed: 5, blur: 3, rot: 15, o: 0.9, p: 0.09 },
  { x: 5, top: 132, size: 120, seed: 19, blur: 4, rot: -12, o: 0.7, p: 0.05 },
  { x: 92, top: 160, size: 130, seed: 31, blur: 5, rot: 28, o: 0.65, p: 0.08 },
  { x: 8, top: 228, size: 90, seed: 41, blur: 2, rot: 5, o: 0.7, p: 0.04 },
  { x: 94, top: 262, size: 150, seed: 23, blur: 5, rot: -20, o: 0.6, p: 0.06 },
  { x: 3, top: 330, size: 110, seed: 9, blur: 3, rot: 33, o: 0.65, p: 0.05 },
  { x: 90, top: 380, size: 100, seed: 51, blur: 4, rot: -8, o: 0.6, p: 0.07 },
]

function Rock({ x, top, size, seed, blur, rot, o, p, index }) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (v) => v * -p)
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${top}vh`, width: size, height: size, y: reduce ? 0 : y, opacity: o }}
    >
      <div
        className="h-full w-full"
        style={{
          filter: blur ? `blur(${blur}px)` : undefined,
          transform: `rotate(${rot}deg)`,
          animation: reduce ? undefined : `rock-float ${14 + (index % 5) * 3}s ease-in-out ${index * -2}s infinite alternate`,
        }}
      >
        <RockSvg seed={seed} />
      </div>
    </motion.div>
  )
}

export default function SpaceBackground() {
  return (
    <>
      {/* fixed sky: nebula + stars */}
      <div className="space-only pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(55% 45% at 78% 18%, rgba(40,72,205,0.30), transparent 70%), radial-gradient(45% 40% at 8% 88%, rgba(95,60,210,0.20), transparent 70%), radial-gradient(35% 30% at 50% 100%, rgba(40,90,255,0.16), transparent 70%), linear-gradient(180deg, #03040d, #050818 60%, #03040d)',
          }}
        />
        <div className="space-stars a" />
        <div className="space-stars b" />
      </div>

      {/* shared planet: stays behind every portfolio section while scrolling */}
      <Globe className="space-only pointer-events-none fixed bottom-0 left-1/2 -z-10 h-[720px] w-[min(880px,120vw)] -translate-x-1/2" />

      {/* rocks drift with the page and parallax slightly */}
      <div
        className="space-only pointer-events-none absolute inset-x-0 top-0 -z-10 h-full overflow-hidden"
        aria-hidden="true"
      >
        {ROCKS.map((r, i) => (
          <Rock key={i} index={i} {...r} />
        ))}
      </div>
      <style>{`
        @keyframes rock-float {
          from { translate: 0 -8px; }
          to   { translate: 6px 10px; }
        }
      `}</style>
    </>
  )
}
