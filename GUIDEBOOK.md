# Complete Beginner's Guidebook
## Build & Deploy a Professional Creative Studio Website
### No Coding Experience Required

---

> **What you will build:** A fully animated, mobile-responsive creative agency website with scroll animations, stacking cards, 3D testimonials, legal pages, and live deployment — exactly like the one at [https://designer-jade-gamma.vercel.app](https://designer-jade-gamma.vercel.app)

> **Note on the Master Prompt:** This prompt encodes every revision, correction, and pixel-level decision made during the original build. If you give it to Claude Code exactly as written, you should not need any follow-up corrections.

---

## TABLE OF CONTENTS

1. [What You Need Before Starting](#1-what-you-need-before-starting)
2. [Install Node.js](#2-install-nodejs)
3. [Install Git](#3-install-git)
4. [Install VS Code](#4-install-vs-code)
5. [Install Claude Code CLI](#5-install-claude-code-cli)
6. [Create Accounts](#6-create-accounts)
7. [Create the Project](#7-create-the-project)
8. [The Master Prompt — Build the Entire Website](#8-the-master-prompt)
9. [Run the Website on Your Computer](#9-run-the-website-locally)
10. [Push Code to GitHub](#10-push-code-to-github)
11. [Deploy to Vercel (Free)](#11-deploy-to-vercel)
12. [Connect Your Own Domain](#12-connect-your-own-domain)
13. [Deploy to Other Free Hosting Platforms](#13-other-hosting-platforms)
14. [Making Changes After Deployment](#14-making-changes-after-deployment)
15. [Troubleshooting Common Problems](#15-troubleshooting)

---

## 1. WHAT YOU NEED BEFORE STARTING

### Computer Requirements
- Windows 10/11, macOS 12+, or Ubuntu 20+ Linux
- At least 4 GB RAM (8 GB recommended)
- At least 5 GB free disk space
- A stable internet connection

### Accounts You Will Need (all free)
| Account | Website | Cost |
|---------|---------|------|
| Anthropic (Claude AI) | claude.ai | Free |
| GitHub | github.com | Free |
| Vercel | vercel.com | Free |

### Software You Will Install
| Software | What It Does |
|----------|-------------|
| Node.js | Runs JavaScript on your computer |
| Git | Saves and uploads your code |
| VS Code | Where you view and edit code |
| Claude Code | AI that writes all the code for you |

---

## 2. INSTALL NODE.JS

Node.js lets your computer run the website locally before going live.

### Windows
1. Go to **[nodejs.org](https://nodejs.org)**
2. Click the big green button that says **"LTS"** (Long Term Support) — do NOT click "Current"
3. The download starts automatically (file name like `node-v20.x.x-x64.msi`)
4. Open the downloaded file
5. Click **Next** → **Next** → **Next** → **Install** → **Finish** (accept all defaults)
6. **Verify it worked:** Open the Start menu, search for **PowerShell**, open it, type this and press Enter:
   ```
   node --version
   ```
   You should see something like `v20.15.0` — that means it worked ✓

### macOS
1. Go to **[nodejs.org](https://nodejs.org)**
2. Click the **LTS** button to download
3. Open the `.pkg` file that downloads
4. Click **Continue** → **Continue** → **Install**
5. **Verify:** Open **Terminal** (search "Terminal" in Spotlight), type:
   ```
   node --version
   ```
   Should show `v20.x.x` ✓

---

## 3. INSTALL GIT

Git saves your code and uploads it to GitHub.

### Windows
1. Go to **[git-scm.com/download/win](https://git-scm.com/download/win)**
2. Click **"Click here to download"** — the download starts automatically
3. Open the `.exe` file
4. Click **Next** through all screens — **do not change anything**, just keep clicking Next
5. Click **Install** then **Finish**
6. **Verify:** Open PowerShell, type:
   ```
   git --version
   ```
   Should show `git version 2.x.x` ✓

7. **Set your name and email** (Git needs this — use your real name and email):
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

### macOS
1. Open **Terminal**
2. Type `git --version` and press Enter
3. If Git isn't installed, macOS will automatically offer to install it — click **Install**
4. After it finishes, set your name and email:
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

---

## 4. INSTALL VS CODE

VS Code is a free code editor — you'll use it to view your project files and run the terminal.

### Windows & macOS
1. Go to **[code.visualstudio.com](https://code.visualstudio.com)**
2. Click the big blue **Download** button
3. Open the downloaded file and follow the installer
4. On Windows: tick **"Add to PATH"** and **"Open with Code"** options when they appear
5. Open VS Code — you should see a welcome screen ✓

---

## 5. INSTALL CLAUDE CODE CLI

Claude Code is the AI tool that will write all the code for you. You type instructions in plain English and it builds the website.

### Step 1 — Get an Anthropic API Key
1. Go to **[console.anthropic.com](https://console.anthropic.com)**
2. Sign up with your email (or log in)
3. Click **"API Keys"** in the left sidebar
4. Click **"Create Key"**
5. Give it a name like `my-website-key`
6. Copy the key — it starts with `sk-ant-...` — **save this somewhere safe, you only see it once**
7. You will need to add credits — go to **Billing** and add at least $5 (building this project costs approximately $1–3)

### Step 2 — Install Claude Code
1. Open **PowerShell** (Windows) or **Terminal** (Mac)
2. Type this and press Enter:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
3. Wait for it to finish (takes 1–2 minutes)
4. **Verify:**
   ```
   claude --version
   ```
   Should show a version number ✓

### Step 3 — Log in to Claude Code
1. In the same terminal, type:
   ```
   claude
   ```
2. It will ask for your API key — paste the `sk-ant-...` key you copied earlier
3. Press Enter — you are now logged in ✓
4. Type `/exit` or press `Ctrl+C` to close Claude for now

---

## 6. CREATE ACCOUNTS

### Create a GitHub Account
1. Go to **[github.com](https://github.com)**
2. Click **Sign up**
3. Enter your email, create a password, choose a username
4. Verify your email
5. Choose the **Free** plan ✓

### Create a Vercel Account
1. Go to **[vercel.com](https://vercel.com)**
2. Click **Sign Up**
3. Choose **"Continue with GitHub"** — this links Vercel to GitHub automatically ✓

---

## 7. CREATE THE PROJECT

### Step 1 — Create a folder for your project
Create a folder on your Desktop called `my-studio`

### Step 2 — Open it in VS Code
1. Open VS Code
2. Click **File** → **Open Folder**
3. Select the `my-studio` folder you just created
4. Click **Open**

### Step 3 — Open the terminal inside VS Code
In VS Code, click **Terminal** (top menu) → **New Terminal**. A black panel opens at the bottom.

### Step 4 — Create the Next.js project
Copy and paste this command into the terminal and press Enter:
```
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```
When it asks questions, press **Enter** for all of them (accept defaults). Wait 2–3 minutes.

### Step 5 — Install the animation libraries
```
npm install gsap @studio-freight/lenis
```

---

## 8. THE MASTER PROMPT

This is the complete prompt you give to Claude Code to build the entire website. Every revision, correction, pixel value, and responsive fix has been encoded into this prompt so the result is correct on the first build.

### How to use the Master Prompt

1. In VS Code terminal, type:
   ```
   claude
   ```
2. Claude Code opens in your terminal
3. **Copy the entire Master Prompt below** (everything between the two `---` lines) and paste it into Claude Code
4. Press Enter and wait — Claude will build everything automatically (takes 15–25 minutes)
5. If Claude pauses and shows a `>` prompt, type `continue` and press Enter

---

### ★ MASTER PROMPT — Copy Everything Between the Lines ★

---

```
Build me a complete professional creative studio website called "CODEAI Studio" using Next.js 15, TypeScript, and Tailwind CSS. Use GSAP for all scroll animations and @studio-freight/lenis for smooth scrolling.

This prompt is precise and complete. Do NOT make assumptions or simplify any section — implement every detail exactly as described.

═══════════════════════════════════════════════════════
PART 1 — DESIGN SYSTEM & GLOBAL STYLES
(app/globals.css + app/layout.tsx)
═══════════════════════════════════════════════════════

── FONTS ──
In app/layout.tsx, load these Google fonts using next/font/google:
- Inter: variable '--font-inter', preload, subsets ['latin']
- Inter_Tight: variable '--font-inter-tight', weights [300,400,500,600,700,800,900], preload, subsets ['latin']
Apply both font variables as className on the <html> element.

── CSS VARIABLES in :root ──
--color-bg: #FFFFFF
--color-surface: #F5F5F5
--color-fg: #111111
--color-muted: #777777
--color-border: rgba(17,17,17,0.08)
--color-border-strong: rgba(17,17,17,0.14)
--color-accent: #C82A2A
--color-accent-dark: #A82222
--font-sans: var(--font-inter), system-ui, sans-serif
--font-tight: var(--font-inter-tight), system-ui, sans-serif
--ease-expo: cubic-bezier(0.16, 1, 0.3, 1)
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)
--ease-in-expo: cubic-bezier(0.7, 0, 0.84, 0)
--ease-inout: cubic-bezier(0.87, 0, 0.13, 1)
--nav-h: 72px
--container-px: clamp(24px, 3vw, 43px)

── BASE RESET ──
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  background-color: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
  overflow-x: clip;
  scroll-behavior: auto;
}
body {
  background-color: var(--color-bg);
  color: var(--color-fg);
  cursor: none;
  overflow-x: clip;
  min-height: 100svh;
  position: relative;
}
h1,h2,h3,h4,h5,h6 { font-family: var(--font-tight); font-weight: 500; letter-spacing: normal; line-height: 1.2; }
p { font-family: var(--font-sans); font-weight: 400; line-height: 1.7; }
a { color: inherit; text-decoration: none; }
img, video { display: block; max-width: 100%; }
button { border: none; background: none; cursor: none; font-family: inherit; }

── SCROLLBAR ──
::-webkit-scrollbar { width: 2px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(17,17,17,0.15); border-radius: 2px; }

── SELECTION ──
::selection { background-color: var(--color-fg); color: var(--color-bg); }

── LENIS ──
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: hidden; }

── CUSTOM CURSOR ──
.cursor-dot {
  position: fixed; top: 0; left: 0;
  width: 6px; height: 6px;
  background: var(--color-fg);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  will-change: transform;
  transition: background 0.3s ease;
}
.cursor-dot.is-dark { background: #FFFFFF; }
.cursor-ring {
  position: fixed; top: 0; left: 0;
  width: 32px; height: 32px;
  border: 1px solid rgba(17,17,17,0.45);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  will-change: transform;
  transition:
    width 0.45s var(--ease-expo),
    height 0.45s var(--ease-expo),
    background 0.3s ease,
    border-color 0.3s ease;
}
.cursor-ring.is-hovering { width: 56px; height: 56px; background: rgba(17,17,17,0.05); border-color: rgba(17,17,17,0.12); }
.cursor-ring.is-dark { border-color: rgba(255,255,255,0.45); }
.cursor-ring.is-dark.is-hovering { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.22); }
.cursor-ring.is-clicking { width: 20px; height: 20px; background: rgba(17,17,17,0.08); }
.cursor-ring.is-dark.is-clicking { background: rgba(255,255,255,0.12); }

── LAYOUT UTILITIES ──
.container-fluid { width: 100%; max-width: 1440px; margin: 0 auto; padding-left: var(--container-px); padding-right: var(--container-px); }
.section-pad { padding-top: clamp(80px, 10vw, 160px); padding-bottom: clamp(80px, 10vw, 160px); }
.section-label {
  display: inline-flex; align-items: center; gap: 10px;
  margin-bottom: clamp(32px, 4vw, 56px);
  font-family: var(--font-sans); font-size: 0.875rem; font-weight: 500;
  color: rgba(17,17,17,0.45); letter-spacing: 0.01em;
}
.section-label.label-light { color: rgba(255,255,255,0.45); }

── LINE REVEAL ──
.line-mask { overflow: hidden; display: block; padding-bottom: 0.04em; }
.line-inner { display: block; will-change: transform; }

── MARQUEE KEYFRAMES ──
.marquee-track { display: flex; white-space: nowrap; will-change: transform; }
@keyframes marquee-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.animate-marquee-fwd { animation: marquee-fwd 32s linear infinite; }
.animate-marquee-rev { animation: marquee-rev 32s linear infinite; }

── BUTTONS ──
.btn-red {
  display: inline-flex; align-items: center; justify-content: center;
  background: #C82A2A; color: #FFFFFF;
  border-radius: 1000px; padding: 18px 32px;
  font-family: var(--font-tight); font-weight: 500; font-size: 1.08rem;
  transition: background 0.3s ease; cursor: none;
}
.btn-red:hover { background: #A82222; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 10px;
  background: var(--color-fg); color: var(--color-bg);
  border-radius: 100px; padding: 14px 28px;
  font-family: var(--font-tight); font-weight: 500; font-size: 0.875rem;
  letter-spacing: 0.01em;
  transition: background 0.3s ease, transform 0.4s var(--ease-expo);
}
.btn-primary:hover { background: #222; transform: scale(1.03); }
.btn-outline {
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: var(--color-fg);
  border: 1px solid var(--color-border-strong);
  border-radius: 100px; padding: 13px 28px;
  font-family: var(--font-tight); font-weight: 500; font-size: 0.875rem;
  transition: border-color 0.3s ease, transform 0.4s var(--ease-expo);
}
.btn-outline:hover { border-color: var(--color-fg); transform: scale(1.03); }

── PROJECT CARD ──
.project-card { position: relative; overflow: hidden; }
.project-card-img { will-change: transform; transition: transform 0.9s var(--ease-expo); }
.project-card:hover .project-card-img { transform: scale(1.04); }

── HORIZONTAL SCROLL ──
.h-scroll-section { overflow: hidden; }
.h-scroll-track { display: flex; will-change: transform; }

── TESTIMONIAL CARD ──
.testi-card { flex-shrink: 0; width: clamp(300px, 44vw, 560px); padding: clamp(28px, 3.5vw, 48px); }

── FOOTER WORDMARK ──
.footer-wordmark {
  font-family: var(--font-tight);
  font-weight: 500;
  font-size: clamp(5rem, 20vw, 22rem);
  letter-spacing: -0.04em;
  line-height: 0.85;
  color: rgba(255,255,255,0.04);
  user-select: none;
  pointer-events: none;
  text-align: center;
  width: 100%;
  overflow: hidden;
}

── MOBILE BREAKPOINT (max-width: 767px) ──
IMPORTANT: This entire block must be present exactly as written. These overrides use !important to beat inline GSAP styles.

@media (max-width: 767px) {
  body { cursor: auto; }
  .cursor-dot, .cursor-ring { display: none !important; }
  button { cursor: pointer; }
  a { cursor: pointer; }

  /* Services section — single column layout */
  .services-section {
    align-items: flex-start !important;
    padding-top: calc(var(--nav-h) + 16px) !important;
    padding-bottom: 16px !important;
  }
  .services-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
    align-items: start !important;
  }
  .services-heading { font-size: 1.4rem !important; }
  .services-stack-col {
    display: block !important;
    height: clamp(280px, 38vh, 360px) !important;
    padding-top: 0 !important;
    overflow: visible !important;
    clip-path: inset(0 0 0 0 round 20px);
  }
  .services-card-item { top: 0 !important; bottom: 0 !important; }
  .services-card-header {
    flex-direction: column !important;
    gap: 2px !important;
    align-items: flex-start !important;
    justify-content: flex-start !important;
    padding: 14px 16px 10px !important;
  }
  .services-card-title { font-size: 1.35rem !important; }
  .services-card-image { height: clamp(140px, 20vh, 200px) !important; }
  .services-card-desc { padding: 10px 16px 14px !important; }

  /* Metrics section — single column, unstick left panel */
  .metrics-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .metrics-sticky {
    position: static !important;
    top: auto !important;
  }

  /* Testimonials — narrow composition to fit viewport */
  .testimonial-comp {
    width: clamp(300px, 88vw, 500px) !important;
    height: clamp(320px, 52vh, 480px) !important;
  }
}

── REDUCED MOTION ──
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

═══════════════════════════════════════════════════════
PART 2 — SMOOTH SCROLL (hooks/useLenis.ts)
═══════════════════════════════════════════════════════

Create hooks/useLenis.ts:
- Import Lenis from '@studio-freight/lenis'
- Import useEffect, useRef from 'react'
- Import gsap from 'gsap'
- In useEffect: create Lenis instance, connect to gsap.ticker via gsap.ticker.add((time) => lenis.raf(time * 1000)), set gsap.ticker.lagSmoothing(0)
- Return cleanup that destroys lenis and removes ticker
- Export default useLenis hook

═══════════════════════════════════════════════════════
PART 3 — CUSTOM CURSOR (components/Cursor.tsx)
═══════════════════════════════════════════════════════

'use client'
- Two divs: one with className "cursor-dot", one with className "cursor-ring"
- Track mouse with useEffect + mousemove listener
- Dot: snaps directly to mouse position (gsap.set with x, y)
- Ring: follows with slight lag (gsap.to with duration 0.55, ease 'power3.out')
- On mousedown: add 'is-clicking' to ring; on mouseup: remove it
- Detect dark sections: elements with data-dark="true" attribute. On mousemove, check if document.elementFromPoint(x,y) has closest('[data-dark]') — if yes add 'is-dark' to both dot and ring; if no, remove it
- On mouseover any interactive element (a, button, [data-hover]): add 'is-hovering' to ring
- On mouseout: remove 'is-hovering'

═══════════════════════════════════════════════════════
PART 4 — NAVBAR (components/Navbar.tsx)
═══════════════════════════════════════════════════════

'use client'
- Fixed top, z-index 100, width 100%, height var(--nav-h) = 72px
- White background with backdrop-filter blur(12px)
- Left: "CODEAI" in Inter Tight font-weight 500, links to /
- Center: nav links — About (#about), Work (#work), Services (#services) — hidden below 768px
- Right: red pill button "Work with us" → #contact (uses btn-red class); hamburger icon on mobile (≤768px)
- On scroll past 50px: add border-bottom: 1px solid rgba(17,17,17,0.07)
- Mobile hamburger: opens a fixed full-screen overlay (z-index 200, dark bg #111111) with all nav links vertically centered in Inter Tight font, large size (clamp 2.5rem, 7vw, 4rem), white text. Hamburger becomes an × close button when open. Clicking any link closes the overlay.
- Use useState for scrolled + menuOpen state
- useEffect: window scroll listener for border, cleanup on unmount

═══════════════════════════════════════════════════════
PART 5 — HERO (components/Hero.tsx)
═══════════════════════════════════════════════════════

'use client'
- Full viewport height (100svh), white background
- Padding: var(--container-px) horizontally, padding-top var(--nav-h) + clamp(48px,6vw,80px)
- Main headline: "Creative Design Studio" in Inter Tight, font-weight 500
  - Font size: clamp(4rem, 9vw, 9rem)
  - Line height: 1.0
  - Split into individual words, each wrapped in .line-mask > .line-inner
  - GSAP: on mount, animate each .line-inner from {y: '105%'} to {y: '0%'}, stagger 0.08s, duration 1.1s, ease 'power4.out', delay 0.2s
- Sub-headline below (margin-top clamp(24px,3vw,40px)):
  "Studio specialized in crafting identities and design strategy."
  Font: Inter, 0.875rem–1.1rem, weight 400, color rgba(17,17,17,0.55), maxWidth 380px
  GSAP: fade up from y:20, opacity:0, delay 0.65s, duration 0.9s
- Bottom bar (position absolute, bottom clamp(32px,4vw,56px), full width, flex, space-between):
  Left: label "Est. 2016" in Inter, 0.75rem, color rgba(17,17,17,0.4), uppercase, letter-spacing 0.12em
  Right: "↓ Scroll to explore" label same style
  GSAP: both fade up, delay 0.9s
- Floating rotating badge (position absolute, top clamp(100px,14vw,160px), right var(--container-px)):
  Circle div, 110px × 110px, background #C82A2A, border-radius 50%
  Inner text: "Work" on one line, "with us" below, white, Inter Tight, 0.8rem, text-align center
  Small "↗" arrow in center
  GSAP: continuous rotation gsap.to({rotation:360}, {duration:12, repeat:-1, ease:'none'})
  On hover: grow to 120px via CSS transition

═══════════════════════════════════════════════════════
PART 6 — MARQUEE (components/Marquee.tsx)
═══════════════════════════════════════════════════════

No 'use client' needed — pure CSS.
- Background: #111111, padding: clamp(28px,4vw,48px) 0
- Two rows, each a .marquee-track div
  Row 1 className: "marquee-track animate-marquee-fwd"
  Row 2 className: "marquee-track animate-marquee-rev", margin-top 16px
- Each row contains the text string REPEATED TWICE (so the loop is seamless):
  "Brand Identity ✦ Advertising ✦ Web Design ✦ Motion ✦ Strategy ✦ "
  (copy this string twice inside the div so it fills double the width)
- Font: Inter Tight, font-weight 500, font-size clamp(1.5rem, 3vw, 3rem), color #FFFFFF
- Letter-spacing: -0.01em

═══════════════════════════════════════════════════════
PART 7 — ABOUT (components/About.tsx)
═══════════════════════════════════════════════════════

'use client'
- id="about", data-dark="true"
- Background: #C82A2A, padding: clamp(80px,10vw,140px) var(--container-px)
- Top row: small label "OUR STUDIO" (section-label label-light class)
- Large heading (Inter Tight, clamp 2.5rem to 6.5rem, weight 500, color #FFFFFF, line-height 1.15, maxWidth 900px):
  "We are a creative studio dedicated to craft a solution"
  GSAP: split into words, each revealed by scrolling (.line-mask > .line-inner pattern)
  ScrollTrigger: trigger on section, start 'top 75%', stagger 0.06s per word
- Below heading: a row of 3 image thumbnails (each 200px × 140px, borderRadius 12px, overflow hidden, objectFit cover)
  Use these images (regular <img> tags, not next/image):
  img1: https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb1dc9797d92e7aae3f_img6.webp
  img2: https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68aea452324447dec982d6b3_img9.webp
  img3: https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e424_img17.webp
- Stats row (margin-top clamp(48px,6vw,80px), 3 columns, gap clamp(32px,4vw,56px)):
  Each stat: large number (Inter Tight, clamp 3.5rem to 6rem, #FFFFFF) + label below (Inter, 0.875rem, rgba(255,255,255,0.55))
  Stats:
  - "8+" / "Years of excellence"
  - "100+" / "Projects delivered"
  - "50+" / "Happy clients"
  GSAP: CountUp animation on each number when it enters viewport (ScrollTrigger once:true)
  Strip the "+" suffix during count, add it back at the end

═══════════════════════════════════════════════════════
PART 8 — SERVICES (components/Services.tsx)
═══════════════════════════════════════════════════════

'use client'
gsap.registerPlugin(ScrollTrigger) — at module level, outside component.

─── DATA ───
const SERVICES = [
  { num: '01', name: 'Advertising', img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb1dc9797d92e7aae3f_img6.webp',  desc: 'Strategic campaigns that capture attention and drive results.' },
  { num: '02', name: 'Graphic',     img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68aea452324447dec982d6b3_img9.webp',   desc: 'Visual communication that tells your brand story with impact.' },
  { num: '03', name: 'Branding',    img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e424_img17.webp',  desc: 'Identity systems built to last across every touchpoint.' },
  { num: '04', name: 'Website',     img: 'https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b53ed5e0ae8eda7ac7e41b_img16.webp',  desc: 'Digital experiences that convert visitors into loyal clients.' },
]
const N = SERVICES.length

─── POSITION SLOTS ───
const POS = [
  { y: 0,    x: 0,  scale: 1,    zIndex: 10 },
  { y: -68,  x: 20, scale: 0.97, zIndex: 9  },
  { y: -136, x: 40, scale: 0.94, zIndex: 8  },
  { y: -204, x: 60, scale: 0.91, zIndex: 7  },
]
// POS[0] = front card (shown), POS[3] = most back card (peeking top-right)

─── STATE ───
const [activeIdx, setActiveIdx] = useState(0)
Refs: sectionRef (section), cardRefs (array of 4 card divs)

─── GSAP useEffect ───
Inside gsap.context:

1. Set initial positions:
   cardRefs.current.forEach((card, i) => {
     gsap.set(card, { y: POS[i].y, x: POS[i].x, scale: POS[i].scale, zIndex: POS[i].zIndex })
   })

2. ScrollTrigger.create:
   trigger: sectionRef.current
   start: 'top top'
   end: () => `+=${window.innerHeight * N}`
   pin: true
   anticipatePin: 1
   scrub: 1
   invalidateOnRefresh: true
   onUpdate: (self) => {
     const phase = self.progress * N
     const cur = Math.min(Math.floor(phase), N - 1)
     const frac = phase - cur  // 0→1 within each step

     setActiveIdx(cur)

     cardRefs.current.forEach((card, cardI) => {
       const slot = (cardI - cur + N) % N
       let y, x, scale, zIndex

       if (slot === 0) {
         // Front card moves to back slot
         const from = POS[0], to = POS[N - 1]
         y     = lerp(from.y, to.y, frac)
         x     = lerp(from.x, to.x, frac)
         scale = lerp(from.scale, to.scale, frac)
         zIndex = frac > 0.45 ? POS[N - 1].zIndex - 1 : POS[0].zIndex
       } else {
         // Other cards advance one slot toward front
         const from = POS[slot]
         const to   = POS[Math.max(slot - 1, 0)]
         y     = lerp(from.y, to.y, frac)
         x     = lerp(from.x, to.x, frac)
         scale = lerp(from.scale, to.scale, frac)
         zIndex = frac > 0.5 ? to.zIndex : from.zIndex
       }
       gsap.set(card, { y, x, scale, zIndex })
     })
   }

lerp helper: function lerp(a, b, t) { return a + (b - a) * t }
Cleanup: return () => ctx.revert()

─── JSX — CRITICAL: use these exact classNames so mobile CSS overrides work ───

<section
  ref={sectionRef}
  id="services"
  className="services-section"
  data-dark="true"
  style={{
    background: '#C82A2A',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: 'clamp(80px, 10vw, 140px) var(--container-px)',
    overflow: 'hidden',
  }}
>
  <div className="services-grid" style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'clamp(48px, 6vw, 96px)',
    alignItems: 'center',
    width: '100%',
  }}>

    {/* LEFT — text column */}
    <div>
      <div className="services-heading" style={{
        fontFamily: 'var(--font-tight)',
        fontSize: 'clamp(2rem, 4.5vw, 4rem)',
        fontWeight: 500,
        color: '#FFFFFF',
        lineHeight: 1.2,
        marginBottom: 'clamp(20px, 2.5vw, 36px)',
      }}>
        We introduce methodologies, processes, and learnings to drive digital innovation projects.
      </div>

      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(0.875rem, 1.3vw, 1.1rem)',
        fontWeight: 400,
        color: 'rgba(255,255,255,0.58)',
        lineHeight: 1.75,
        maxWidth: 380,
        margin: 0,
      }}>
        Ensuring impactful experiences that drive growth and success.
      </p>

      {/* Numbered service list */}
      <div style={{ marginTop: 'clamp(28px, 3.5vw, 48px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {SERVICES.map((s, i) => (
          <div key={s.num} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            opacity: activeIdx === i ? 1 : 0.38,
            transition: 'opacity 0.4s ease',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500,
              color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', minWidth: 24,
            }}>
              {s.num}
            </span>
            <span style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(1rem, 1.8vw, 1.55rem)',
              fontWeight: 500, color: '#FFFFFF', lineHeight: 1,
            }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT — stacking cards column */}
    {/* boxSizing content-box so paddingTop 220 adds ABOVE the height, giving room for back cards */}
    <div className="services-stack-col" style={{
      position: 'relative',
      height: 'clamp(360px, 50vh, 540px)',
      paddingTop: 220,
      boxSizing: 'content-box',
    }}>
      {SERVICES.map((svc, i) => (
        <div
          key={svc.num}
          ref={el => { cardRefs.current[i] = el }}
          className="services-card-item"
          style={{
            position: 'absolute',
            left: 0, right: 0,
            top: 220,   /* desktop: below padding area. mobile CSS overrides to 0 */
            bottom: 0,
            background: '#FFFFFF',
            borderRadius: 20,
            overflow: 'hidden',
            willChange: 'transform',
            transformOrigin: 'top center',
          }}
        >
          {/* Card header: number + service name side-by-side on desktop, stacked on mobile */}
          <div className="services-card-header" style={{
            padding: 'clamp(16px, 2vw, 26px) clamp(18px, 2.2vw, 28px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500,
              color: 'rgba(17,17,17,0.35)', letterSpacing: '0.1em',
            }}>
              {svc.num}.
            </span>
            <span className="services-card-title" style={{
              fontFamily: 'var(--font-tight)',
              fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)',
              fontWeight: 500, color: '#111111', lineHeight: 1,
            }}>
              {svc.name}
            </span>
          </div>

          {/* Image */}
          <div className="services-card-image" style={{ height: 'clamp(140px, 22vh, 260px)', overflow: 'hidden' }}>
            <img src={svc.img} alt={svc.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Description */}
          <div className="services-card-desc" style={{ padding: 'clamp(12px, 1.6vw, 20px) clamp(18px, 2.2vw, 28px)' }}>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '0.875rem',
              color: 'rgba(17,17,17,0.5)', lineHeight: 1.6, margin: 0,
            }}>
              {svc.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

═══════════════════════════════════════════════════════
PART 9 — FEATURED WORK (components/FeaturedWork.tsx)
═══════════════════════════════════════════════════════

'use client'
- id="work", dark background #111111
- Header row: section label "OUR WORK" (dot + text) + "Discover." heading (Inter Tight, clamp 3rem to 7rem, #FFFFFF) + "View all →" link right-aligned
- 3 project items, each in a 200vh outer wrapper div with position:relative
  Inside each: a sticky inner div (position:sticky, top:0, height:100vh, overflow:hidden)
  
  Project animation (GSAP ScrollTrigger per project):
  trigger: the outer 200vh div
  start: 'top top'
  end: 'bottom top'
  scrub: true
  
  Phase 1 (progress 0→0.5): image fills full viewport → shrinks to card
  - Image starts at inset(0px) with borderRadius 0px
  - Animates to inset(clamp(16px,2vw,24px) clamp(16px,2vw,24px)) with borderRadius 16px
  - Use GSAP to animate the clip-path or use a scale + border-radius approach
  
  Phase 2 (progress 0.5→1): info bar fades in below image
  - Shows project title (Inter Tight, 1.5–2.5rem, white) + category + counter "01/03"
  
  Projects:
  1. "Freight Line" — Website design
     img: https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb21fca2720f8edf53e_m4.webp
  2. "Helvetica" — Ads Direction  
     img: https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb0fe820b5e5e3b2313_m2.webp
  3. "Marginal" — Brand Identity
     img: https://cdn.prod.website-files.com/68ae68d1a017ccf41fd5f812/68b7abb12d1cf332d8e24e8c_m3.webp

═══════════════════════════════════════════════════════
PART 10 — METRICS (components/Metrics.tsx)
═══════════════════════════════════════════════════════

'use client'
gsap.registerPlugin(ScrollTrigger) at module level.

─── DATA ───
const DESC = 'We provide tailored solutions built on creativity, precision, and trust — ensuring quality results and a smooth experience every step of the way.'
const CLOSING = 'We deliver creative solutions with quality results that make an impact.'
const STATS = [
  { value: 92,  suffix: '%',  label: 'Client satisfaction rate, fostering long-term relationships and repeat business' },
  { value: 100, suffix: '+',  label: 'Active users experiencing our design every day via products we made' },
  { value: 8,   suffix: 'yr', label: 'Studio excellence pushing the limits of design and creative strategy' },
]

─── REFS ───
sectionRef, descCardRef, cardRefs (3), numRefs (3), barRefs (3), barNumRefs (3), closingRef

─── GSAP useEffect ───

1. Color inversion ScrollTrigger:
   trigger: sectionRef.current
   start: 'top bottom'
   end: 'top top'
   scrub: 1
   invalidateOnRefresh: true
   onUpdate: (self) => {
     const invP = self.progress
     const bg = Math.round(245 * invP)
     section.style.background = `rgb(${bg},${bg},${bg})`
     
     const c = Math.round(255 - (255 - 17) * invP)
     // Apply interpolated color to:
     // .wc-title → rgb(c,c,c)
     // .wc-sub → rgba(c,c,c,0.5)
     // .wc-label → rgba(c,c,c,0.35)
     // .stat-num → rgb(c,c,c)
     // .stat-label → rgba(c,c,c,0.5)
     // .bar-end → rgba(c,c,c,0.4)
     // .bar-pill → rgba(0,0,0,0.07) when invP>0.5, else rgba(255,255,255, 0.12*(1-invP))
     
     // Light cards (descCardRef + cardRefs) background:
     const alpha = (0.06 + 0.94 * invP).toFixed(3)
     lightCards.forEach(card => {
       card.style.background = `rgba(255,255,255,${alpha})`
       card.style.borderColor = `rgba(${c},${c},${c},0.1)`
     })
   }

2. Cards fade-up on scroll enter:
   [descCardRef, ...cardRefs, closingRef].forEach(card => {
     gsap.fromTo(card,
       { opacity: 0, y: 42 },
       { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
         scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none', invalidateOnRefresh: true }
       }
     )
   })

3. Counter + bar per stat:
   STATS.forEach((stat, i) => {
     ScrollTrigger.create({
       trigger: cardRefs[i],
       start: 'top 85%',
       once: true,
       onEnter: () => {
         const obj = { val: 0 }
         gsap.to(obj, {
           val: stat.value,
           duration: 1.8, ease: 'power2.out',
           onUpdate: () => {
             const v = Math.round(obj.val)
             numRefs[i].textContent = v + stat.suffix
             barNumRefs[i].textContent = v + stat.suffix
           }
         })
         gsap.fromTo(barRefs[i], { width: '0%' }, { width: '100%', duration: 2.0, ease: 'power2.out' })
       }
     })
   })

─── JSX — CRITICAL: use these exact classNames ───

<section ref={sectionRef} style={{ background: '#000000', padding: 'clamp(80px,10vw,140px) var(--container-px)', position: 'relative' }}>
  <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,5vw,80px)', alignItems: 'start' }}>

    {/* LEFT — sticky title */}
    <div className="metrics-sticky" style={{ position: 'sticky', top: 'clamp(80px, 10vw, 130px)' }}>
      <div className="wc-title" style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(3rem,8vw,7.2rem)', fontWeight: 500, lineHeight: 1.1, color: '#FFFFFF' }}>
        Why client<br />choose us
      </div>
      <p className="wc-sub" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.875rem,1.2vw,1rem)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: '18px 0 0', maxWidth: 280 }}>
        We provide tailored solutions built on creativity, precision, and trust.
      </p>
      <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 28, height: 2, background: '#C82A2A', borderRadius: 2, flexShrink: 0 }} />
        <span className="wc-label" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          Our numbers
        </span>
      </div>
    </div>

    {/* RIGHT — scrolling cards */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.2vw,16px)' }}>

      {/* Description card — initial opacity 0, animated in by GSAP */}
      <div ref={descCardRef} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: 'clamp(28px,3vw,44px)', border: '1px solid rgba(255,255,255,0.1)', opacity: 0 }}>
        <p className="stat-num" style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.1rem,2.5vw,2.25rem)', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.45, margin: 0 }}>
          {DESC}
        </p>
      </div>

      {/* Stat cards */}
      {STATS.map((stat, i) => (
        <div key={i} ref={el => { cardRefs.current[i] = el }} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 18, padding: 'clamp(28px,3vw,44px)', border: '1px solid rgba(255,255,255,0.1)', opacity: 0 }}>
          
          {/* Counter row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,24px)', marginBottom: 18 }}>
            <span ref={el => { numRefs.current[i] = el }} className="stat-num"
              style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(2.8rem,6vw,5.4rem)', fontWeight: 500, color: '#FFFFFF', lineHeight: 1, flexShrink: 0 }}>
              0{stat.suffix}
            </span>
            
            {/* Pill bar container */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
              <div className="bar-pill" style={{ flex: 1, height: 28, borderRadius: 100, background: 'rgba(255,255,255,0.12)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 10, right: 10, top: '50%', transform: 'translateY(-50%)', height: 3, borderRadius: 100, overflow: 'hidden' }}>
                  <div ref={el => { barRefs.current[i] = el }}
                    style={{ height: '100%', width: '0%', background: '#C82A2A', borderRadius: 100 }} />
                </div>
              </div>
              <span ref={el => { barNumRefs.current[i] = el }} className="bar-end"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', flexShrink: 0, minWidth: 32, textAlign: 'right' }}>
                0{stat.suffix}
              </span>
            </div>
          </div>
          
          <p className="stat-label" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.875rem,1.1vw,1rem)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, margin: 0 }}>
            {stat.label}
          </p>
        </div>
      ))}

      {/* Closing card */}
      <div ref={closingRef} style={{ background: '#111111', borderRadius: 18, padding: 'clamp(28px,3vw,44px)', border: '1px solid rgba(255,255,255,0.06)', opacity: 0 }}>
        <p style={{ fontFamily: 'var(--font-tight)', fontSize: 'clamp(1.4rem,3vw,2.8rem)', fontWeight: 500, color: '#FFFFFF', lineHeight: 1.3, margin: 0 }}>
          {CLOSING}
        </p>
      </div>

    </div>
  </div>
</section>

═══════════════════════════════════════════════════════
PART 11 — TESTIMONIALS (components/Testimonials.tsx)
═══════════════════════════════════════════════════════

'use client'
gsap.registerPlugin(ScrollTrigger) at module level.

─── DATA ───
const TESTIMONIALS = [
  { id:1, author:'Manuel Emano',   role:'Leader of Wob.',  stars:4.5, tag:'Great design',  rating:'4.5/5', color:'#F5A623', initials:'ME',
    quote:'"Working with this team was effortless. They understood our vision and delivered designs that exceeded expectations."' },
  { id:2, author:'Michael Blanket',role:'CEO of Warden.',  stars:5,   tag:'Fast Results',  rating:'5/5',   color:'#4CAF50', initials:'MB',
    quote:'"They brought clarity to our ideas and turned them into something tangible. The process felt collaborative and smooth."' },
  { id:3, author:'Andrew Smith',   role:'Owner of Ajay.',  stars:5,   tag:'Awesome Work',  rating:'5/5',   color:'#2196F3', initials:'AS',
    quote:'"Professional, detail-oriented, and genuinely invested in our success. We couldn\'t have asked for a better partner."' },
  { id:4, author:'Carl Jackson',   role:'Owner of Vee.',   stars:4,   tag:'Best Team',     rating:'4/5',   color:'#9C27B0', initials:'CJ',
    quote:'"What impressed us most was their ability to listen and deliver creative solutions that truly fit our goals."' },
]
const N = TESTIMONIALS.length

─── GSAP useEffect ───
const comps = compRefs.current.filter(Boolean)

gsap.set(comps, { opacity: 0, y: 80, rotateY: 0, rotateX: 0 })

ScrollTrigger.create({
  trigger: sectionRef.current,
  start: 'top top',
  end: () => `+=${window.innerHeight * N * 2}`,
  pin: true,
  anticipatePin: 1,
  scrub: 1,
  invalidateOnRefresh: true,
  onUpdate: (self) => {
    const p = self.progress
    comps.forEach((comp, i) => {
      const tStart = i / N
      const tEnd   = (i + 1) / N
      if (p < tStart) { gsap.set(comp, { opacity:0, y:80, rotateY:0, rotateX:0 }); return }
      if (p > tEnd)   { gsap.set(comp, { opacity:0, y:-80, rotateY:-32, rotateX:8 }); return }
      const rel = (p - tStart) / (tEnd - tStart)
      
      if (rel < 0.38) {
        // Enter: fly up from below
        const ep = rel / 0.38
        gsap.set(comp, { opacity: ep, y: (1 - ep) * 80, rotateY: 0, rotateX: 0 })
      } else if (rel < 0.52) {
        // Hold: fully visible, flat
        gsap.set(comp, { opacity: 1, y: 0, rotateY: 0, rotateX: 0 })
      } else if (rel < 0.82) {
        // Tilt: 3D perspective
        const tp = (rel - 0.52) / 0.30
        gsap.set(comp, { opacity: 1, y: 0, rotateY: tp * -32, rotateX: tp * 8 })
      } else {
        // Exit: fade + float up
        const xp = (rel - 0.82) / 0.18
        gsap.set(comp, { opacity: 1 - xp, y: -xp * 70, rotateY: -32, rotateX: 8 })
      }
    })
  }
})

─── JSX ───
Return a fragment <>:

A) Title section (full viewport, NOT in the pinned section):
<div style={{ height:'100vh', background:'#F5F5F5', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 var(--container-px)' }}>
  <h2 style={{ fontFamily:'var(--font-tight)', fontSize:'clamp(2.2rem,6vw,5.5rem)', fontWeight:500, color:'#111111', textAlign:'center', lineHeight:1.1 }}>
    Testimonials from our clients.
  </h2>
</div>

B) Pinned section:
<section ref={sectionRef} style={{ position:'relative', height:'100vh', background:'#F5F5F5', overflow:'hidden' }}>
  
  {/* Perspective wrapper */}
  <div style={{ position:'absolute', inset:0, perspective:'1200px', perspectiveOrigin:'50% 50%' }}>
    
    {TESTIMONIALS.map((t, i) => (
      <div key={t.id}
        ref={el => { compRefs.current[i] = el }}
        className="testimonial-comp"
        style={{
          position:'absolute', inset:0, margin:'auto',
          /* DESKTOP: width clamp(500px,70vw,680px). CSS override on mobile: clamp(300px,88vw,500px) */
          width: 'clamp(500px, 70vw, 680px)',
          height: 'clamp(440px, 58vh, 540px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Grey frame background card */}
        <div style={{ position:'absolute', top:'8%', left:'24%', width:'52%', height:'70%', background:'#E8E8E8', borderRadius:28, transform:'translateZ(0px)' }} />

        {/* Name + role card — left */}
        <div style={{ position:'absolute', top:'28%', left:0, width:'clamp(155px,31%,200px)', background:'#FFFFFF', borderRadius:18, padding:'clamp(14px,1.8vw,22px) clamp(16px,2vw,26px)', boxShadow:'0 6px 30px rgba(17,17,17,0.09)', transform:'translateZ(25px)' }}>
          <div style={{ fontFamily:'var(--font-tight)', fontSize:'clamp(1rem,1.5vw,1.3rem)', fontWeight:500, color:'#111111', lineHeight:1.2 }}>{t.author}</div>
          <div style={{ fontFamily:'var(--font-sans)', fontSize:'clamp(0.72rem,0.95vw,0.875rem)', color:'rgba(17,17,17,0.45)', marginTop:5 }}>{t.role}</div>
        </div>

        {/* Avatar circle */}
        <div style={{ position:'absolute', top:'31%', left:'40%', width:'clamp(76px,13%,100px)', height:'clamp(76px,13%,100px)', borderRadius:'50%', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', border:'4px solid #F5F5F5', boxShadow:'0 8px 30px rgba(17,17,17,0.14)', transform:'translateZ(42px)' }}>
          <span style={{ fontFamily:'var(--font-tight)', fontSize:'clamp(1rem,1.8vw,1.5rem)', fontWeight:500, color:'#FFFFFF' }}>{t.initials}</span>
        </div>

        {/* Stars + rating card — right */}
        <div style={{ position:'absolute', top:'44%', right:0, width:'clamp(155px,32%,210px)', background:'#FFFFFF', borderRadius:18, padding:'clamp(14px,1.8vw,22px) clamp(16px,2vw,26px)', boxShadow:'0 6px 30px rgba(17,17,17,0.09)', transform:'translateZ(20px)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
            <Stars count={t.stars} />
            <span style={{ fontFamily:'var(--font-sans)', fontSize:'0.68rem', color:'rgba(17,17,17,0.38)' }}>({t.rating})</span>
          </div>
          <div style={{ fontFamily:'var(--font-tight)', fontSize:'clamp(0.9rem,1.35vw,1.2rem)', fontWeight:500, color:'#111111' }}>— {t.tag}</div>
        </div>

        {/* Quote card — bottom left */}
        <div style={{ position:'absolute', bottom:0, left:0, width:'clamp(190px,52%,300px)', background:'#FFFFFF', borderRadius:18, padding:'clamp(16px,2vw,24px)', boxShadow:'0 6px 30px rgba(17,17,17,0.09)', transform:'translateZ(15px)' }}>
          <p style={{ fontFamily:'var(--font-tight)', fontSize:'clamp(0.8rem,1.05vw,0.95rem)', fontWeight:500, color:'#111111', lineHeight:1.55, margin:0 }}>
            {t.quote}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

Stars helper component (inside the file, above the main component):
function Stars({ count }) {
  return (
    <div style={{ display:'flex', gap:2 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} style={{ color: i < Math.round(count) ? '#F5A623' : '#DEDEDE', fontSize:'0.95rem' }}>★</span>
      ))}
    </div>
  )
}

═══════════════════════════════════════════════════════
PART 12 — CTA / CONTACT (components/CTA.tsx)
═══════════════════════════════════════════════════════

'use client'
- id="contact", white background (#FFFFFF)
- Padding: clamp(80px,10vw,140px) var(--container-px) top/bottom

Main heading (Inter Tight, clamp 2.5rem to 7.2rem, weight 500, color #111111, line-height 1.1):
"Let's begin the project"
GSAP: on scroll enter, fade up from y:40, opacity:0, duration:1s, ease:'power3.out'

Two-column grid below (gap clamp(40px,5vw,80px)):

LEFT COLUMN:
- Description: "Ready to transform your brand? Let's create something remarkable together. From strategy to execution, we bring your vision to life."
  Font: Inter, clamp(0.9rem,1.3vw,1.05rem), color rgba(17,17,17,0.6), lineHeight 1.75, maxWidth 380
- Red button "Work with us →" (btn-red class), margin-top 32px
  Links to: mailto:rohilla77@gmail.com

RIGHT COLUMN:
- Label: "CONTACT" (uppercase, Inter, 0.7rem, letter-spacing 0.12em, color rgba(17,17,17,0.4))
- Email block (margin-top 12px):
  "rohilla77@gmail.com" as a link href="mailto:rohilla77@gmail.com"
  Font: Inter Tight, clamp(1.1rem,2vw,1.6rem), weight 500, color #111111
- Phone block (margin-top 16px):
  "+91-8950205038" as a link href="tel:+918950205038"
  Same font
- Availability row (margin-top 20px, flex, gap 8px, align-items center):
  - Pulsing green dot: 8px × 8px circle, background #22C55E, borderRadius 50%, animation: ping 1.5s infinite
    CSS for ping: @keyframes ping { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.6);opacity:0.4} }
  - Text: "Accepting new projects — Q3 2026" (Inter, 0.8rem, color rgba(17,17,17,0.55))

Bottom bar (border-top: 1px solid rgba(17,17,17,0.08), padding-top 32px, margin-top 64px, flex, space-between):
LEFT: service tags as links — "Advertising", "Graphic Design", "Branding", "Website" — each links to #about
  Font: Inter, 0.75rem, color rgba(17,17,17,0.4), gap 20px, letter-spacing 0.04em
RIGHT: social icon links — Instagram(#), YouTube(#), LinkedIn(#), X(#) — text links, same style

═══════════════════════════════════════════════════════
PART 13 — FOOTER (components/Footer.tsx)
═══════════════════════════════════════════════════════

No 'use client' needed.
- Background: #111111, white text
- Padding: clamp(64px,8vw,120px) var(--container-px)

Four-column grid (gap clamp(32px,4vw,64px), on mobile stack to 2 columns):

COL 1 — Brand:
- "CODEAI" in Inter Tight, weight 500, 1.4rem, white
- Para below: "A creative studio building brands, websites, and strategies that drive growth and leave lasting impressions."
  Inter, 0.875rem, rgba(255,255,255,0.45), lineHeight 1.7, maxWidth 220, marginTop 16px

COL 2 — Studio:
- Label: "STUDIO" (Inter, 0.65rem, letter-spacing 0.14em, rgba(255,255,255,0.3), marginBottom 20px)
- Links (each on its own line, Inter, 0.875rem, rgba(255,255,255,0.55), hover → rgba(255,255,255,1), transition 0.3s):
  Home → /
  About → /about
  Work → #work
  Testimonial → #testimonials

COL 3 — Company:
- Label: "COMPANY"
- Links:
  Our Story → /about
  Reviews → #testimonials
  Contact Us → #contact
  Services → #services

COL 4 — Legal + Contact:
- Label: "LEGAL"
- Links:
  Privacy Policy → /privacy-policy
  Terms of Service → /terms-of-service
  Cancellation Policy → /cancellation-policy
- Divider: 1px solid rgba(255,255,255,0.08), margin 20px 0
- Phone: "+91-8950205038" as href="tel:+918950205038", same link style
- Email: "rohilla77@gmail.com" as href="mailto:rohilla77@gmail.com", same link style

Bottom bar (border-top: 1px solid rgba(255,255,255,0.07), padding-top 28px, margin-top 64px, flex, space-between, flex-wrap wrap, gap 16px):
LEFT: "© [current year] CODEAI Studio · Developed by Ankit"
  (use new Date().getFullYear() for the year)
  Inter, 0.8rem, rgba(255,255,255,0.35)
RIGHT: "↑ Back to top" button
  onClick: window.scrollTo({top:0, behavior:'smooth'})
  Same font style, cursor pointer on mobile (add cursor-pointer class or inline cursor)

Giant wordmark at very bottom:
<div className="footer-wordmark">CODEAI</div>
Place this after the grid but before closing the section.

GSAP stagger fade-up: all cols and bottom bar elements, fromTo opacity:0,y:28 → opacity:1,y:0, stagger 0.1s, scrollTrigger start:'top 85%'

═══════════════════════════════════════════════════════
PART 14 — LEGAL PAGES
═══════════════════════════════════════════════════════

Create 4 separate page files. Each shares this layout structure:
- Sticky navbar at top: "← CODEAI" back link (left) + page title (right), white bg, border-bottom
- Hero section: dark bg (#111111), page title + effective date + compliance badge
- Content container: max-width 820px, margin auto, padding var(--container-px)
- Section headings: Inter Tight, 1.3–1.5rem, weight 500, border-bottom per section
- Body text: Inter, 1rem, lineHeight 1.75, color rgba(17,17,17,0.75)
- Cross-links to other legal pages at the bottom
- Consistent with main site fonts/colors

─── app/privacy-policy/page.tsx ───
Title: "Privacy Policy"
Effective Date: 12 May 2026
Compliance badge: "Compliant with DPDPA 2023 & IT Act 2000"
Sections (13):
1. Introduction — who we are, what this policy covers
2. Data Fiduciary Information — CODEAI Studio, rohilla77@gmail.com
3. Data We Collect — name, email, phone, project briefs, usage data, cookies
4. Legal Basis for Processing — consent, contractual necessity, legitimate interest
5. How We Use Your Data — service delivery, communication, improvement
6. Data Sharing — no sale; share only with processors under NDA; legal disclosure
7. Cookies & Tracking — session cookies, analytics; how to opt out
8. Data Retention — project data 3 years post-project; communications 1 year
9. Your Rights under DPDPA 2023 — access, correction, erasure, grievance
10. Security Measures — TLS, access controls, breach notification within 72hrs
11. Cross-Border Transfers — standard contractual clauses
12. Grievance Officer — Name: Ankit, Email: rohilla77@gmail.com, Response: 30 days
13. Governing Law — Republic of India, DPDPA 2023, IT Act 2000

─── app/terms-of-service/page.tsx ───
Title: "Terms of Service"
Effective Date: 12 May 2026
Compliance badge: "Governed by Indian Contract Act 1872 & IT Act 2000"
Sections (15):
1. Agreement to Terms
2. Services Offered — branding, advertising, graphic design, web design
3. Project Initiation — signed brief + 50% advance before work begins
4. Client Responsibilities — timely content, feedback within 5 business days
5. Fees & Payment — INR invoicing, 50% advance, 50% on delivery, 1.5% monthly late fee
6. Revision Policy — 3 rounds included; additional at ₹2,500/round
7. Intellectual Property — full IP transfers to client on final payment
8. Confidentiality — mutual NDA terms, 2-year post-project
9. Warranties — we disclaim fitness for particular purpose; client approves final files
10. Limitation of Liability — capped at fees paid; no consequential damages
11. Termination — either party 14-day notice; pro-rata billing
12. Force Majeure — natural disaster, govt action, platform outage
13. Dispute Resolution — first mediation in Delhi; then arbitration under Arbitration Act 1996
14. Governing Law — Delhi, India
15. Modifications — 30-day notice via email before changes take effect

─── app/cancellation-policy/page.tsx ───
Title: "Cancellation & Refund Policy"
Effective Date: 12 May 2026
Compliance badge: "Compliant with Consumer Protection Act 2019"

Include this refund schedule table:
| Stage of Cancellation | Refund |
|---|---|
| Before project start (no work begun) | 100% refund |
| Within 48 hours of project start | 75% refund |
| After discovery / strategy phase | 50% refund |
| After initial concepts delivered | 25% refund |
| After revision rounds begin | No refund |

Sections (11):
1. Overview — why this policy exists
2. How to Cancel — email rohilla77@gmail.com with project name + reason
3. Refund Schedule — the table above
4. Non-Refundable Items — third-party costs, licensed fonts/assets, domain fees
5. Processing Timeline — refunds within 7–14 business days
6. Partial Deliverables — work done to cancellation date belongs to CODEAI Studio until full payment
7. Subscription Services — 30-day rolling, cancel anytime
8. Force Majeure Cancellations — full refund for cancellations due to our failure
9. Dispute Resolution — Consumer Forum, then Delhi arbitration
10. Policy Changes — 30-day notice
11. Contact — rohilla77@gmail.com, +91-8950205038

─── app/about/page.tsx ───
Title: "We build brands that earn attention and hold it."
Sections:
1. Hero — dark background #111111, full-height or tall section, white text
   Heading: "We build brands that earn attention and hold it." (Inter Tight, clamp 3rem to 7rem)
   Subtext: "CODEAI Studio is an independent creative studio founded on the belief that great design changes outcomes."
2. Story — white bg, two columns: left heading "8 years of practice", right 2 paragraphs about the studio's philosophy
3. Values — white bg, 2×2 grid of value cards (white cards, subtle border):
   - Clarity: "We cut through noise to find the essential idea."
   - Craft: "Every pixel is intentional. Every word earns its place."
   - Partnership: "We work with clients, not just for them."
   - Integrity: "Honest timelines, honest pricing, honest work."
4. Services list — red background #C82A2A, white text, the four services in a horizontal row
5. CTA — white bg, centered heading "Ready to start something?", red button "Work with us" → mailto:rohilla77@gmail.com

═══════════════════════════════════════════════════════
PART 15 — PAGE ASSEMBLY (app/page.tsx)
═══════════════════════════════════════════════════════

'use client'
Import and render all components in this exact order:
Cursor → Navbar → Hero → Marquee → About → Services → FeaturedWork → Metrics → Testimonials → CTA → Footer

Also call useLenis() hook at the top of the component.

═══════════════════════════════════════════════════════
PART 16 — NEXT.JS CONFIG (next.config.ts)
═══════════════════════════════════════════════════════

const nextConfig = {
  images: {
    unoptimized: true,
  },
}
export default nextConfig

═══════════════════════════════════════════════════════
FINAL INSTRUCTIONS FOR CLAUDE CODE
═══════════════════════════════════════════════════════

Build all files in this order:
1. app/globals.css — complete file as specified, including all mobile overrides
2. app/layout.tsx — fonts + metadata
3. hooks/useLenis.ts
4. components/Cursor.tsx
5. components/Navbar.tsx
6. components/Hero.tsx
7. components/Marquee.tsx
8. components/About.tsx
9. components/Services.tsx — use the exact className structure from Part 8
10. components/FeaturedWork.tsx
11. components/Metrics.tsx — use the exact className structure from Part 10
12. components/Testimonials.tsx — use the exact className structure from Part 11
13. components/CTA.tsx
14. components/Footer.tsx
15. app/page.tsx
16. app/privacy-policy/page.tsx
17. app/terms-of-service/page.tsx
18. app/cancellation-policy/page.tsx
19. app/about/page.tsx
20. next.config.ts

After building all files, run: npm run build
If any TypeScript or build errors appear, fix them before reporting done.
```

---

### After Pasting the Master Prompt

Claude Code will start writing files one by one. You will see it create each file in the list above.

**Do not close the terminal while it works.** It takes 15–25 minutes.

If Claude asks you a question, answer it in plain English. If it stops mid-way, type `continue` and press Enter.

When it finishes, it will either say "Done" or show a build result. If you see red errors, copy them and paste back to Claude: *"Fix these errors."*

---

## 9. RUN THE WEBSITE LOCALLY

Once Claude finishes, run the website on your computer to see it:

1. In the VS Code terminal, type:
   ```
   npm run dev
   ```
2. Wait 10–15 seconds
3. Open your browser and go to: **[http://localhost:3000](http://localhost:3000)**
4. You should see your website ✓

**To stop the local server:** Press `Ctrl + C` in the terminal.

---

## 10. PUSH CODE TO GITHUB

### Step 1 — Create a GitHub repository
1. Go to **[github.com](https://github.com)** and log in
2. Click the **+** icon top-right → **New repository**
3. Repository name: `my-studio`
4. Select **Public**
5. **Leave all "Initialize" checkboxes unticked**
6. Click **Create repository**
7. Copy the URL shown (like `https://github.com/yourusername/my-studio.git`)

### Step 2 — Push your code
In VS Code terminal (stop the dev server first with `Ctrl+C`):

```
git init
git add .
git commit -m "Initial commit — CODEAI Studio website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURREPONAME.git
git push -u origin main
```

Replace `YOURUSERNAME` and `YOURREPONAME` with your actual values.

> **If push fails with "rejected":** GitHub may have auto-created a README. Run:
> ```
> git pull origin main --allow-unrelated-histories
> git push origin main
> ```

> **If it asks for a password:** GitHub no longer accepts passwords. Create a Personal Access Token:
> GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token.
> Use this token as your password.

---

## 11. DEPLOY TO VERCEL

1. Go to **[vercel.com](https://vercel.com)** and log in
2. Click **"Add New"** → **"Project"**
3. You will see your GitHub repos — click **"Import"** next to your repo
4. Leave everything as default — Vercel auto-detects Next.js
5. Click **"Deploy"**
6. Wait 1–2 minutes
7. Your website is live at a URL like `your-project.vercel.app` ✓

Every time you push to GitHub → Vercel redeploys automatically.

---

## 12. CONNECT YOUR OWN DOMAIN

### Step 1 — Buy a domain
- **[namecheap.com](https://namecheap.com)** — affordable, recommended
- **[godaddy.com](https://godaddy.com)** — well known
- **[porkbun.com](https://porkbun.com)** — very cheap

### Step 2 — Add to Vercel
1. Vercel → your project → **Settings** → **Domains**
2. Type your domain (e.g., `codeaistudio.com`) → **Add**
3. Vercel shows DNS records to add

### Step 3 — Update DNS at your registrar
Add these records in your domain registrar's DNS settings:
- **A Record:** Host `@`, Value: `76.76.21.21`
- **CNAME Record:** Host `www`, Value: `cname.vercel-dns.com`

Save. DNS takes 5–30 minutes to propagate.
Vercel gives your domain a free HTTPS certificate automatically.

---

## 13. OTHER HOSTING PLATFORMS

### Option A — Netlify
1. Go to **[netlify.com](https://netlify.com)** → Sign up with GitHub
2. **"Add new site"** → **"Import an existing project"** → GitHub → your repo
3. Add a `netlify.toml` file to the project root:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```
4. Run: `npm install @netlify/plugin-nextjs` then push to GitHub
5. Click **Deploy** ✓

### Option B — Railway
1. Go to **[railway.app](https://railway.app)** → Sign up with GitHub
2. **"New Project"** → **"Deploy from GitHub repo"** → select repo → **Deploy** ✓

### Option C — Render
1. Go to **[render.com](https://render.com)** → Sign up with GitHub
2. **"New"** → **"Web Service"** → connect repo
3. Build command: `npm run build` / Start command: `npm start` → **Create** ✓

| Platform | Free Tier | Custom Domain | Auto-deploy | Best For |
|----------|-----------|---------------|-------------|----------|
| **Vercel** | Generous | Free | Yes | Next.js (recommended) |
| Netlify | Generous | Free | Yes | General sites |
| Railway | $5/month credit | Free | Yes | Full-stack |
| Render | Limited | Free | Yes | Various |

---

## 14. MAKING CHANGES AFTER DEPLOYMENT

### To change text, colors, or content yourself:
1. Open VS Code → open your project folder
2. Find and open the relevant file (e.g., `components/CTA.tsx` for contact info)
3. Make your change → Save (`Ctrl+S`)
4. In terminal:
   ```
   git add .
   git commit -m "describe what you changed"
   git push
   ```
5. Vercel deploys automatically ✓

### To ask Claude to make changes:
1. Open VS Code terminal → type `claude`
2. Describe what you want in plain English:
   - *"Change the phone number in the CTA section to +91-9999999999"*
   - *"Add a fifth service called 'Photography' with a matching card"*
   - *"Change the accent color from red to deep blue everywhere"*
3. Claude makes the changes → push to GitHub as above

---

## 15. TROUBLESHOOTING

### "npm: command not found"
Node.js is not installed or not in PATH. Reinstall Node.js and restart your terminal.

### "git: command not found"
Go back to Section 3 and reinstall Git.

### "Module not found" error
Run: `npm install`

### Website shows blank page
Check the terminal for red errors. Open Claude and say: *"The website shows a blank page. Here is the error: [paste error]. Please fix it."*

### Images not loading
Ensure `next.config.ts` contains:
```typescript
const nextConfig = { images: { unoptimized: true } }
export default nextConfig
```

### GSAP animations not working
Every component using GSAP must have:
1. `'use client'` at the very top
2. `gsap.registerPlugin(ScrollTrigger)` after imports (module level, outside component)
3. All GSAP code inside `useEffect`
4. `return () => ctx.revert()` for cleanup

### Services section cards not visible on mobile
Check that `globals.css` contains the `.services-stack-col` mobile override with `clip-path: inset(0 0 0 0 round 20px)` and `overflow: visible !important`. These two rules working together fix card display on mobile.

### Testimonials overflow on mobile screens
Check that `globals.css` has:
```css
@media (max-width: 767px) {
  .testimonial-comp {
    width: clamp(300px, 88vw, 500px) !important;
    height: clamp(320px, 52vh, 480px) !important;
  }
}
```

### Metrics text overlapping on mobile
Check that `globals.css` has:
```css
@media (max-width: 767px) {
  .metrics-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  .metrics-sticky { position: static !important; top: auto !important; }
}
```

### Build fails on Vercel
Run `npm run build` locally first. If it fails locally, paste the error to Claude: *"Build is failing with: [error]. Fix it."* After fix, push again.

### Git push rejected
```
git pull origin main --allow-unrelated-histories
git push origin main
```

### Custom domain not working after 1 hour
Double-check both the A record and CNAME record are saved correctly. DNS can take up to 48 hours in rare cases.

---

## QUICK REFERENCE COMMANDS

| Task | Command |
|------|---------|
| Start local dev server | `npm run dev` |
| Stop dev server | `Ctrl + C` |
| Build for production | `npm run build` |
| Stage all changes | `git add .` |
| Commit changes | `git commit -m "your message"` |
| Push to GitHub | `git push` |
| Open Claude Code | `claude` |
| Exit Claude Code | `/exit` or `Ctrl+C` |
| Install a package | `npm install package-name` |
| Check Node version | `node --version` |
| Check Git version | `git --version` |

---

## PRE-LAUNCH CHECKLIST

- [ ] Website loads at your Vercel URL
- [ ] Hero animation plays on page load
- [ ] Services section stacks cards on scroll (desktop)
- [ ] Services section shows cards below list (mobile)
- [ ] Metrics section counts up on scroll
- [ ] Testimonials 3D effect works on scroll
- [ ] All sections scroll smoothly (Lenis)
- [ ] Mobile view looks correct at 375px width
- [ ] Contact email (rohilla77@gmail.com) is correct
- [ ] Contact phone (+91-8950205038) is correct
- [ ] "Work with us" button opens email client
- [ ] Footer shows correct year and "Developed by Ankit"
- [ ] Privacy Policy page loads at /privacy-policy
- [ ] Terms of Service loads at /terms-of-service
- [ ] Cancellation Policy loads at /cancellation-policy
- [ ] About page loads at /about
- [ ] All legal pages link back to home

---

*This guidebook encodes every revision from the original build. For questions: rohilla77@gmail.com*
