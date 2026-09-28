import { ADMINS, waLink } from '../data'

const A = 'border-b border-white/25 hover:text-gold'

export default function Footer() {
  return (
    <footer id="kontak" className="bg-night pb-6 pt-14 text-[#d9d4d7]">
      <div className="mx-auto grid max-w-[1160px] gap-9 px-5 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src="/img/logo.jpg" alt="NSK Tour and Travel" className="mb-3.5 h-16 rounded-lg bg-white px-2 py-0.5" />
          <p>PT. Niat Suci Ke-Baitullah<br />Izin umroh No. 288 Tahun 2020<br />Izin haji No. 02201022506590001</p>
        </div>
        <div className="grid content-start gap-2.5">
          <h4 className="text-lg font-bold text-white">Kantor pusat</h4>
          <p>Jl. Naga Sakti No. 288, Kel. Binawidya, Kec. Tampan, Pekanbaru<br />Telp. (0761) 670-5225</p>
          <p>
            <a className={A} href="https://www.nskgroup.co" target="_blank" rel="noreferrer">nskgroup.co</a> ·{' '}
            <a className={A} href="https://instagram.com/niat.suci_ke_baitullah" target="_blank" rel="noreferrer">Instagram</a> ·{' '}
            <a className={A} href="https://www.tiktok.com/@nskgroup.co" target="_blank" rel="noreferrer">TikTok</a>
          </p>
        </div>
        <div className="grid content-start gap-2.5">
          <h4 className="text-lg font-bold text-white">Hubungi admin</h4>
          {ADMINS.map((a) => (
            <a key={a.wa} className="hover:text-gold" href={waLink(a, 'Assalamualaikum, saya ingin bertanya tentang paket umroh NSK.')} target="_blank" rel="noreferrer">
              <b className="text-white">{a.name}</b><br />{a.display}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-[#8d868a]">© 2026 NSK Tour & Travel</p>
    </footer>
  )
}
