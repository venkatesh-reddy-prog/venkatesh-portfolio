# 🚀 B. Venkatesh Reddy — Portfolio Website

A production-grade, interactive portfolio built with **React 18**, **Tailwind CSS 3**, and **Vanilla JS Canvas API**.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Styling | Tailwind CSS 3 |
| Language | JavaScript (ES6+) |
| Animations | CSS Keyframes + IntersectionObserver |
| Background | HTML5 Canvas (Particle Network) |
| Icons | Lucide React |
| Fonts | Google Fonts (Syne, DM Mono, Instrument Serif) |
| Build Tool | Create React App |

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v16 or higher) — https://nodejs.org
   - To check: open a terminal and type `node --version`
2. **npm** (comes with Node.js)
   - To check: `npm --version`
3. **VS Code** — https://code.visualstudio.com

---

## 📦 Setup & Run in VS Code

### Step 1 — Open the project folder

1. Unzip the downloaded `venkatesh-portfolio.zip` file
2. Open **VS Code**
3. Go to **File → Open Folder**
4. Select the unzipped `venkatesh-portfolio` folder
5. Click **Open**

---

### Step 2 — Open the terminal in VS Code

- Press `` Ctrl + ` `` (backtick) on Windows/Linux
- Press `` Cmd + ` `` on Mac
- Or go to **Terminal → New Terminal** from the top menu

---

### Step 3 — Install dependencies

In the terminal, type:

```bash
npm install
```

This will download all required packages into a `node_modules/` folder.
It may take 1–2 minutes the first time.

---

### Step 4 — Start the development server

```bash
npm start
```

Your browser will automatically open at **http://localhost:3000**

The page hot-reloads whenever you save a file — no need to restart.

---

## 📁 Project Structure

```
venkatesh-portfolio/
├── public/
│   └── index.html           ← HTML shell, Google Fonts loaded here
├── src/
│   ├── components/
│   │   ├── Cursor.jsx        ← Custom animated cursor
│   │   ├── ParticleCanvas.jsx← Animated canvas background
│   │   ├── Navbar.jsx        ← Sticky nav with active link tracking
│   │   ├── Hero.jsx          ← Hero section with typing + glitch effect
│   │   ├── About.jsx         ← About section
│   │   ├── Education.jsx     ← Education cards
│   │   ├── Experience.jsx    ← Work experience timeline
│   │   ├── Projects.jsx      ← Project cards grid
│   │   ├── Skills.jsx        ← Tabbed full-stack skills + proficiency bars
│   │   ├── Profiles.jsx      ← LeetCode / HackerRank / CodeChef / GitHub
│   │   ├── Achievements.jsx  ← Patent, publication, certifications
│   │   ├── Contact.jsx       ← Contact links section
│   │   └── useReveal.jsx     ← Scroll-reveal hook & component
│   ├── data/
│   │   └── portfolio.js      ← ⭐ ALL your content lives here — edit this!
│   ├── App.jsx               ← Root component, assembles all sections
│   ├── index.js              ← React entry point
│   └── index.css             ← Tailwind imports + custom CSS
├── tailwind.config.js        ← Tailwind theme (colors, fonts, animations)
├── postcss.config.js
└── package.json
```

---

## ✏️ How to Customize

All your personal content lives in **one file**:

```
src/data/portfolio.js
```

Edit this file to update:
- Your name, bio, contact details
- Work experience bullet points
- Project descriptions and GitHub links
- Skills and proficiency percentages
- Achievements and certifications
- Coding profile links (LeetCode, HackerRank, etc.)

---

## 🏗 Build for Production

To create a production-ready build:

```bash
npm run build
```

This creates a `build/` folder with optimized static files.

---

## 🌐 Deploy for Free

### Option 1 — Netlify (Easiest, 2 minutes)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag & drop the `build/` folder
4. Get a live URL instantly ✅

### Option 2 — Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in the project folder
3. Follow the prompts

### Option 3 — GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json`: `"homepage": "https://venkatesh-reddy-prog.github.io/portfolio"`
3. Add scripts: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

---

## 🎨 Recommended VS Code Extensions

Install these for the best development experience:

- **ES7+ React/Redux/React-Native snippets** — faster React component creation
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **Prettier** — auto-format code on save
- **Auto Rename Tag** — renames paired HTML/JSX tags together

---

## 🐛 Troubleshooting

| Problem | Solution |
|---|---|
| `npm install` fails | Make sure Node.js v16+ is installed |
| Port 3000 already in use | Type `Y` when asked to use another port, or kill the other process |
| Styles not applying | Make sure `tailwind.config.js` content paths include `./src/**/*.{js,jsx}` |
| Fonts not loading | Check your internet connection (fonts load from Google Fonts CDN) |
| `Module not found` error | Run `npm install` again — a package may be missing |

---

## 📄 License

MIT — Free to use and customize.
