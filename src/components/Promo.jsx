import Section, { Title } from './Section'
import Reveal from './Reveal'
import WaButton from './WaButton'

export default function Promo({ onChat }) {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <Reveal x={-40} y={0}>
          <img src="/img/promo.jpg" alt="Promo umroh musim 1448 H, hotel persis di pelataran Masjidil Haram" loading="lazy" className="rounded-2xl shadow-2xl shadow-brand/20" />
        </Reveal>
        <Reveal x={40} y={0}>
          <Title sub="Kirim pesan sekarang, admin akan cek ketersediaan kursi dan tanggal keberangkatan terdekat untuk Anda.">Kursi keberangkatan terbatas</Title>
          <WaButton onClick={() => onChat('promo umroh musim 1448 H')}>Cek kursi via WhatsApp</WaButton>
        </Reveal>
      </div>
    </Section>
  )
}
