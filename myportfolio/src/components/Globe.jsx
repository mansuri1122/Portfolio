import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { LAND_B64, LAND_H, LAND_W } from '../data/landmask.js'

// Decode the 1-bit land mask once.
const MASK = (() => {
  const bin = atob(LAND_B64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes
})()

function isLand(latDeg, lonDeg) {
  const x = Math.min(LAND_W - 1, Math.max(0, Math.floor(((lonDeg + 180) / 360) * LAND_W)))
  const y = Math.min(LAND_H - 1, Math.max(0, Math.floor(((90 - latDeg) / 180) * LAND_H)))
  const idx = y * LAND_W + x
  return (MASK[idx >> 3] >> (7 - (idx & 7))) & 1
}

// Build the dot lattice once: rings of latitude, evenly spaced along each ring.
const DOTS = (() => {
  const out = []
  const step = 2.4
  for (let lat = -84; lat <= 84; lat += step) {
    const cosLat = Math.cos((lat * Math.PI) / 180)
    const count = Math.max(6, Math.round((360 / step) * cosLat))
    for (let i = 0; i < count; i++) {
      const lon = -180 + (360 * i) / count
      out.push({
        lat: (lat * Math.PI) / 180,
        lon: (lon * Math.PI) / 180,
        land: isLand(lat, lon),
      })
    }
  }
  return out
})()

const TILT = (6 * Math.PI) / 180

export default function Globe({ className = '' }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const revealY = useTransform(scrollY, [1200, 1800], [0, -360], { clamp: true })

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return undefined
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let dpr = 1
    let rot = 2.1 // start facing Europe / Africa / Asia
    let raf = 0
    let visible = true
    let last = performance.now()

    const resize = () => {
      const r = wrap.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    function draw() {
      if (!w || !h) return
      ctx.clearRect(0, 0, w, h)
      const R = w * 0.47
      const cx = w / 2
      const cy = h - h * 0.92 + R // sphere centre: only the top cap is visible

      // body of the planet
      const body = ctx.createRadialGradient(cx, cy - R * 0.5, R * 0.1, cx, cy, R)
      body.addColorStop(0, 'rgba(6,10,34,0.96)')
      body.addColorStop(0.8, 'rgba(4,7,26,0.96)')
      body.addColorStop(1, 'rgba(14,30,100,0.7)')
      ctx.fillStyle = body
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fill()

      const cosT = Math.cos(TILT)
      const sinT = Math.sin(TILT)

      for (let i = 0; i < DOTS.length; i++) {
        const d = DOTS[i]
        const lon = d.lon + rot
        const cl = Math.cos(d.lat)
        const x = cl * Math.sin(lon)
        const y0 = Math.sin(d.lat)
        const z0 = cl * Math.cos(lon)
        const y = y0 * cosT - z0 * sinT
        const z = y0 * sinT + z0 * cosT
        if (z <= 0.02) continue
        const sx = cx + R * x
        const sy = cy - R * y
        if (sy > h + 4) continue
        const depth = Math.pow(z, 0.7)
        if (d.land) {
          ctx.globalAlpha = 0.18 + 0.7 * depth
          ctx.fillStyle = z > 0.8 ? '#7fb2ff' : '#4f86ff'
          const s = 1.2 + depth * 1.3
          ctx.fillRect(sx - s / 2, sy - s / 2, s, s)
        } else {
          ctx.globalAlpha = 0.025 + 0.06 * depth
          ctx.fillStyle = '#5b86ff'
          ctx.fillRect(sx - 0.6, sy - 0.6, 1.2, 1.2)
        }
      }
      ctx.globalAlpha = 1

      // atmosphere rim
      const rim = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.09)
      rim.addColorStop(0, 'rgba(70,130,255,0)')
      rim.addColorStop(0.55, 'rgba(90,150,255,0.34)')
      rim.addColorStop(0.7, 'rgba(70,120,255,0.12)')
      rim.addColorStop(1, 'rgba(70,120,255,0)')
      ctx.fillStyle = rim
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.09, 0, Math.PI * 2)
      ctx.fill()
    }

    function tick(now) {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      const dt = Math.min(64, now - last)
      last = now
      rot += dt * 0.00007
      draw()
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        last = performance.now()
      },
      { threshold: 0 },
    )
    io.observe(wrap)

    if (!prefersReducedMotion) raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <motion.div className="h-full w-full" style={{ y: reduce ? 0 : revealY }}>
        <canvas ref={canvasRef} className="block h-full w-full" />
      </motion.div>
    </div>
  )
}
