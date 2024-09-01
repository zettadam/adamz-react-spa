import { NavLink, Outlet } from 'react-router-dom'

import './posts-layout.css'

export default function PostsLayout() {
  return (
    <div className="posts-layout">
      <nav className="page">
        <NavLink to="/posts" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/posts/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/posts/new" className="create">
          + New post
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search posts" />
      </nav>
      <Outlet />
    </div>
  )
}
