# Portfolio — Selim Coskunuzer

Personal portfolio site built around a scroll-driven 3D neural-network visual, with sections for
profile, work experience, and contact.

## Tech stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/) / [Drei](https://github.com/pmndrs/drei) / [Three.js](https://threejs.org/) — the 3D hero model and its scroll-linked animation
- [Motion](https://motion.dev/) — timeline scroll/reveal animations
- [EmailJS](https://www.emailjs.com/) — sends the contact form without a backend

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run eslint
```

## Project structure

```
src/
  components/   # 3D car/network model, timeline, nav spine, shared UI bits
  sections/     # top-level page sections (Navbar, Hero, About, Experiences, Contact, Footer)
  constants/    # experience/project/social data
  hook/         # scroll-progress and active-section hooks
  utils/        # spine-nav scroll math
public/
  assets/       # images, logos, embedded artifacts (PDFs/HTML)
  models/       # the .glb model used by the hero
  terms.html, privacy.html   # static legal pages, not part of the React app
```

## Notes

- The contact form's EmailJS service/template/public key are set directly in
  `src/sections/Contact.jsx` (EmailJS public keys are meant to be client-side, so this is normal —
  just update them there if the EmailJS service changes).
- Work experience entries (including their linked artifacts — embedded PDFs, embedded sites, or
  simple link-out cards) live in `src/constants/index.js`.
