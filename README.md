# Codey — Developer Portfolio

A responsive single-page portfolio built with React 18, TypeScript, Vite, React Router and Framer Motion.

## Requirements

- Node.js 20.19+ (Node.js 22 LTS recommended)
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run build
npm run preview
```

The production build is generated in `dist/`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the project root as `./`.
4. The included `vercel.json` sets `npm run build`, the `dist` output directory, and the React Router fallback for direct page URLs.
5. Add the environment variables below in **Vercel → Project → Settings → Environment Variables** for Production (and Preview if needed).
6. Redeploy after adding or changing environment variables.

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_WHATSAPP_NUMBER` | Yes before publishing | Full international phone number with country code, digits only. Example format: `201XXXXXXXXX` (replace Xs with the real digits). |
| `VITE_CONTACT_EMAIL` | Yes before publishing | Public email shown on the Contact page and footer. |

`.env.example` is a reference only. Do not commit a real `.env` file or secrets. Vite `VITE_` variables are public and must never contain private API keys.

## Before announcing the portfolio

The original repository contains demo portfolio content. Replace and verify these items with real information:

- The sample WhatsApp number and `hello@codey.dev` email.
- The sample project names, descriptions, years, metrics and technologies in `src/data/projects.ts`.
- Skills, experience, years of experience and statistics in `src/data/about.ts` and the About page.
- Testimonials and social profile URLs in `src/data/content.ts` and `src/components/layout/Footer.tsx`.
- Service descriptions and prices in `src/data/services.ts`.
- `public/resume.pdf` with the correct CV.

Links with `example.com` are intentionally treated as unavailable previews in the project modal; replace them with real project URLs to enable the Live Preview link.

## Contact behavior

- The Contact form opens WhatsApp with the visitor's details, selected services, budget and message prefilled. The visitor must press **Send** in WhatsApp; the site does not claim that a message was delivered.
- The floating WhatsApp button opens a new chat with a short prefilled greeting.
- The email field in the FAQ section opens the visitor's email app with a draft addressed to the configured contact email. It is not an email newsletter subscription.

## Routes

- `/`
- `/services`
- `/portfolio`
- `/about`
- `/contact`
- Unknown URLs show the 404 page.

## Project structure

```text
src/
  components/
    home/       Homepage sections
    layout/     Navbar, Footer, WhatsApp button, Layout
    ui/         Reusable UI components
  config/       Public site configuration
  data/         Portfolio content
  hooks/        Reusable hooks
  pages/        Route pages
  styles/       Prototype styles and app-wide overrides
```
