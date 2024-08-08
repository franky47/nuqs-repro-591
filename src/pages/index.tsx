import { useQueryState } from 'nuqs'

export default function Home() {
  const [q, setQ] = useQueryState('q', {
    defaultValue: '',
    clearOnDefault: true,
  })
  return (
    <>
      <input value={q} onChange={(e) => setQ(e.target.value)} />
    </>
  )
}
