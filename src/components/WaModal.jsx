import { motion } from 'framer-motion'
import WaIcon from './WaIcon'
import { ADMINS, waLink } from '../data'

export default function WaModal({ topic, onClose }) {
  const text = `Assalamualaikum, saya ingin bertanya tentang ${topic} dari NSK Tour & Travel.`
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[60] grid place-items-center overflow-auto bg-[#0a0c14]/75 p-5">
      <motion.div
        role="dialog" aria-modal="true" aria-labelledby="wa-title" onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        className="relative grid w-full max-w-[440px] gap-3 rounded-3xl bg-white p-7"
      >
        <button onClick={onClose} aria-label="Tutup" className="absolute right-3.5 top-2.5 text-3xl leading-none text-[#6e6264]">×</button>
        <h3 id="wa-title" className="pr-8 text-2xl font-bold">Pilih admin untuk dihubungi</h3>
        <p className="text-[#5d5153]">Pesan sudah kami siapkan, tinggal Anda kirim di WhatsApp.</p>
        {ADMINS.map((a, i) => (
          <motion.a
            key={a.wa} href={waLink(a, text)} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.08 }} whileHover={{ x: 4 }}
            className="flex items-center gap-3.5 rounded-2xl border-[1.5px] border-[#e4dcd5] px-4 py-3.5 hover:border-wa hover:bg-[#f1faf4]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-display text-lg font-bold text-white">{a.name[0]}</span>
            <span className="grid flex-1"><b>{a.name}</b><small className="text-[#6e6264]">{a.role} · {a.display}</small></span>
            <WaIcon className="h-5 w-5 text-wa" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}
