import { NavLink, Outlet } from 'react-router-dom'

import './events-layout.css'

export default function EventsLayout() {
  return (
    <div className="events-layout">
      <nav className="page">
        <NavLink to="/events" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/events/new" className="create">
          + New event
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search events" />
      </nav>

      <Outlet />
    </div>
  )
}
