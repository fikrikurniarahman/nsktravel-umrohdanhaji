import { motion } from 'framer-motion'
import WaButton from './WaButton'

export const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

export default function PackageCard({ p, onChat }) {
  const dollar = p.price.startsWith('$')
  return (
    <motion.article variants={item} whileHover={{ y: -4 }} className="grid gap-3.5 rounded-2xl border-[1.5px] border-[#e4dcd5] bg-white p-5 md:p-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h3 className="text-xl font-bold md:text-2xl">{p.name}</h3>
          <p className="mt-1 text-sm text-[#6e6264]">
            {p.days}
            {p.tag && <em className="ml-2.5 rounded-md bg-[#fbe9c9] px-2 py-0.5 text-xs font-semibold not-italic text-[#6c4a06]">{p.tag}</em>}
          </p>
        </div>
        <p className="whitespace-nowrap font-display text-4xl font-extrabold leading-none text-brand sm:text-right">
          <small className="block font-sans text-xs font-medium text-[#6e6264]">{dollar ? '' : 'Rp'}</small>
          {p.price}
          <small className="block font-sans text-xs font-medium text-[#6e6264]">{p.unit}</small>
        </p>
      </div>
      <ul className="grid list-disc gap-1 pl-5 text-[#4a3f41]">{p.rows.map((r) => <li key={r}>{r}</li>)}</ul>
      <WaButton size="small" className="justify-self-start" onClick={() => onChat(`${p.name} (${p.days})`)}>Tanya paket ini</WaButton>
    </motion.article>
  )
}
