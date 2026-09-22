// Generates public/Sahil_Khan_Resume.pdf from src/data/content.js.
// Run:  npm run generate-resume   (also runs automatically before `dev` and `build`)
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { about, achievements, certifications, profile, projects, skillGroups } from '../src/data/content.js'

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../public', profile.resumeFileName)

const PAGE = { w: 595.28, h: 841.89 }
const M = 46
const INK = rgb(0.09, 0.1, 0.16)
const MUTED = rgb(0.34, 0.37, 0.46)
const ACCENT = rgb(0.16, 0.36, 0.95)

// Standard PDF fonts only cover WinAnsi: keep those characters, drop anything else.
const OK = new Set([0x2013, 0x2014, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2026])
const clean = (t) =>
  [...String(t)]
    .filter((ch) => ch.codePointAt(0) <= 0xff || OK.has(ch.codePointAt(0)))
    .join('')

const doc = await PDFDocument.create()
const regular = await doc.embedFont(StandardFonts.Helvetica)
const bold = await doc.embedFont(StandardFonts.HelveticaBold)

let page = doc.addPage([PAGE.w, PAGE.h])
let y = PAGE.h - M

function ensure(space) {
  if (y - space < M) {
    page = doc.addPage([PAGE.w, PAGE.h])
    y = PAGE.h - M
  }
}

function wrap(text, font, size, width) {
  const words = clean(text).split(/\s+/).filter(Boolean)
  const lines = []
  let line = ''
  for (const w of words) {
    const next = line ? `${line} ${w}` : w
    if (font.widthOfTextAtSize(next, size) > width && line) {
      lines.push(line)
      line = w
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines
}

function para(text, { font = regular, size = 10, color = INK, gap = 3, indent = 0 } = {}) {
  const lines = wrap(text, font, size, PAGE.w - M * 2 - indent)
  for (const l of lines) {
    ensure(size + gap)
    page.drawText(l, { x: M + indent, y: y - size, size, font, color })
    y -= size + gap
  }
}

function heading(text) {
  ensure(34)
  y -= 12
  page.drawText(clean(text).toUpperCase(), { x: M, y: y - 10, size: 10.5, font: bold, color: ACCENT })
  y -= 15
  page.drawLine({ start: { x: M, y }, end: { x: PAGE.w - M, y }, thickness: 0.7, color: rgb(0.82, 0.85, 0.93) })
  y -= 8
}

// ----- header
page.drawText(clean(profile.name), { x: M, y: y - 24, size: 26, font: bold, color: INK })
y -= 32
page.drawText(clean(profile.role), { x: M, y: y - 12, size: 12.5, font: regular, color: ACCENT })
y -= 20
const contact = [profile.email, profile.github, profile.linkedin].filter(Boolean).join('   |   ')
if (contact) para(contact, { size: 9.5, color: MUTED })

// ----- summary
heading('Summary')
para(profile.intro, { size: 10.2, gap: 4 })

// ----- education
const edu = about.education
heading('Education')
para(edu.degree, { font: bold, size: 10.5 })
para(`${edu.school}  |  ${edu.session}  |  CGPA: ${edu.cgpa}`, { size: 9.8, color: MUTED })

// ----- skills
heading('Technical Skills')
for (const g of skillGroups) {
  const label = `${g.tabLabel ?? g.title}: `
  ensure(14)
  const labelW = bold.widthOfTextAtSize(clean(label), 10)
  const lines = wrap(g.items.join(', '), regular, 10, PAGE.w - M * 2 - labelW)
  page.drawText(clean(label), { x: M, y: y - 10, size: 10, font: bold, color: INK })
  lines.forEach((l, i) => {
    if (i > 0) ensure(13)
    page.drawText(l, { x: M + labelW, y: y - 10, size: 10, font: regular, color: INK })
    y -= 13
  })
  y -= 1
}

// ----- projects (placeholders are skipped)
const realProjects = projects.filter((p) => !p.placeholder)
if (realProjects.length) {
  heading('Projects')
  for (const p of realProjects) {
    para(p.title, { font: bold, size: 10.5 })
    para(p.tech.join(', '), { size: 9.3, color: ACCENT })
    para(p.description, { size: 10 })
    y -= 4
  }
}

// ----- certifications (placeholders are skipped)
const realCerts = certifications.filter((c) => !c.placeholder)
if (realCerts.length) {
  heading('Certifications')
  for (const c of realCerts) {
    para(`\u2022 ${[c.title, c.issuer, c.year].filter(Boolean).join(' - ')}`, { size: 10 })
  }
}

// ----- achievements
heading('Achievements')
for (const a of achievements) {
  para(`\u2022 ${a.title} - ${a.text}`, { size: 10, indent: 0 })
}

await mkdir(dirname(OUT), { recursive: true })
await writeFile(OUT, await doc.save())
const skipped = projects.length - realProjects.length + (certifications.length - realCerts.length)
console.log(`Resume written to ${OUT}` + (skipped ? ` (skipped ${skipped} placeholder item${skipped > 1 ? 's' : ''})` : ''))
