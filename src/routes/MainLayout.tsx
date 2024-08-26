import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'

export function MainLayout() {
  const location = useLocation()
  const section = location.pathname.split('/')[1]

  return (
    <div className="main-layout">
      <header className={section || 'home'}>
        <hgroup>
          <h1>Adam Ziolkowski</h1>
          <h2 className={section}>{section}</h2>
        </hgroup>
        <nav className="secondary">
          <menu>
            <li className="news">
              <NavLink to="/news">News</NavLink>
            </li>
            <li className="feeds">
              <NavLink to="/feeds">Feeds</NavLink>
            </li>
            <li className="auth">
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li className="about">
              <NavLink to="/about">About</NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <Outlet />

      <footer>
        <nav>
          <span>
            <NavLink to="/posts" className="posts">
              Posts
            </NavLink>
            <NavLink to="/notes" className="notes">
              Notes
            </NavLink>
            <NavLink to="/code" className="code">
              Code
            </NavLink>
          </span>
          <NavLink to="/" className="home">
            Home
          </NavLink>
          <span>
            <NavLink to="/links" className="links">
              Links
            </NavLink>
            <NavLink to="/tasks" className="tasks">
              Tasks
            </NavLink>
            <NavLink to="/calendar" className="calendar">
              Calendar
            </NavLink>
          </span>
        </nav>
      </footer>
    </div>
  )
}
