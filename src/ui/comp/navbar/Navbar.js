import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Resume</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
