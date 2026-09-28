import { useState } from 'react'
import { motion } from 'framer-motion'
import Section, { Title } from './Section'
import Reveal from './Reveal'
import { REELS, DOCS } from '../data'

function Reel({ src, poster, cap, delay }) {
  const [play, setPlay] = useState(false)
  return (
    <Reveal delay={delay} className="grid justify-items-center gap-3">
      <div className="aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-t-full rounded-b-3xl border-[3px] border-gold bg-black">
        {play ? (
          <video src={src} controls autoPlay playsInline className="h-full w-full object-cover" />
        ) : (
          <button onClick={() => setPlay(true)} aria-label={`Putar video: ${cap}`} className="relative block h-full w-full">
            <img src={poster} alt="" loading="lazy" className="h-full w-full object-cover" />
            <motion.i whileHover={{ scale: 1.12 }} className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-brand/90 pl-1 text-xl not-italic text-white">▶</motion.i>
          </button>
        )}
      </div>
      <p className="max-w-[26ch] text-center text-sm text-[#5d5153]">{cap}</p>
    </Reveal>
  )
}

export default function Testimonials() {
  return (
    <Section id="jamaah" tone="tint">
      <Title sub="Video dan foto asli keberangkatan jamaah kami.">Dari jamaah NSK, langsung dari tanah suci</Title>
      <div className="mb-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {REELS.map((r, i) => <Reel key={r.src} {...r} delay={i * 0.12} />)}
      </div>
      <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
        {DOCS.map((d, i) => (
          <Reveal key={d} delay={i * 0.08}>
            <div className="overflow-hidden rounded-xl">
              <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} src={d} alt={`Dokumentasi jamaah NSK ${i + 1}`} loading="lazy" className="h-56 w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
