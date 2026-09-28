import { motion } from 'framer-motion'

export default function Lightbox({ src, onClose }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[60] grid cursor-zoom-out place-items-center bg-[#0a0c14]/80 p-5">
      <motion.img src={src} alt="Brosur paket" initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="max-h-[92vh] w-auto rounded-xl" />
    </motion.div>
  )
}
