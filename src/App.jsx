import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Packages from './components/Packages'
import WhyUs from './components/WhyUs'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import Promo from './components/Promo'
import Footer from './components/Footer'
import FloatingWa from './components/FloatingWa'
import SoundToggle from './components/SoundToggle'
import WaModal from './components/WaModal'
import Lightbox from './components/Lightbox'
import useBacksound from './hooks/useBacksound'

export default function App() {
  const [topic, setTopic] = useState(null) // isi = modal WhatsApp terbuka
  const [brosur, setBrosur] = useState(null)
  const sound = useBacksound('/audio/pocketbeats-islamic-music-background-338860.mp3')
  const openWa = (t = 'paket umroh') => setTopic(t)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setTopic(null), setBrosur(null))
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <Header onChat={openWa} />
      <main>
        <Hero onChat={openWa} />
        <Packages onChat={openWa} onBrosur={setBrosur} />
        <WhyUs />
        <Steps />
        <Testimonials />
        <Promo onChat={openWa} />
      </main>
      <Footer />
      <SoundToggle on={sound.on} onToggle={sound.toggle} />
      <FloatingWa onClick={() => openWa()} />
      <AnimatePresence>{topic && <WaModal key="wa" topic={topic} onClose={() => setTopic(null)} />}</AnimatePresence>
      <AnimatePresence>{brosur && <Lightbox key="lb" src={brosur} onClose={() => setBrosur(null)} />}</AnimatePresence>
    </MotionConfig>
  )
}
