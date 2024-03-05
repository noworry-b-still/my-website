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
              <a href="https://storage.googleapis.com/simplify-resumes/4f864ee5-59f6-4faa-b0a2-469acb930e20/1708991553.pdf">
                Resume
              </a>
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
