import { motion } from 'framer-motion'

// Tiga batang equalizer: bergerak saat musik menyala, diam saat dimatikan.
const BARS = [0.9, 1.4, 1.1]

export default function SoundToggle({ on, onToggle }) {
  return (
    <motion.button
      onClick={onToggle} aria-pressed={on} aria-label={on ? 'Matikan musik latar' : 'Nyalakan musik latar'}
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-[18px] left-[18px] z-40 flex items-center gap-2.5 rounded-full bg-night/90 py-2.5 pl-4 pr-5 text-sm font-medium text-white shadow-lg shadow-black/30 backdrop-blur"
    >
      <span className="flex h-5 items-end gap-[3px]" aria-hidden="true">
        {BARS.map((d, i) => (
          <motion.span
            key={i} className={`w-[3px] rounded-full ${on ? 'bg-gold' : 'bg-white/50'}`}
            animate={on ? { height: ['30%', '100%', '45%', '85%', '30%'] } : { height: '30%' }}
            transition={on ? { duration: d, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 } : { duration: 0.2 }}
          />
        ))}
      </span>
      {on ? 'Musik menyala' : 'Musik mati'}
    </motion.button>
  )
}
