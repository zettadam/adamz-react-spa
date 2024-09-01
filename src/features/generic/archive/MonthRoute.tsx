import { Link, useLocation, useParams } from 'react-router-dom'

export function MonthRoute() {
  const l = useLocation()
  const { year, month } = useParams()

  const s = l.pathname.split('/')[1]

  return (
    <main>
      <h3>
        Archive Month:{' '}
        {year ? <Link to={`/${s}/archive/${year}`}>{year}</Link> : null}
        {month ? ` / ${month}` : null}
      </h3>
      <p>Month page will be rendered here.</p>
    </main>
  )
}
