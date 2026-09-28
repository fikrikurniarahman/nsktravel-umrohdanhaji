// Ubah nomor, nama, dan harga di file ini. Nomor WhatsApp memakai format 62 (tanpa 0 di depan).
export const ADMINS = [
  { name: 'Fikri Kurnia Rahman', role: 'Admin 1', display: '0895-0537-7515', wa: '6289505377515' },
  { name: 'Rusmedi', role: 'Admin 2', display: '0852-7180-2492', wa: '6285271802492' },
]

export const waLink = (admin, text) =>
  `https://wa.me/${admin.wa}?text=${encodeURIComponent(text)}`

export const TABS = [
  { id: 'reguler', label: 'Umroh Musim 1448 H', note: 'Berangkat Oktober – November 2026', img: '/img/pkg-main.jpg' },
  { id: 'ramadhan', label: 'Umroh Ramadhan', note: 'Full Ramadhan 1448 H', img: '/img/pkg-ramadhan.jpg' },
  { id: 'haji', label: 'Haji Plus', note: 'Resmi Kemenag', img: '/img/pkg-haji.jpg' },
]

export const PACKAGES = [
  { tab: 'reguler', name: 'Paket Hemat', days: '12 hari', price: '34,85', unit: 'juta', rows: ['5 hari Makkah, 5 hari Madinah', 'Hilton (Mekkah Tower), tipe villa 6–7 orang', 'Madinah bintang 3, jarak 50–100 m'] },
  { tab: 'reguler', name: 'Paket Dekat', days: '13 hari', price: '38,85', unit: 'juta', rows: ['6 hari Makkah, 5 hari Madinah', 'Hilton (Mekkah Tower), kamar 5 orang', 'Jarak hotel ke Masjidil Haram 0 meter'] },
  { tab: 'reguler', name: 'Paket Dekat + Kereta Cepat', days: '12 hari', price: '38,85', unit: 'juta', tag: 'Gratis kereta cepat', rows: ['5 hari Makkah, 5 hari Madinah', 'Hilton (Mekkah Tower), kamar 5 orang', 'Kereta cepat Makkah–Madinah'] },
  { tab: 'reguler', name: 'Paket Premium', days: '12 hari', price: '38,85', unit: 'juta', tag: 'Plus Malaysia', rows: ['4 hari Madinah, 5 hari Makkah, 1 hari Malaysia', 'Kereta cepat Makkah–Madinah', 'Terbang via Kuala Lumpur'] },
  { tab: 'ramadhan', name: 'Full Ramadhan Full Service', days: '33 hari', price: '61,85', unit: 'juta', tag: 'Makan 2x sehari', rows: ['28 hari Makkah, 3 hari Madinah', 'Ajwad Ajyad bintang 3, jarak 400 m', 'Al Anshar Golden Tulip, jarak 50–100 m'] },
  { tab: 'ramadhan', name: 'Full Ramadhan Mandiri', days: '35 hari', price: '42,85', unit: 'juta', tag: 'Tanpa makan', rows: ['30 hari Makkah, 3 hari Madinah', 'Al Ayam Elite Hotel, shuttle bus hotel', 'Al Anshar Golden Tulip, jarak 50–100 m'] },
  { tab: 'haji', name: 'Haji Plus Resmi Kemenag', days: '20–25 hari', price: '$18.000', unit: 'estimasi', tag: 'DP $5.000', rows: ['DP awal $2.000 (sudah dapat nomor porsi), sisa DP $3.000 diangsur 2 tahun tanpa biaya tambahan', 'Pelunasan $13.000 (kondisional)', 'Estimasi tunggu 5–7 tahun sesuai antrian Kemenag'] },
]

export const FACILITIES = ['Perlengkapan & manasik', 'Tour leader, muthowif, handling Makkah & Madinah', 'City tour Makkah, Madinah, Thaif', 'Hotel dekat dengan masjid']

export const WHY = [
  { t: 'Izin resmi', d: 'PT. Niat Suci Ke-Baitullah memegang izin umroh No. 288 Tahun 2020 dan izin haji No. 02201022506590001.' },
  { t: 'Hotel dekat masjid', d: 'Menginap di Hilton (Mekkah Tower) berjarak 0 meter dari Masjidil Haram, dan hotel Madinah 50–100 meter.' },
  { t: 'Didampingi dari awal sampai pulang', d: 'Tour leader, muthowif, dan tim handling menemani jamaah di Makkah dan Madinah.' },
  { t: 'Berangkat dari Pekanbaru', d: 'Penerbangan Super Air Jet, Batik Air, atau Malaysia Airlines lewat Kuala Lumpur ke Jeddah.' },
]

export const STEPS = [
  { t: 'Chat admin', d: 'Ceritakan rencana keberangkatan Anda, admin bantu pilihkan paket.' },
  { t: 'Daftar & bayar DP', d: 'Kirim data paspor, lalu kursi Anda diamankan.' },
  { t: 'Manasik & perlengkapan', d: 'Belajar tata cara ibadah dan terima perlengkapan sebelum berangkat.' },
  { t: 'Berangkat bersama', d: 'Didampingi tour leader dan muthowif sampai kembali ke tanah air.' },
]

export const REELS = [
  { src: '/video/reel1.mp4', poster: '/img/reel1.jpg', cap: 'Umroh pertama jamaah NSK' },
  { src: '/video/reel2.mp4', poster: '/img/reel2.jpg', cap: 'Testimoni jamaah NSK, 5 September 2026' },
  { src: '/video/reel3.mp4', poster: '/img/reel3.jpg', cap: 'Cerita jamaah selama di tanah suci' },
]
export const DOCS = ['/img/doc3.jpg', '/img/doc4.jpg', '/img/doc2.jpg', '/img/doc1.jpg']
