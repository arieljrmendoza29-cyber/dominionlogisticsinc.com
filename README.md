# Dominion Logistics, Inc. — Marketing Website

The official marketing website for **Dominion Logistics, Inc.** — a technology and systems solutions company for logistics and transportation operators. Static multi-page site built with plain HTML, CSS, and vanilla JavaScript. No build step required.

**Business:** Dominion Logistics, Inc. engineers the digital backbone for modern supply chain and transport operations. The company is **not a freight carrier** — it builds the operational infrastructure, routing intelligence, and dispatch software that power today's logistics operators.

- Founded: October 2022
- Contact: **info@dominionlogisticsinc.com**

---

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, overview, clickable service cards, value props, CTA |
| About | `about.html` | Company story and operating principles |
| Services | `services.html` | Detailed breakdown of all 7 core services (anchor-linked from home) |
| Mission & Vision | `mission-vision.html` | Mission, vision, and values |
| Testimonials | `testimonials.html` | 6 client testimonials with photos |
| Contact | `contact.html` | Contact details and inquiry form (mailto handoff) |
| 404 | `404.html` | Custom not-found page — GitHub Pages serves this automatically |

---

## Project structure

```
dominion-logistics-inc/
├── index.html                # Home
├── about.html                # About Us
├── services.html             # Services (with anchor sections)
├── mission-vision.html       # Mission & Vision
├── testimonials.html         # Testimonials
├── contact.html              # Contact
├── 404.html                  # Custom 404 page
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Crawler directives
├── assets/
│   ├── css/
│   │   └── styles.css        # Full design system + responsive rules
│   ├── js/
│   │   └── main.js           # Mobile nav, form handling, active-link
│   └── images/
│       ├── logo.svg          # Navy wordmark with silver-navy arc
│       ├── logo-white.svg    # White variant for dark footer
│       ├── favicon.svg       # Browser tab icon
│       ├── hero-home.jpg     # Home hero
│       ├── hero-about.jpg    # About hero
│       ├── hero-services.jpg # Services hero
│       ├── hero-contact.svg  # Contact page — custom SVG (route/waypoint motif)
│       ├── banner-fleet.jpg  # Home mid-page banner
│       ├── why-dominion.jpg  # "Why Dominion" section background
│       ├── platform-preview.svg    # Home operator console mockup — custom SVG
│       ├── mission-vision-graphic.svg  # Constellation graphic — custom SVG
│       ├── service-tms.svg          # TMS integration hub — custom SVG
│       ├── service-analytics.svg    # Analytics dashboard — custom SVG
│       ├── service-dispatch.jpg     # Dispatch — photo
│       ├── service-driver.jpg       # Driver workflow — photo
│       ├── service-maintenance.jpg  # Predictive maintenance — photo
│       ├── service-billing.jpg      # Billing — photo
│       ├── service-consulting.jpg   # Consulting — photo
│       └── testimonials/
│           ├── anne-marie-h.jpg
│           ├── brielle-s.jpg
│           ├── francis-t.jpg
│           ├── george-dc.jpg
│           ├── hamelton-w.jpg
│           └── mentese-e.jpg
├── README.md                 # This file
├── LICENSE                   # Proprietary — Dominion Logistics
└── .gitignore
```

---

## Design system

| Token | Value | Use |
|-------|-------|-----|
| Navy | `#0F2C4C` | Primary brand, headings, buttons |
| Navy Deep | `#0A1F36` | Emphasis, footer background |
| Charcoal | `#333F48` | Body text |
| Silver | `#B4BCC4` | Accents, dividers, hairlines |
| Silver Soft | `#D9DDE1` | Subtle borders on dark backgrounds |
| Neutral | `#F5F6F8` | Alternating section backgrounds |
| White | `#FFFFFF` | Base background |

**Typography**
- Display: **Playfair Display** (serif — echoes the logo)
- Body: **Inter** (clean sans-serif)
- Utility / labels: **IBM Plex Mono** (eyebrows, numbering, data)

Fonts load from Google Fonts. No download step required.

---

## Running locally

No build step. Serve the folder any way you like:

**Python (recommended — comes preinstalled on macOS and most Linux)**
```bash
cd dominion-logistics-inc
python3 -m http.server 8000
# open http://localhost:8000
```

**Node**
```bash
npx serve .
```

**Or just double-click `index.html`** in any browser. (Some browsers restrict local `file://` requests. If fonts or navigation misbehave, use one of the server options above.)

---

## Pushing to GitHub

### 1. Create a new repo on GitHub
Go to [github.com/new](https://github.com/new), name it something like `dominion-logistics-inc` (or whatever you prefer), leave it public if you want the site live on GitHub Pages, and click **Create repository**. Don't initialize with README or LICENSE — this project already has them.

### 2. Push this project
From inside the `dominion-logistics-inc/` folder:
```bash
git init
git add .
git commit -m "Initial commit — Dominion Logistics marketing site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

---

## Deploying to GitHub Pages

### Option A — GitHub Pages (simplest, free)

1. In your GitHub repository, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
3. Click **Save**. Within a minute the site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Custom domain** (e.g. `dominionlogisticsinc.com`):
1. In the same **Settings → Pages** screen, enter your domain under **Custom domain** and save. GitHub will create a `CNAME` file in your repo.
2. In your DNS provider (GoDaddy, Cloudflare, Namecheap, etc.), add these records:
   - Four `A` records for the apex domain pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `<your-username>.github.io`
3. Wait for DNS to propagate (usually a few minutes to a few hours), then check **Enforce HTTPS** back in the Pages settings.
4. **Update `sitemap.xml` and `robots.txt`** to use your real domain instead of the placeholder — see the comment at the top of each file.

### Option B — Netlify

1. Log into [Netlify](https://app.netlify.com/), click **Add new site → Import an existing project**.
2. Connect your GitHub repo.
3. Build command: *(leave blank)* • Publish directory: `/`
4. Deploy. Custom domain settings live in **Domain management**.

### Option C — Vercel

1. Log into [Vercel](https://vercel.com/), click **Add New… → Project**.
2. Import your GitHub repo.
3. Framework preset: **Other** (static). Root directory: `.`.
4. Deploy.

---

## Responsive design

Fully responsive from 320 px up. Key breakpoints:

- **Mobile phones** (iPhone SE and up, Android narrow viewports) — 320–640 px
- **Tablets** (iPad, Android tablets) — 640–960 px
- **Laptops** — 960–1200 px
- **Desktops** — 1200 px+

Behaviors baked in:
- Mobile nav collapses to a hamburger with a slide-in panel
- Services grid scales from 1 → 2 → 3 columns
- Split heros stack to single column below 900 px
- All images use `object-fit: cover` and explicit `width`/`height` to prevent layout shift
- Below-fold images use `loading="lazy"`
- Reduced-motion preferences are respected
- Keyboard focus is visible throughout

---

## Contact form

The form uses a **mailto handoff** — on submit, it opens the user's default mail client with a pre-filled subject and body addressed to `info@dominionlogisticsinc.com`.

To upgrade to a proper backend form later, replace the JS handler in `assets/js/main.js` with a `fetch()` POST to your endpoint. [Formspree](https://formspree.io/), [Basin](https://usebasin.com/), [Netlify Forms](https://docs.netlify.com/forms/setup/), and a custom API all work with the existing HTML unchanged.

---

## ⚠️ Placeholder content to replace before launch

The site currently ships with a few stand-ins that need real content swapped in. Each is marked with an HTML comment in the relevant file.

1. **Testimonial quote text and role labels** (`testimonials.html`)
   The 6 photos and names are real (Anne Marie H., Brielle S., Francis T., George D.C., Hamelton W., Mentese E.). The **quote wording and job titles** under each name are professionally written stand-ins — replace with the client's real approved statement and actual title before publishing.

2. **Sitemap URLs** (`sitemap.xml`) — update all `<loc>` values to your real domain.

3. **robots.txt sitemap URL** (`robots.txt`) — update to your real domain.

4. **Copyright year** in the footer updates automatically via JavaScript — no action needed.

---

## Browser support

Tested and working in the current versions of Safari (macOS, iOS), Chrome (desktop, Android), Firefox, and Edge. Uses modern CSS (`clamp()`, `backdrop-filter`, custom properties, grid). Graceful degradation on older browsers — layouts stay usable.

---

## SEO essentials

Already included:
- Descriptive `<title>` and `<meta name="description">` on every page
- Open Graph and Twitter Card meta for rich link previews
- Canonical URLs on every page
- `sitemap.xml` and `robots.txt` at the root
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Descriptive alt text on all images

Before publishing, update the placeholder domain (`dominionlogisticsinc.com`) in `sitemap.xml`, `robots.txt`, and the canonical/OG tags in each `.html` file to match your live domain.

---

## License

Proprietary. See `LICENSE`.

---

## Credits

Site design and build: Dominion Logistics, Inc.
Typography: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Inter](https://fonts.google.com/specimen/Inter), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — all Open Font License.
