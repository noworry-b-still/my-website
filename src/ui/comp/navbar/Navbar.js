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
                to="https://docs.google.com/viewerng/viewer?url=https://storage.googleapis.com/simplify-resumes/4f864ee5-59f6-4faa-b0a2-469acb930e20/dd109dd9-67fa-4549-a09d-adeed6bd6220/1727715482.pdf?Expires%3D1728320283%26GoogleAccessId%3Dgcs-signing-service-account%2540mifflin-backend.iam.gserviceaccount.com%26Signature%3DUHuLtht9YEMZkW86VtRGx0n9d7Fpd%252BA2EJjADoesXaMvIXyg0otLemz%252Fdw%252B5LFnvB%252FUkoxXwOuJdcuycW7tTki8iYYFXp87BlitGiILlcE7Fq2oslBhVs4Yv5GihfCM9F3OQOZgx3MUDfxguS5S0X4eHxsjH%252Fhn9kSmTj3HEBMOr82v8kUfpjzvntAyvipFO5%252B0PB7t3rIZ5IfRWok7dR%252F72oZDe%252F9wIb5dJjzHya3XbyxUaJqEKtSXMwk7htgIKHBPI3QhyXQIWe4dKufjml9GJTouHiBdZGpkRWanx2Yj0iPB2emdgYjRhLNUEQeWJZ3fU2fSJ%252FpZZYdK54Ero5Q%253D%253D"
                target="_blank"
              >
                Resume
              </NavLink>
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
