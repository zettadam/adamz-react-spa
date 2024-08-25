import { NavLink, Outlet } from "react-router-dom";

import "./calendar-layout.css";

export function Layout() {
  return (
    <div className="calendar-layout">
      <nav className="page">
        <NavLink to="/calendar" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/calendar/new" className="create">
          + New event
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search calendar" />
      </nav>
      <Outlet />
    </div>
  );
}
