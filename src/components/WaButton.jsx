import { motion } from 'framer-motion'
import WaIcon from './WaIcon'

const styles = {
  primary: 'bg-wa text-white hover:bg-wa-dark px-6 py-3.5',
  small: 'bg-wa text-white hover:bg-wa-dark px-4 py-2.5 text-sm',
}

export default function WaButton({ onClick, children, size = 'primary', className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 rounded-full font-semibold transition-colors ${styles[size]} ${className}`}
    >
      <WaIcon /> {children}
    </motion.button>
  )
}
