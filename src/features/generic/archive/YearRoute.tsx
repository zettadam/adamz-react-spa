import { NavLink, useLocation, useParams } from 'react-router-dom'

export function YearRoute() {
  const l = useLocation()
  const { year } = useParams()

  const s = l.pathname.split('/')[1]

  return (
    <main>
      <h3>Year: {year}</h3>
      <p>Year page will be rendered here.</p>
      <nav>
        <NavLink to={`/${s}/archive`}>Archive</NavLink>
        <NavLink to={`/${s}/archive/${year}/jan`}>January</NavLink>
        <NavLink to={`/${s}/archive/${year}/feb`}>February</NavLink>
        <NavLink to={`/${s}/archive/${year}/mar`}>March</NavLink>
        <NavLink to={`/${s}/archive/${year}/apr`}>April</NavLink>
        <NavLink to={`/${s}/archive/${year}/may`}>May</NavLink>
        <NavLink to={`/${s}/archive/${year}/jun`}>June</NavLink>
        <NavLink to={`/${s}/archive/${year}/jul`}>July</NavLink>
        <NavLink to={`/${s}/archive/${year}/aug`}>August</NavLink>
        <NavLink to={`/${s}/archive/${year}/sep`}>September</NavLink>
        <NavLink to={`/${s}/archive/${year}/oct`}>October</NavLink>
        <NavLink to={`/${s}/archive/${year}/nov`}>November</NavLink>
        <NavLink to={`/${s}/archive/${year}/dec`}>December</NavLink>
      </nav>
    </main>
  )
}
