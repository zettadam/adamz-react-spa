import { NavLink, Outlet } from 'react-router-dom'

import './notes-layout.css'

export default function NotesLayout() {
  return (
    <div className="notes-layout">
      <nav className="page">
        <NavLink to="/notes" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/notes/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/notes/new" className="create">
          + New note
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search notes" />
      </nav>

      <Outlet />
    </div>
  )
}
