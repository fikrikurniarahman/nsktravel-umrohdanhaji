import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section, { Title } from './Section'
import PackageCard from './PackageCard'
import { TABS, PACKAGES, FACILITIES } from '../data'

const list = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }

export default function Packages({ onChat, onBrosur }) {
  const [tab, setTab] = useState('reguler')
  const cur = TABS.find((t) => t.id === tab)

  return (
    <Section id="paket">
      <Title sub="Harga sewaktu-waktu dapat berubah mengikuti kondisi geopolitik Timur Tengah dan kurs dolar. Tanyakan harga terbaru ke admin.">
        Pilih paket yang sesuai dengan keluarga Anda
      </Title>

      <div role="tablist" className="mb-7 flex flex-wrap gap-2.5">
        {TABS.map((t) => (
          <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
            className={`relative grid min-w-[200px] flex-1 gap-0.5 rounded-2xl border-[1.5px] px-[18px] py-3.5 text-left ${tab === t.id ? 'border-brand text-white' : 'border-[#e4dcd5] bg-white'}`}>
            {tab === t.id && <motion.span layoutId="tab-bg" transition={{ type: 'spring', stiffness: 400, damping: 34 }} className="absolute inset-0 rounded-2xl bg-brand" />}
            <b className="relative font-display text-base font-bold">{t.label}</b>
            <span className={`relative text-sm ${tab === t.id ? 'text-[#f3d3d5]' : 'text-[#6e6264]'}`}>{t.note}</span>
          </button>
        ))}
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[1fr_340px]">
        <AnimatePresence mode="wait">
          <motion.div key={tab} variants={list} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.15 } }} className="grid gap-4">
            {PACKAGES.filter((p) => p.tab === tab).map((p) => <PackageCard key={p.name} p={p} onChat={onChat} />)}
          </motion.div>
        </AnimatePresence>

        <aside className="md:sticky md:top-24">
          <button onClick={() => onBrosur(cur.img)} aria-label={`Perbesar brosur ${cur.label}`} className="relative block w-full max-w-[380px] cursor-zoom-in overflow-hidden rounded-2xl shadow-xl shadow-brand/20 md:max-w-none">
            <AnimatePresence mode="wait">
              <motion.img key={cur.img} src={cur.img} alt={`Brosur ${cur.label}`} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="w-full" />
            </AnimatePresence>
            <span className="absolute bottom-2.5 right-2.5 rounded-full bg-night/85 px-3 py-1 text-xs text-white">Perbesar brosur</span>
          </button>
          <h4 className="mb-2 mt-6 text-lg font-bold">Sudah termasuk</h4>
          <ul className="grid list-disc gap-1 pl-5 text-[#4a3f41]">{FACILITIES.map((f) => <li key={f}>{f}</li>)}</ul>
        </aside>
      </div>
    </Section>
  )
}
