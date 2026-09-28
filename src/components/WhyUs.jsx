import Section, { Title } from './Section'
import Reveal from './Reveal'
import { WHY } from '../data'

export default function WhyUs() {
  return (
    <Section id="kenapa" tone="dark">
      <Title>Alasan jamaah mempercayakan perjalanannya ke NSK</Title>
      <div className="mt-10 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.1}>
            <h3 className="mb-2 text-xl font-bold text-gold">{w.t}</h3>
            <p className="text-[#cfcacd]">{w.d}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
