# ✨ Lucky Lorem — Realistic Developer Dummy Content Engine

![Next.js 16](https://img.shields.io/badge/Next.js-16.4.2_(Turbopack)-black?style=for-the-badge&logo=next.js&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)

> A modern, glassmorphic content generation engine engineered for developers, designers, and wireframing teams. Move past repetitive Latin filler with category-aware headlines, dynamic multi-paragraph technical prose, responsive banners, and rapid keyboard clipboard integration.

---

## 📖 Overview

Standard placeholder text like *"Lorem ipsum dolor sit amet"* often fails to represent how real typography, word lengths, and technical concepts interact with modern layouts. **Lucky Lorem** generates realistic, formatted blog articles and technical briefs tailored to specific industry contexts (Tech, AI, Automotive, and Random/Classic) with instantaneous copying and Markdown exporting.

---

## ⚡ Keyboard Shortcuts

Lucky Lorem is optimized for mouse-free, high-velocity developer workflows:

| Action | Windows / Linux | macOS | Description |
| :--- | :---: | :---: | :--- |
| **Copy Heading** | <kbd>Ctrl</kbd> + <kbd>H</kbd> | <kbd>⌘</kbd> + <kbd>H</kbd> | Copies the active category title to clipboard |
| **Copy Paragraphs** | <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> | Copies the generated body text to clipboard |
| **Alternative Heading Copy** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Secondary shortcut to avoid browser overrides |
| **Alternative Body Copy** | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> | Secondary shortcut for paragraph copy |

> **Note:** The floating dock interface automatically displays interactive visual tags (`⌘H` and `⌘C`) that reflect these bindings.

---

## 🛠️ Tech Stack & Engineering Highlights

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Pre-rendering, dynamic server streaming, and fast Turbopack bundling |
| **UI Library** | **React 19** | Component-driven architecture using client-side hooks and stores |
| **Language** | **TypeScript 5.x** | End-to-end type safety for vocabulary dictionaries and UI props |
| **Styling** | **Tailwind CSS** | Dark-mode glassmorphism (`backdrop-blur-2xl`, custom `ring`, `zinc` palette) |
| **Iconography** | **Lucide React** | Lightweight, accessible vector UI icons |
| **Dynamic Media** | **Picsum Photos API** | Category-synced responsive visual banners |
| **State Sync** | **`useSyncExternalStore`** | Zero-hydration mismatch sync for `localStorage` and dynamic clock states |

---

## 🎯 Key Features

### 1. Zero-Hydration-Mismatch Architecture
Built strictly to comply with Next.js 16 prerendering and React 19 compiler guidelines:
* Uses **`useSyncExternalStore`** to synchronize browser `localStorage` without triggering *cascading render* warnings.
* Safely isolates dynamic timing operations (`new Date()`) via client/server external snapshots, avoiding `blocking-prerender-current-time-client` routing errors.

### 2. Sticky Constrained Floating Dock
* Integrated directly into the `<article>` DOM container.
* Floats along the viewport while reading and anchors neatly at the base of the article container when reaching the end of the text.
* Features a paragraph stepper dial ($1 \to 5$ paragraphs, automatically scaling word distributions up to 500 words).

### 3. Dual-View Mode (Formatted Blog vs. Markdown)
* **Formatted Blog:** Features drop-cap styling (`first-letter:text-5xl`), category visual banners, reading time estimates ($\sim 160\text{ WPM}$), and exact word counters.
* **Markdown Export:** Instant one-click export formatted with front-matter headers, publication dates, and clean section hierarchies.

### 4. Cross-Device & Mobile-First Optimization
* Mobile-responsive layout that removes borders and outer rings on small screens (`< 768px`) for edge-to-edge reading, while restoring glassmorphic cards on tablets and desktops.
* Fully accessible network binding configuration (`0.0.0.0`) for cross-device testing across iPads, laptops, and mobile viewports.

---

## 📂 Project Structure

```text
lucky-lorem/
├── public/                      # Static assets, icons, and favicons
│   ├── icon.png                 # 64x64 custom tab favicon
│   └── favicon.ico              # Browser fallback icon
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, typography, and selection styles
│   │   ├── layout.tsx           # Shell layout & viewport theme-color metadata
│   │   └── page.tsx             # Main dashboard, article viewer & keyboard listeners
│   ├── components/
│   │   ├── BlogVisualBanner.tsx # Dynamic Picsum banner image loader
│   │   ├── FloatingDock.tsx     # Sticky floating pill stepper & copy controls
│   │   ├── Footer.tsx           # Glassmorphic responsive footer
│   │   └── SidebarNav.tsx       # Desktop & mobile category selector
│   └── lib/
│       └── vocabulary.ts        # Modular phrase generator & category dictionaries
├── next.config.ts               # Image domain whitelisting (picsum.photos)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
* **Node.js**: v18.18.0 or higher
* **npm** / **pnpm** / **yarn**

### 2. Clone & Install
```bash
# Clone the repository
git clone https://github.com/your-username/lucky-lorem.git

# Move into project directory
cd lucky-lorem

# Install project dependencies
npm install
```

### 3. Local Development (with Cross-Device Access)
To test across both your local machine and secondary devices (iPad, mobile) on the same Wi-Fi:

```bash
npm run dev -- -H 0.0.0.0
```

Open [http://localhost:3000](http://localhost:3000) on your desktop, or access `http://<YOUR_LOCAL_IP>:3000` from your mobile device.

---

## 🎨 Image Domain Configuration (`next.config.ts`)

To allow dynamic image rendering via `picsum.photos`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.