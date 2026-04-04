# Arpit Gupta — Portfolio

A modern, warm-toned personal portfolio built with **React**, **Vite**, and **TailwindCSS**.

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/arpitguptagithub/myportfolio.git
cd myportfolio

# Install & run
./deploy.sh setup
./deploy.sh dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Deploy Script

All commands are managed through `deploy.sh`:

| Command | Description |
|---------|-------------|
| `./deploy.sh setup` | Install npm dependencies (`npm ci`) |
| `./deploy.sh dev` | Start Vite dev server with hot reload |
| `./deploy.sh build` | Build production bundle to `dist/` |
| `./deploy.sh preview` | Preview production build locally |
| `./deploy.sh deploy` | Build & deploy to GitHub Pages |
| `./deploy.sh docker` | Build & run with Docker Compose |
| `./deploy.sh docker-stop` | Stop Docker container |
| `./deploy.sh clean` | Remove `dist/` and `node_modules/` |

---

## 🐳 Docker

Build and run the entire site in a container:

```bash
# Start (builds automatically)
./deploy.sh docker

# Access at http://localhost:3000

# Stop
./deploy.sh docker-stop
```

Or use docker-compose directly:

```bash
docker compose up --build -d
docker compose down
```

The Docker setup uses a multi-stage build:
1. **Build stage** — Node.js 20 builds the Vite bundle
2. **Serve stage** — Nginx Alpine serves static files with gzip + caching

---

## 🏗️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: TailwindCSS 3 with custom warm palette
- **Typography**: Space Grotesk (headings) + Inter (body) via Google Fonts
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (`gh-pages`)
- **Container**: Docker + Nginx

---

## 📁 Project Structure

```
myportfolio/
├── public/             # Static assets (profile photo, favicon)
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Skills.jsx
│   │   ├── Hobbies.jsx      # Writing & Interests section
│   │   ├── Footer.jsx
│   │   ├── ScrollReveal.jsx  # Scroll animation wrapper
│   │   └── IntroOverlay.jsx  # Intro blast animation
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css       # Global styles + design system
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── deploy.sh           # Build & deploy helper
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design

- **Palette**: Warm dark (charcoal base, amber/cream accents, sage secondary)
- **Animations**: Scroll-triggered fade-ups via Intersection Observer
- **Intro**: Letter-by-letter name reveal → blast outward → site fades in
- **Mobile**: Fully responsive with hamburger navigation
- **Texture**: Subtle film grain overlay for warmth

---

## 📝 Updating Content

All content data lives directly in the component files:

| Section | File | What to edit |
|---------|------|-------------|
| Experience | `src/components/Experience.jsx` | `EXPERIENCES` array |
| Projects | `src/components/Projects.jsx` | `PROJECTS` array |
| Achievements | `src/components/Achievements.jsx` | `ACHIEVEMENTS` array |
| Skills | `src/components/Skills.jsx` | `CATEGORIES` array |
| Writing | `src/components/Hobbies.jsx` | `BLOGS` array |

---

## 📄 License

MIT
