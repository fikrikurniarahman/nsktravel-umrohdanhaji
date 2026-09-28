import { motion } from 'framer-motion'
import WaIcon from './WaIcon'

export default function FloatingWa({ onClick }) {
  return (
    <motion.button
      onClick={onClick} aria-label="Chat admin via WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1.2 }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
      className="fixed bottom-[18px] right-[18px] z-40 grid h-[60px] w-[60px] place-items-center rounded-full bg-wa text-white shadow-lg shadow-black/35"
    >
      <motion.span className="absolute inset-0 rounded-full bg-wa" animate={{ scale: [1, 1.6], opacity: [0.5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', repeatDelay: 1.5 }} />
      <WaIcon className="relative h-8 w-8" />
    </motion.button>
  )
}
