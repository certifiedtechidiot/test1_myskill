# LEON HOME — Luxury Real Estate & Architectural Construction

A modern, editorial luxury construction and real estate landing page featuring high-contrast editorial layouts, glassmorphic UI elements, and layered 3D typography.

Built using the **Hallmark** design framework and verified with `sloplint` for zero-slop craft standards.

---

## 🌟 Key Features

1. **Layered 3D Depth Hero**:
   - Ultra-modern cliffside architecture visual at dusk with 24px container radius.
   - Giant uppercase serif typography (`LEON HOME`) spanning full width, physically masked behind cantilevered concrete roof slabs and coastal foliage for true foreground depth.
   - Floating dark glass stat cards (`5.9K+` and `10K+`) with frosted overlays (`rgba(255, 255, 255, 0.15)` & `backdrop-filter: blur(12px)`).
   - Centered solid white discovery pill CTA with circular arrow badge.

2. **Top Floating Navigation**:
   - High-contrast frosted glass pill cluster with active solid pill state.
   - Frosted circular social icons (LinkedIn, Instagram, X).
   - Direct concierge contact pill (`+1 (800) 458-2900`).

3. **Value Proposition (3-Column Asymmetric Grid)**:
   - Centered 2-line serif title on pure white background.
   - Left column: bold subtitle, narrative, solid pill CTA, and recognized architectural partner emblems (`ARCH-DIGEST`, `FOSTER+CO`, `DEZEEN`).
   - Center column: 3:4 vertical card showcasing a luxury coastal property with lit pool at twilight.
   - Right column: stacked feature blocks (`Expert Guidance`, `Wide Property Selection`) and reviews counter with overlapping customer avatars and `4.9` rating badge.

4. **Team Showcase (Full-Width Black Band)**:
   - High-contrast stark black (`#0a0a0a`) editorial band.
   - 3-column portrait cards with dark gradient edge fade over the first card.
   - Principal architect and leadership profiles with paired serif headline block and white pill button.

5. **Featured Projects Carousel**:
   - 2-column header row with title and intro text.
   - Horizontal showcase with active center card (50% width, fully opaque) and cropped, faded side cards.
   - Available property status badge with live emerald indicator dot and price display.
   - Accessible keyboard and button controls.

---

## 🛠️ Tech Stack & Standards

- **Semantic HTML5** & **Modern CSS3** (CSS Custom Properties declared at `:root`).
- **Typography**: `Playfair Display` (High-contrast editorial serif) & `Plus Jakarta Sans` (Geometric sans-serif).
- **Zero-Dependency Vanilla JavaScript** for interactive carousel and smooth navigation.
- **Accessibility & Compliance**: Strict `:focus-visible` styling, `:active`/`:disabled` states, reduced motion fallbacks, and 0 sloplint errors.

---

## 🚀 Running Locally

```bash
# Start local Node.js static preview server
node serve.js
```
Open [http://localhost:3000/](http://localhost:3000/) in your browser.

---

## 📁 Repository Structure

```
├── index.html              # Main landing page markup
├── styles.css              # Custom editorial stylesheet
├── tokens.css              # Global design tokens (colors, fonts, radii, spacing)
├── base.css                # Base reset & accessibility rules
├── app.js                  # Carousel logic & smooth scrolling
├── serve.js                # Local HTTP preview server
├── BUSINESS_CONTEXT.md     # Business profile & precast engineering dossier
└── README.md               # Project documentation
```
