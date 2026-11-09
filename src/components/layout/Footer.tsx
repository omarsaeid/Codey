import { Link } from 'react-router-dom';
import { contactEmail } from '../../config/site';
import { navLinks } from '../../data/content';
import { useLang } from '../../i18n/LanguageContext';
import Logo from '../ui/Logo';

// Replace these with your real profile URLs before publishing.
const social = [
  { label: 'in', href: 'https://www.linkedin.com', name: 'LinkedIn' },
  { label: 'f', href: 'https://www.facebook.com', name: 'Facebook' },
  { label: 't', href: 'https://x.com', name: 'X / Twitter' },
];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer>
      <div className="fg">
        <div>
          <Logo color="#fff" />
          <p>{f.tagline}</p>
        </div>
        <div>
          <h4>{f.pages}</h4>
          {navLinks.map((l) => <Link key={l.to} to={l.to}>{t.nav[l.key]}</Link>)}
        </div>
        <div>
          <h4>{f.work}</h4>
          <Link to="/portfolio">{f.caseStudies}</Link>
          <Link to="/services">{f.pricing}</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">{f.resume}</a>
        </div>
        <div>
          <h4>{f.touch}</h4>
          <Link to="/contact">{f.start}</Link>
          <Link to="/contact">{f.call}</Link>
          <Link to="/contact">{f.contactMe}</Link>
        </div>
        <div>
          <h4>{f.info}</h4>
          <a href={`mailto:${contactEmail}`} dir="ltr">{contactEmail}</a>
          <div className="sc">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} style={{ margin: 0, opacity: 1 }}>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="cp">{f.rights}</div>
    </footer>
  );
}
