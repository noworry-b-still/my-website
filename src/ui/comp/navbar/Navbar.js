import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Briefcase, FileText, Newspaper, Mail, Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Menu for Mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Navigation */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <Home size={20} className="icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            <Briefcase size={20} className="icon" /> Projects
          </NavLink>
        </li>
        <li>
          <a href="/data/Dinesh_Pandikona_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileText size={20} className="icon" /> Resume
          </a>
        </li>
        <li>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            <Newspaper size={20} className="icon" /> Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <Mail size={20} className="icon" /> Connect
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
