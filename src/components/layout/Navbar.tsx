import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/content';
import Logo from '../ui/Logo';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const saved = window.localStorage.getItem('codey-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Storage can be unavailable in private browsing; use the system setting.
  }

  const prefersDark = typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0b1220' : '#f5f8ff',
    );
    try {
      window.localStorage.setItem('codey-theme', theme);
    } catch {
      // The selected theme still works for the current page if storage is blocked.
    }
  }, [theme]);

  return (
    <nav id="nav" className={open ? 'open' : ''} aria-label="Main navigation">
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
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        aria-pressed={theme === 'dark'}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
      </button>
      <button className="burger" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <i></i><i></i><i></i>
      </button>
    </nav>
  );
}
