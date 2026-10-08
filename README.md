# Abdirahman Mohamed Abdirahman — Portfolio

Personal single-page portfolio for **Abdirahman Mohamed Abdirahman** — Front-End Developer, 3rd-year Computer Application student at Jamhuriya University of Science and Technology.

- **Email:** teyteyley3@gmail.com
- **Phone:** +252 615464136
- **GitHub:** https://github.com/Maamaanka12
- **Resume:** `public/Abdirahman_Mohamed_Abdirahman_Software_Engineer_CV.pdf` (opened by the hero "View Resume" button)

## Tech stack

- React 19 + Vite 8
- Tailwind CSS 4
- Framer Motion + AOS (animations)
- simple-icons (brand icons)
- No backend, no database — pure static SPA

## Sections

Preloader → Navbar → Hero (photo TV + typewriter title) → About → Technical Skills → Services/Process → Projects → Internships → Leadership → Soft Skills → Contact (form) → Footer

## Getting started

**Requirements:** Node.js ^20.19 or >=22.12 (Node 24 works), npm.

```bash
npm install        # not "npm ci" — package-lock.json is out of sync
npm run dev        # dev server → http://localhost:5173 (hot reload)
npm run build      # production build → dist/
npm run preview    # serve the build locally
npm run lint       # ESLint
```

## Project structure

```
src/
  components/    Hero, About, Projects, Content (contact), Footer, ...
  data/          portfolioData.js  ← ALL site content lives here
  assets/        hero/hero.jpg, about/me.jpg, project images
public/          CV PDF, favicon, icons
index.html       title, SEO meta, Google Font
dist/            build output (git-ignored)
```

## Editing content

Everything text-based — name, bio, rotating hero titles, skills, projects, experience, certifications, social links — is in **`src/data/portfolioData.js`**. Components only read from it, so no JSX editing is needed for content changes.

- **Photos:** replace `src/assets/hero/hero.jpg` (hero TV, ideal ratio 4:3) or `src/assets/about/me.jpg`
- **Resume:** drop a new PDF with the same filename into `public/`
- **SEO:** edit `<title>` / meta in `index.html`

## Contact form

The form opens the visitor's mail client (mailto: `teyteyley3@gmail.com`) — no API keys required. `VITE_EMAILJS_*` variables exist in `portfolioData.js` but EmailJS is optional.

## CV files

The resume the site serves is **`public/Abdirahman_Mohamed_Abdirahman_Software_Engineer_CV.pdf`** (used by the "View Resume" button).

Source copies in the project **root**:

- `Abdirahman_Mohamed_Abdirahman_Software_Engineer_CV.pdf`

Other originals live in **`Desktop\CV\`**: `…Software_Engineer_CV.docx` / `.html`, `Abdirahman_Mohamed_Abdirahman_CV.docx`, `Abdirahman_Mohamed_Abdirahman_AI_Internship_CV.pdf`, and `abdirahman_portfolio_information.txt`.
