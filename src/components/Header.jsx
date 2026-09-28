import { motion } from 'framer-motion'
import WaButton from './WaButton'

const LINKS = [['Paket', '#paket'], ['Kenapa NSK', '#kenapa'], ['Jamaah', '#jamaah'], ['Kontak', '#kontak']]

export default function Header({ onChat }) {
  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-30 flex items-center justify-between gap-4 bg-night/85 px-5 py-2 text-white backdrop-blur-md"
    >
      <a href="#atas"><img src="/img/logo.jpg" alt="NSK Tour and Travel" className="h-12 rounded-md bg-white px-1.5 py-0.5" /></a>
      <nav className="hidden gap-7 font-medium md:flex">
        {LINKS.map(([t, h]) => <a key={h} href={h} className="opacity-85 hover:opacity-100">{t}</a>)}
      </nav>
      <WaButton size="small" onClick={() => onChat()}>Chat admin</WaButton>
    </motion.header>
  )
}
