# Madhavi Garud — Portfolio Website

A world-class dark-themed developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## ✨ Features

- 🎨 **Dark Professional Theme** — Indigo/Violet/Purple gradient accents
- 🌊 **Matrix Code Rain** — Animated canvas hero background
- 🎬 **Framer Motion** — Smooth entrance animations on every section
- 📱 **Mobile First** — Fully responsive on all screen sizes
- ⚡ **Scroll Progress Bar** — Fixed gradient bar at the top
- 🖱️ **Animated Cursor** — Subtle indigo cursor (desktop only)
- ⏱️ **Loading Screen** — Branded intro animation
- 🔢 **Animated Counters** — Stats count up on scroll into view
- 🔍 **Project Filtering** — Filter by Web / Mobile / DSA
- 📧 **EmailJS Contact** — Real email delivery from the contact form
- 🧩 **Glassmorphism Cards** — Premium frosted glass card style
- ♿ **Accessible** — Semantic HTML, aria labels, keyboard-friendly

---

## 📁 Project Structure

```
madhavi-portfolio/
├── public/
│   └── Madhavi_Garud_Resume.pdf    ← Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Competitive.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Achievements.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── SectionDivider.jsx
│   │   │   └── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingScreen.jsx
│   ├── data/
│   │   └── portfolioData.js        ← Edit ALL content here
│   ├── hooks/
│   │   └── usePortfolio.js
│   ├── utils/
│   │   └── animations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✏️ Customizing Content

All personal data is in one file — **`src/data/portfolioData.js`**

Just update:
- `personal` — name, email, phone, LinkedIn, GitHub
- `stats` — experience, projects, users
- `skills` — add/remove skill categories and items
- `experience` — company, role, achievements
- `projects` — title, description, tech, links
- `education` — degrees and institutions
- `achievements` — icons, titles, descriptions

---

## 📧 Setting Up EmailJS (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com/) (free tier = 200 emails/month)

2. Create a **Service** (Gmail, Outlook, etc.)

3. Create an **Email Template** with these variables:
   ```
   From: {{name}} <{{email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```

4. Open `src/components/sections/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
   ```

---

## 📄 Adding Your Resume

Place your resume PDF at:
```
public/Madhavi_Garud_Resume.pdf
```

The **"Download Resume"** button in the hero already links to `/Madhavi_Garud_Resume.pdf`.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

Preview production build locally:
```bash
npm run preview
```

---

## 🚢 Deploy to Vercel (Recommended — Free)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done — your site is live in ~60 seconds.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default (Vercel auto-detects Vite)
5. Click **Deploy**

Your site will be at `https://your-project.vercel.app`

### Option C — Netlify

```bash
npm run build
# Drag & drop the dist/ folder at netlify.com/drop
```

---

## 🎨 Customizing the Theme

Edit CSS variables in `src/index.css`:

```css
:root {
  --indigo:  #6366f1;   /* primary brand color */
  --violet:  #818cf8;   /* secondary / hover */
  --purple:  #c084fc;   /* accent / gradient end */
  --bg-primary: #08080f;
}
```

Adjust Tailwind gradient in `tailwind.config.js`:
```js
'brand-gradient': 'linear-gradient(135deg, #6366f1, #c084fc)',
```

---

## 🔧 Adding New Projects

In `portfolioData.js`, add to the `projects` array:

```js
{
  title: 'My New Project',
  emoji: '🚀',
  colorClass: 'lms',           // lms | gym | knap (controls preview gradient)
  description: 'Short description...',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://myproject.com',
  features: ['Feature 1', 'Feature 2'],
}
```

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Utility styling |
| Framer Motion | 11 | Animations |
| React Icons | 5 | Icon library |
| @emailjs/browser | 4 | Contact form emails |

---

## 📄 License

MIT — free to use and modify for personal portfolios.
