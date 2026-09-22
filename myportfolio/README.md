# Sahil Khan — Portfolio

Personal portfolio for Sahil Khan, a B.Tech CSE student and aspiring Java Full Stack Developer.
Built with React 19, Vite, Tailwind CSS 4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The resume PDF is generated automatically before `dev` and `build`
(or run `npm run generate-resume` yourself).

## Build

```bash
npm run build
npm run preview
```

## Editing your content

Everything (text, skills, projects, links) lives in **`src/data/content.js`**.

- GitHub, LinkedIn, email and project/certificate links stay in a “Coming soon” state until you add real URLs there.
- The **Projects and Certifications are placeholders** (marked `placeholder: true`). Replace them with your real ones and delete that flag; placeholders are left out of the generated resume.
- The contact form opens your email app once `profile.email` is set. Until then it shows a notice instead of pretending to send.

## Photos

Replace these files in `public/images/` with your own (same names):

| File | What it is |
| --- | --- |
| `hero.png` | Transparent PNG cut-out (head and shoulders) shown on the hero glass card |
| `avatar.png` | Square face crop for the navbar logo |
| `about.jpg` | Portrait for the About section (about 4:5) |
| `skills.png` | Transparent PNG cut-out for the Skills header |

The current images were cropped from the design reference, so they are low resolution.

## Structure

```
src/
  App.jsx              page layout, theme + scroll-spy
  data/content.js      all content
  components/          Navbar, Hero, About, Skills, Projects, Certifications, Achievements, Contact, ...
scripts/generate-resume.mjs   builds public/Sahil_Khan_Resume.pdf from content.js
```
