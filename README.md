# Senthil Kumar — Portfolio Website

A modern, high-performance portfolio website built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS** for **Senthil Kumar**, Full Stack Developer.

Converted and upgraded from the original static HTML/CSS/JS version with enhanced interactivity, dark mode support, reactive forms, dynamic experience calculation, and modern responsive components.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Export enabled)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: Space Grotesk
- **Form Submission**: [Web3Forms](https://web3forms.com/) API Integration

---

## 📁 Project Architecture

```
Portfolio/
├── app/                      # Next.js App Router
│   ├── globals.css           # Global Tailwind styling, theme rules & custom scrollbar
│   ├── layout.tsx            # Root layout with metadata and OpenGraph configuration
│   ├── not-found.tsx         # Custom 404 page
│   └── page.tsx              # Main homepage composing all sections and modals
├── components/               # Modular UI components
│   ├── Navbar.tsx            # Sticky navigation, mobile drawer, and dark/light mode toggle
│   ├── Hero.tsx              # Hero section with dynamic years-of-experience counter
│   ├── About.tsx             # Professional bio, LinkedIn link, and categorized skills
│   ├── Qualification.tsx     # Interactive tabs for Experience and Education timeline
│   ├── Projects.tsx          # Featured showcase cards with tags and links
│   ├── Testimonials.tsx      # Testimonials carousel with colleague reviews
│   ├── Contact.tsx           # Contact details and direct Web3Forms message form
│   ├── ContactModal.tsx      # Quick modal contact form triggered by CTAs
│   ├── ResumeModal.tsx       # Download and preview modal for Senthil's CV
│   └── Footer.tsx            # Social links, contact channels, and copyright notice
├── data/
│   └── portfolio.ts          # Centralized typed data file for easily updating info
├── public/
│   └── assets/               # Images and PDF resume files
├── out/                      # Production-ready static export output
├── next.config.mjs           # Next.js configuration (static export, unoptimized images)
├── tailwind.config.ts        # Tailwind theme colors and font configuration
├── tsconfig.json             # TypeScript compiler settings
└── package.json              # Project scripts and dependencies
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This generates a fully optimized, production-ready static export in the `out/` directory.

---

## ⚙️ Content Customization

All personal details, skills, experience, education, projects, and social links are centrally stored in `data/portfolio.ts`. You can update your text, add new projects, or modify contact information directly in that file without having to touch UI components.

---

## 🌐 Deployment

The project is configured with `output: "export"`, making it ready to deploy instantly to:
- **Vercel** (`npx vercel` or git import)
- **GitHub Pages**
- **Netlify**
- **Cloudflare Pages**
- Any static hosting provider
