import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const el = cursorRef.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      el.style.left = e.clientX - 6 + 'px'
      el.style.top = e.clientY - 6 + 'px'
    }
    const expand = () => el.classList.add('expanded')
    const shrink = () => el.classList.remove('expanded')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div ref={cursorRef} className="custom-cursor hidden md:block" aria-hidden="true" />
}
