import { motion } from 'framer-motion'
import Section, { Title } from './Section'
import Reveal from './Reveal'
import { STEPS } from '../data'

export default function Steps() {
  return (
    <Section>
      <Title>Cara mendaftar</Title>
      <ol className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.t}>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} className="h-[3px] origin-left bg-brand" />
            <Reveal delay={i * 0.15} className="pt-4">
              <span className="font-display text-3xl font-extrabold text-brand">{i + 1}</span>
              <h3 className="mb-1.5 mt-1 text-xl font-bold">{s.t}</h3>
              <p className="text-[#5d5153]">{s.d}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
