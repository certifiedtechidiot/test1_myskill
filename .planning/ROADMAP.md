# Roadmap: Luxury Real Estate & Construction Landing Page

- [x] **Phase 1: Project Intake & Design System Tokens**
  - Define CSS tokens for color palette, editorial serif typography, glassmorphism, spacing, and 6-state interactions.
  - Establish reset and base styles adhering to Hallmark and Impeccable guidelines.

- [x] **Phase 2: Section 1 — Hero with Layered 3D Depth**
  - 24px rounded hero container with full-bleed dusk cliffside architectural imagery.
  - Floating top navigation bar with brand logo, 5 pill nav links ("Home" active in solid white, 4 in frosted glass), 3 frosted circular social buttons, and solid white pill phone CTA.
  - Uppercase sans-serif subheading ("Upgrade your life with smart home technology").
  - Center-spanning giant uppercase serif "LEON HOME" text masked behind foreground architectural roof and elements.
  - Two floating dark frosted glass stat cards ("5.9K+" and "10K+") on right half.
  - Centered solid white pill bottom CTA ("DISCOVER MORE" with circular black arrow icon).

- [x] **Phase 3: Section 2 — Value Proposition (3-Column Asymmetric Grid)**
  - Centered two-line serif title ("Experience Excellence / In Real Estate").
  - Left column: bold subtitle, muted gray paragraph, solid black pill CTA ("About Us"), "Our Partner:" label with 3 grayscale partner logos.
  - Center column: 3/4 aspect-ratio vertical rounded image of luxury coastal pool at twilight.
  - Right column: stacked feature blocks ("Expert Guidance" & "Wide Property Selection") with 1px dividers, and bottom "Reviews" block with 3 overlapping avatars, dark rating badge, and "4.9 Customer Ratings".

- [x] **Phase 4: Section 3 — Team Showcase (Full-Width Black Band)**
  - Full-width #000000 background section with generous padding.
  - Left side (60%): 3-column row of vertical rounded portrait cards with member name and gray role below each, plus dark fade gradient over left edge.
  - Right side (40%): white serif heading ("Meet Our Expert Team"), muted gray description, solid white pill CTA ("View All").

- [x] **Phase 5: Section 4 — Featured Projects Carousel & Footer**
  - Header row: 2-column split with left-aligned two-line serif title ("Find Your Dream Home Today") and right-aligned intro paragraph.
  - Interactive carousel track: 3-card layout (center card 50% width, opaque; side cards smaller, faded with white gradient overlay).
  - Card structure: rounded image container with top-left frosted glass pill ("Available Property" + green status dot), and flex bottom row with title ("Modern Family Home") and price ("$4,500,000" / "$4,500,00").
  - Complete editorial footer, keyboard accessibility, and mobile responsiveness.

- [x] **Phase 6: Quality Verification & Anti-Slop Audit**
  - Ran `sloplint.mjs` against `index.html`, `styles.css`, `tokens.css`, and `base.css`: 0 FAILURES.
