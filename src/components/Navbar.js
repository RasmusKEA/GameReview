import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        RateGame
      </Link>
      <ul>
        <CustomLink href="/profile">Profile</CustomLink>
        <CustomLink href="/login">Login</CustomLink>
        <CustomLink href="/logout">Log out</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={href} {...props}>
        {children}
      </Link>
    </li>
  );
}
