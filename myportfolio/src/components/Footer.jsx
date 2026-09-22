import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 text-[0.85rem] text-muted md:flex-row md:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>Built with React, Vite and Tailwind CSS.</p>
      </div>
    </footer>
  )
}
