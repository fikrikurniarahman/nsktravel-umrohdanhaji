import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import WaButton from './WaButton'

const H1 = 'Wujudkan umroh impian keluarga Anda bersama NSK.'.split(' ')
const parent = { show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }
const word = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } } }
const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Hero({ onChat }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section id="atas" ref={ref} className="relative overflow-hidden bg-night pb-16 pt-28 text-white md:pt-32">
      <motion.div style={{ y, backgroundImage: 'url(/img/kaaba-night.jpg)' }} className="absolute -inset-5 bg-cover bg-center blur-[14px] brightness-[.45]" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 to-night/20" />
      <div className="relative mx-auto grid max-w-[1160px] items-center gap-10 px-5 md:grid-cols-[1.2fr_.8fr] md:gap-12">
        <motion.div variants={parent} initial="hidden" animate="show" className="order-2 md:order-1">
          <motion.p variants={fade} lang="ar" dir="rtl" className="mb-3 text-left font-arab text-3xl text-gold">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ</motion.p>
          <h1 className="text-4xl font-extrabold md:text-6xl md:max-w-[15ch]">
            {H1.map((w, i) => (
              <span key={i} className="mr-[.25em] inline-block overflow-hidden align-bottom">
                <motion.span variants={word} className="inline-block">{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p variants={fade} className="my-5 max-w-[46ch] text-lg text-[#e6e1e3]">
            Paket umroh musim 1448 H mulai <strong className="text-gold">Rp34,85 juta</strong>. Hotel dekat Masjidil Haram, dampingan muthowif, dan admin yang membalas langsung lewat WhatsApp.
          </motion.p>
          <motion.div variants={fade} className="flex flex-col gap-3 sm:flex-row">
            <WaButton onClick={() => onChat()} className="justify-center">Tanya paket via WhatsApp</WaButton>
            <a href="#paket" className="rounded-full border-[1.5px] border-white/50 px-6 py-3.5 text-center font-semibold hover:bg-white/10">Lihat semua paket</a>
          </motion.div>
          <motion.p variants={fade} className="mt-5 text-sm text-[#b9b4b8]">Izin umroh No. 288 Tahun 2020 · PT. Niat Suci Ke-Baitullah</motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.3 }}
          className="order-1 mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-t-full rounded-b-3xl border-[3px] border-gold bg-black shadow-2xl shadow-black/50 md:order-2 md:max-w-[340px]"
        >
          <video src="/video/hero.mp4" poster="/img/hero-poster.jpg" autoPlay muted loop playsInline className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
