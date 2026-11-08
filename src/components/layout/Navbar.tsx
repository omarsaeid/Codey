import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/content';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav id="nav" className={open ? 'open' : ''}>
      <Logo />
      <div className="links">
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end className={({ isActive }) => (isActive ? 'on' : '')}>
            {l.label}
          </NavLink>
        ))}
      </div>
      <div className="cta">
        <Link className="btn s" to="/contact">Hire Me</Link>
        <a className="btn s o" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </div>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <i></i><i></i><i></i>
      </button>
    </nav>
  );
}
