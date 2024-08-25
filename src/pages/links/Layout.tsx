import { NavLink, Outlet } from "react-router-dom";

import "./links-layout.css";

export function Layout() {
  return (
    <div className="links-layout">
      <nav className="page">
        <NavLink to="/links" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/links/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/links/new" className="create">
          + New link
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search links" />
      </nav>

      <Outlet />
    </div>
  );
}
