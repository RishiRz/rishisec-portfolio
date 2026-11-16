import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="logo">
          <Terminal size={20} />
          <span>rishi<span className="accent">.Sec</span></span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-symbol">./</span>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;