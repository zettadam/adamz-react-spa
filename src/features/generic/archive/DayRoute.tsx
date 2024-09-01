import { Link, useLocation, useParams } from 'react-router-dom'

export function DayRoute() {
  const l = useLocation()
  const { year, month, day } = useParams()

  const s = l.pathname.split('/')[1]

  return (
    <main>
      <h3>
        Archive Month:{' '}
        {year ? <Link to={`/${s}/archive/${year}`}>{year}</Link> : null}
        {year && month ? (
          <Link to={`/${s}/archive/${year}/${month}`}>
            {month.toUpperCase()}
          </Link>
        ) : null}
        {day ? ` / ${day}` : null}
      </h3>
      <p>Day page will be rendered here.</p>
    </main>
  )
}
