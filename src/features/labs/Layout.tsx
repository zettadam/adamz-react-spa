import { NavLink, Outlet } from 'react-router-dom'

import './labs-layout.css'

export default function LabsLayout() {
  return (
    <div className="labs-layout">
      <nav className="page">
        <NavLink to="/labs" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/labs/new" className="create">
          + New task
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search labs" />
      </nav>

      <Outlet />
    </div>
  )
}
