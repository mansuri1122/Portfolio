// Brand marks are drawn as inline SVG (lucide-react 1.x no longer ships brand icons).

export function ReactMark({ className = '' }) {
  return (
    <svg viewBox="-12 -12 24 24" className={className} fill="none" stroke="#5fd3f5" strokeWidth="1" aria-hidden="true">
      <ellipse rx="10" ry="4.1" />
      <ellipse rx="10" ry="4.1" transform="rotate(60)" />
      <ellipse rx="10" ry="4.1" transform="rotate(120)" />
      <circle r="1.9" fill="#5fd3f5" stroke="none" />
    </svg>
  )
}

export function JavaMark({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* steam */}
      <path
        d="M34 3c3 4-5 7-5 12 0 3 3 5 3 8-2-2-6-4-5-8 1-5 9-7 7-12z"
        fill="#f0553a"
      />
      <path d="M40 12c2 3-3 5-3 8 0 2 2 3 2 5-2-1-4-3-3-5 0-3 5-5 4-8z" fill="#f0553a" opacity=".85" />
      {/* cup */}
      <path
        d="M17 31h27v9c0 6-5 10-13 10s-14-4-14-10z"
        fill="none"
        stroke="#5b9bf0"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M44 33c5 0 8 2 8 5s-4 6-9 6" fill="none" stroke="#5b9bf0" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M13 55c8 3 24 3 34 0" fill="none" stroke="#5b9bf0" strokeWidth="2.4" strokeLinecap="round" />
      <text
        x="32"
        y="63.5"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans Variable, Inter Variable, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="11"
        fill="#f38b2f"
      >
        Java
      </text>
    </svg>
  )
}

export function SpringMark({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 4.5 55 17.8v28.4L32 59.5 9 46.2V17.8z"
        fill="#5fc14c"
        stroke="#94e57f"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 19v13" stroke="#0b1a10" strokeWidth="5" strokeLinecap="round" />
      <path
        d="M22.5 25.5a14 14 0 1 0 19 0"
        fill="none"
        stroke="#0b1a10"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MySqlMark({ className = '' }) {
  return (
    <svg viewBox="0 0 80 64" className={className} aria-hidden="true">
      {/* dolphin */}
      <path
        d="M44 6c-9 0-15 6-18 13-2 5-2 9-6 12-3 2-6 2-9 1 4 4 9 5 14 3 3 4 7 6 12 6-1-3-1-5 0-7 6-1 11-5 13-11 1-5-1-10-6-14 3 1 5 1 7 0-2-2-5-3-7-3z"
        fill="#59b4e6"
      />
      <circle cx="50" cy="16" r="1.4" fill="#0a1236" />
      <text
        x="40"
        y="55"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans Variable, Inter Variable, sans-serif"
        fontWeight="800"
        fontStyle="italic"
        fontSize="17"
      >
        <tspan fill="#59b4e6">My</tspan>
        <tspan fill="#f39a2c">SQL</tspan>
      </text>
    </svg>
  )
}

export function GithubMark({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export function LinkedinMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function CodeMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13.5 5-3 14" />
    </svg>
  )
}
