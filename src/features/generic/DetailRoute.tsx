import { useParams } from 'react-router-dom'

export default function DetailRoute() {
  const { id } = useParams()
  return (
    <div className="page detail">
      <h2>Detail</h2>
      <p>Detail ({id}) page will be rendered here.</p>
    </div>
  )
}
