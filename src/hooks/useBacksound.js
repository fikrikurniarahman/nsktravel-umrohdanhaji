import { useCallback, useEffect, useRef, useState } from 'react'

const KEY = 'nsk-sound'
const VOL = 0.35

// Musik latar: mulai saat pengunjung pertama kali menyentuh layar (aturan browser),
// dan ingat pilihan "mati" pengunjung untuk kunjungan berikutnya.
export default function useBacksound(src) {
  const audio = useRef(null)
  const timer = useRef(null)
  const [on, setOn] = useState(false)

  const fade = useCallback((to, done) => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      const a = audio.current
      const step = (to - a.volume) / 6
      a.volume = Math.min(1, Math.max(0, Math.abs(to - a.volume) < 0.02 ? to : a.volume + step))
      if (a.volume === to) { clearInterval(timer.current); done && done() }
    }, 60)
  }, [])

  const play = useCallback(() => {
    const a = audio.current
    return a.play().then(() => { setOn(true); fade(VOL) }).catch(() => {})
  }, [fade])

  const pause = useCallback(() => {
    setOn(false)
    fade(0, () => audio.current.pause())
  }, [fade])

  const toggle = useCallback(() => {
    if (on) { localStorage.setItem(KEY, 'off'); pause() }
    else { localStorage.removeItem(KEY); play() }
  }, [on, play, pause])

  useEffect(() => {
    const a = new Audio(src)
    a.loop = true; a.volume = 0; a.preload = 'auto'
    audio.current = a
    const evs = ['click', 'keydown', 'touchend']
    const off = () => evs.forEach((e) => window.removeEventListener(e, start))
    function start() {
      if (localStorage.getItem(KEY) === 'off') return
      play().then(() => { if (!a.paused) off() })
    }
    let resume = false
    const vis = () => {
      if (document.hidden) { resume = !a.paused; a.pause() }
      else if (resume) a.play().catch(() => {})
    }
    if (localStorage.getItem(KEY) !== 'off') {
      evs.forEach((e) => window.addEventListener(e, start))
      a.play().then(() => { setOn(true); fade(VOL); off() }).catch(() => {})
    }
    document.addEventListener('visibilitychange', vis)
    return () => { off(); document.removeEventListener('visibilitychange', vis); clearInterval(timer.current); a.pause() }
  }, [src, play, fade])

  return { on, toggle }
}
