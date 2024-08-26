import { NavLink, Outlet } from 'react-router-dom'

import './tasks-layout.css'

export function Component() {
  return (
    <div className="tasks-layout">
      <nav className="page">
        <NavLink to="/tasks" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/tasks/new" className="create">
          + New task
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search tasks" />
      </nav>

      <Outlet />
    </div>
  )
}
