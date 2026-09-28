const TONES = { light: '', tint: 'bg-tint', dark: 'bg-night text-white' }

export default function Section({ id, tone = 'light', children }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${TONES[tone]}`}>
      <div className="mx-auto max-w-[1160px] px-5">{children}</div>
    </section>
  )
}

export const Title = ({ children, sub, dark }) => (
  <>
    <h2 className="mb-2 max-w-[22ch] text-3xl font-extrabold md:text-5xl">{children}</h2>
    {sub && <p className={`mb-8 max-w-[60ch] ${dark ? 'text-[#b9b4b8]' : 'text-[#5d5153]'}`}>{sub}</p>}
  </>
)
