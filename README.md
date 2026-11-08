# Codey. — Developer Portfolio (Frontend)

React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router.
Frontend only: no backend, database, auth or APIs. All content is placeholder data in `src/data`.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run preview
```

## Structure
```
src/
  components/
    layout/   Navbar, Footer, Layout (+ scroll-to-top)
    home/     Hero, StatsBar, Features, WorldMap, Community, SelectedWork, Testimonials, Faq
    ui/       Reveal (scroll animation), Face, Logo, Stars, Stat
    ProjectCard, ProjectModal, PageHeader
  pages/      Home, Services, Portfolio, About, Contact, NotFound
  data/       projects, services, about, content  (edit your real content here)
  hooks/      useCountUp
  styles/     prototype.css (approved visual identity, verbatim), router.css, index.css
```

## Notes
- Routes: `/`, `/services`, `/portfolio`, `/about`, `/contact` (+ 404).
- `prototype.css` is the approved prototype stylesheet kept verbatim so the look is unchanged;
  Tailwind is configured with the same tokens (`tailwind.config.ts`, preflight disabled) and is
  ready for new components. Migrate rules to utilities gradually if you wish.
- Replace `public/resume.pdf`, name/contact details and project data with real ones.
- The contact form and newsletter field are UI-only (nothing is sent).
