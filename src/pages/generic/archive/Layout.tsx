import { NavLink, Outlet, useLocation } from 'react-router-dom'

export function Component() {
  const l = useLocation()
  const s = l.pathname.split('/')[1]

  return (
    <div className="page">
      <Outlet />
      <aside>
        <nav>
          <NavLink to={`/${s}/archive`}>Archive</NavLink>
          <NavLink to={`/${s}/archive/2024`}>2024</NavLink>
          <NavLink to={`/${s}/archive/2023`}>2023</NavLink>
        </nav>
      </aside>
    </div>
  )
}
