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
              <NavLink
                to="https://drive.google.com/file/d/17udxqtkXIxDTtgIb2n9_hINk04DAFlDF/view?usp=sharing"
                target="_blank"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/certificates"
                className={
                  location.pathname === "/certificates" ? "active" : ""
                }
              >
                Certificates
              </NavLink>
            </li>
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
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
