# Leon Home — Luxury Construction & Real Estate Landing Page

A pixel-perfect, editorial-grade implementation of the luxury construction and architectural real estate brand **Leon Home**, adhering strictly to the **Unified Web Development Engine** (GSD spec-driven workflow, Hallmark Anti-AI-Slop standard, AI Design conversion principles, Taste Skill 2.5 screen rhythm, Impeccable director craft, and OpenDesign token discipline).

---

## 🎨 Global Design System & Tokens

* **Color Palette**:
  - Pure White Canvas: `#FFFFFF` (`--color-bg-white`)
  - Stark Black Contrast Section: `#0A0A0B` / `#000000` (`--color-bg-black`)
  - Charcoal Primary Typography: `#111111` (`--color-text-primary`)
  - Muted Editorial Gray: `#666666` (`--color-text-muted`)
  - Light Slate Muted: `#9CA3AF` (`--color-text-light-muted`)
  - Glass Overlays: `rgba(255, 255, 255, 0.12)` with `backdrop-filter: blur(16px)`
  - Dark Frosted Glass Cards: `rgba(18, 20, 26, 0.55)` with `backdrop-filter: blur(18px)`
* **Typography**:
  - Headings & Editorial Titles: **Playfair Display** (High-contrast editorial serif)
  - UI, Meta, Badges & Body: **Plus Jakarta Sans** (Geometric modern sans-serif)
* **Corner Radii**:
  - Hero Outer Container: `28px` (`--radius-hero`)
  - Feature & Team Cards: `18px` (`--radius-card`)
  - Pill Buttons & Status Badges: `9999px` (`--radius-pill`)

---

## 🏛️ Layout & Section Architecture

### 1. Hero Section (Rounded Container, Full-Bleed Architectural Image)
- **Floating Top Bar**: Frosted glass navigation with white serif logo, pill link cluster (solid white active "Home" indicator), circular glass social buttons (LinkedIn, Instagram, X), and solid white phone concierge pill (`+02 390.548.008`).
- **Layered 3D Typography**:
  - Top-left uppercase sans-serif tagline: *"UPGRADE YOUR LIFE WITH SMART HOME TECHNOLOGY"* with coordinates sub-label.
  - Full-width giant uppercase serif brand title: *"LEON HOME"* visually layered behind the cantilevered roofline and pine tree silhouette for genuine 3D architectural depth.
- **Floating Dark Frosted Glass Metric Cards**:
  - Upper-Right: `"5.9K+"` with description *"Purposefully delivering innovative projects around the world."*
  - Lower-Right: `"10K+"` with description *"Award-winning innovative projects delivered globally."*
  - Animated on scroll with interactive micro-hover elevations.
- **Bottom CTA**: Centered white pill button *"DISCOVER MORE"* with circular black right-arrow icon and smooth scroll transition.

### 2. Value Proposition (3-Column Asymmetric Grid on White)
- **Header**: Centered 2-line editorial serif heading: *"Experience Excellence In Real Estate"*.
- **Left Column**: Subheading *"Your Trusted Partner in Finding the Perfect Home"*, editorial copy, black pill button *"About Us"*, and *"Our Partner:"* row featuring **Polymoth**, **BoldShift**, and **Quotient** grayscale emblems.
- **Center Column**: Tall vertical 3:4 aspect-ratio photo frame showcasing a luxury cliffside villa overlooking the ocean at sunset.
- **Right Column**: Two stacked feature items (*"Expert Guidance"*, *"Wide Property Selection"*) separated by 1px subtle divider lines, plus customer reviews block with 3 overlapping avatars and `4.9 Customer Ratings`.

### 3. Team Section (Full-Width Stark Black Container)
- **Container**: Stark black background (`#0A0A0B`), rounded corners (`24px`), expansive padding.
- **Left (60%)**: 3 vertical portrait cards with rounded corners (`18px`), featuring **David Alex** (*Head Manager* — with subtle left-edge dark gradient vignette), **Tiana Korsgaard** (*Sales Marketing*), and **Tiana Dorin** (*Property Agent*).
- **Right (40%)**: Vertically centered serif heading *"Meet Our Expert Team"*, light muted description, and pure white pill CTA button *"View All"*.

### 4. Featured Projects Carousel (White Background)
- **Header**: Split row with left-aligned 2-line serif title (*"Find Your Dream Home Today"*) and right-aligned descriptive paragraph.
- **Interactive 3-Card Carousel**: Center card is large, high-contrast, and focused (*"Modern Family Home" — $4,500,00*), while flanking cards (*"Sunset Modern Villa" — $1,620,00* and *"Luxury Beachfront Villa" — $2,850,00*) are scaled down with outer edge gradient masks.
- **Card Badges**: Frosted glass `"Available Property"` pills with solid white status indicators.
- **Controls**: Interactive prev/next navigation buttons, active indicator dots, click-to-center functionality, touch swipe gestures, and keyboard arrow key navigation.

---

## 🚀 Running Locally

No dependencies required! You can open `index.html` directly in any modern browser, or launch the built-in HTTP server:

```bash
# Using Node.js
node serve.js
# Open http://localhost:3000 in your browser
```

Or using Python:
```bash
python -m http.server 3000
```
