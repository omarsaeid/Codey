import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const social = [
  { label: 'in', href: 'https://www.linkedin.com', name: 'LinkedIn' },
  { label: 'f', href: 'https://www.facebook.com', name: 'Facebook' },
  { label: 't', href: 'https://x.com', name: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer>
      <div className="fg">
        <div>
          <Logo color="#fff" />
          <p>I always make my clients happy by providing as many choices as possible.</p>
        </div>
        <div>
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link to="/portfolio">Events</Link>
          <Link to="/services">Promo</Link>
          <Link to="/contact">Req Demo</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/contact">Account</Link>
          <Link to="/contact">Support Center</Link>
          <Link to="/contact">Feedback</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
        <div>
          <h4>Contact Info</h4>
          <a href="mailto:hello@codey.dev">hello@codey.dev</a>
          <div className="sc">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} style={{ margin: 0, opacity: 1 }}>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="cp">Copyright © 2026 Codey. All rights reserved.</div>
    </footer>
  );
}
