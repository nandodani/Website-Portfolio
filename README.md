# Fernando Apóstolo — nandodani.dev

My personal portfolio — a minimal, single-page site with a light/dark theme
toggle (with switch sounds), playful hover interactions, and a shortlist of my
projects.

Live at **[nandodani.dev](https://nandodani.dev)**

## ✨ Features

- **Light/dark theme** with system preference detection (`next-themes`), switch
  sound effects, and reduced-motion support
- **Micro-interactions** — hover-driven name swap, animated link reveals, and
  icon flourishes via Framer Motion
- **SEO-ready** — Open Graph/Twitter cards, sitemap, and robots.txt generated
  by Next.js metadata conventions
- **Accessible** — semantic landmarks, visible focus states, `prefers-reduced-motion`
  handling, and aria-hidden decorative elements

## 💻 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- **Styling:** Tailwind CSS 4, CSS custom properties for theming
- **Animation:** Framer Motion
- **Icons:** Lucide + Material Design Icons
- **Deployment:** Vercel

## 📁 Project Structure

```
app/
  layout.tsx            Root layout, metadata, theme provider
  page.tsx              Single-page portfolio
  globals.css           Design tokens (light/dark) + Tailwind theme
  robots.ts             Generated /robots.txt
  sitemap.ts            Generated /sitemap.xml
  opengraph-image.png   Social share card (1200×630)
components/
  contact.tsx           Footer contact links with hover icon animations
  footer.tsx            Fixed footer bar
  mode-toggle.tsx       Theme switch with sound effects
  name-hover.tsx        Name ↔ alias hover swap
  project-link.tsx      Project link with hover/focus description reveal
  ui/button.tsx         shadcn-style button primitives
  icons/                Custom light-switch SVGs
lib/
  constants.ts          Projects list
  utils.ts              cn() classname helper
providers/
  theme-provider.tsx    next-themes + Framer Motion reduced-motion config
public/                 Toggle sound effects
```

## 🚀 Getting Started

Requires Node.js 18.18+ (20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📜 Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the dev server           |
| `npm run build` | Production build (static)      |
| `npm start`     | Serve the production build     |
| `npm run lint`  | ESLint                         |

## 📦 Deployment

Deployed on **Vercel** — pushes to `main` deploy automatically.

## 📫 Contact

- Email: fernandodaniel.work@gmail.com
- LinkedIn: [linkedin.com/in/nandodani](https://www.linkedin.com/in/nandodani)
- GitHub: [@nandodani](https://github.com/nandodani)

## License

MIT — see [LICENSE](LICENSE).

---

Made with ❤️ by Fernando Apóstolo (nandodani)
