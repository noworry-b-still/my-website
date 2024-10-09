import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <div className="menu list_style_none">
            <li>
              <NavLink
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={location.pathname === "/projects" ? "active" : ""}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <a
                href="/data/Dinesh_Pandikona_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            {/* <li>
              <NavLink
                to="/certificates"
                className={
                  location.pathname === "/certificates" ? "active" : ""
                }
              >
                Certificates
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Connect
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
