import { useEffect, useState } from 'react'

/** Returns the id of the section currently crossing the middle of the viewport. */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}
