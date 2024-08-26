import { NavLink, Outlet } from 'react-router-dom'

import './code-layout.css'

export function Component() {
  return (
    <div className="code-layout">
      <nav className="page">
        <NavLink to="/code" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/code/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/code/new" className="create">
          + New code snippet
        </NavLink>
        <span className="divider" />
        <input
          type="search"
          name="keyword"
          placeholder="Search code snippets"
        />
      </nav>

      <Outlet />
    </div>
  )
}
