# Design System Document: Titanium Industrial

## 1. Overview & Creative North Star: "The Kinetic Monolith"
This design system is built for high-stakes engineering environments where precision is non-negotiable and the aesthetic is unapologetically industrial. Our Creative North Star, **"The Kinetic Monolith,"** treats the interface as a physical piece of machined hardware. 

We break the "standard SaaS" look by rejecting soft edges and decorative fluff. Instead, we use aggressive 0px radiuses, high-contrast neon accents, and tonal layering that mimics the depth of an integrated command center. The layout should feel "machined"—intentional, heavy, and structurally sound. We embrace asymmetry to draw the eye toward critical data, treating white space not as "empty" but as "clearance" between functional components.

## 2. Colors & Surface Logic
The palette is rooted in the deep, cold tones of brushed titanium, punctuated by high-visibility "Terminal Neon" for critical interactions.

### The "No-Line" Rule
**Borders are an admission of failure in hierarchy.** In this system, 1px solid borders for sectioning are strictly prohibited. Boundaries are defined exclusively through background shifts. A `surface-container-low` section sitting on a `surface` background provides all the definition a professional user needs.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical plates stacked in a rack.
*   **Base:** `surface` (#0e0e0f) – The chassis.
*   **Recessed:** `surface-container-low` (#131314) – Used for secondary sidebars or background utility zones.
*   **Raised:** `surface-container-high` (#1f1f21) – For primary content areas.
*   **Interactive/Active:** `surface-container-highest` (#262627) – For the active state of a container.

### The "Glass & Gradient" Rule
To prevent the dark mode from feeling "flat," use **Subtle Axial Gradients**. Apply a linear gradient (45deg) from `surface-container-low` to `surface-container-high` on large panels. For CTAs, a gradient from `primary` (#8eff71) to `primary-container` (#2ff801) creates a "backlit terminal" effect that flat color cannot replicate.

## 3. Typography: Neo-Grotesque Precision
We use **Inter** for its neutral, high-legibility "engineering" feel, paired with **Space Grotesk** for labels to evoke technical schematics.

*   **Display (Large/Med):** 3.5rem / 2.75rem. Use for high-level KPIs or main section headers. Letter spacing should be tightened (-0.02em) to feel like a solid block of metal.
*   **Headlines:** 2.0rem to 1.5rem. Used for module titles.
*   **Body:** 1rem (Large) for primary reading; 0.875rem (Medium) for standard data.
*   **Labels (Space Grotesk):** 0.75rem. All technical data, timestamps, and "metadata" must use Space Grotesk. This font switch signals to the user that they are looking at "raw data" vs. "interface instruction."

## 4. Elevation & Depth
In a rugged industrial system, "softness" is the enemy. Elevation is achieved through light, not shadow.

*   **The Layering Principle:** Depth is "Machined." To lift a card, move it from `surface-container` to `surface-container-highest`.
*   **Ambient Shadows:** If a floating modal is required, use a massive 64px blur at 8% opacity using the `on-surface` color. It should feel like a faint glow from a screen, not a drop shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in high-glare environments), use `outline-variant` at **15% opacity**. It must be felt, not seen.
*   **Terminal Glass:** Use `backdrop-blur(12px)` on floating navigation or tooltips with a semi-transparent `surface-container-highest`. This mimics a glass HUD overlaying a machine.

## 5. Components

### Buttons
*   **Primary:** `primary` (#8eff71) background, `on-primary` (#0d6100) text. 0px corner radius. High-energy, glowing.
*   **Secondary:** Ghost style. No background. `outline` stroke at 20% opacity. Text in `primary`.
*   **Tertiary:** Text-only in `on-surface-variant`. Used for "Cancel" or low-priority actions.

### Input Fields
*   **States:** Default is a `surface-container-highest` block with a 0px radius. 
*   **Focus:** The bottom edge gains a 2px `primary` (Terminal Neon) underline. No full-box glow.
*   **Error:** Background shifts slightly toward `error_container` with `error` text.

### Cards & Lists
*   **Constraint:** No dividers. Separation is achieved through `16px` or `24px` of vertical clearance or a tonal shift from `surface-container-low` to `surface-container`.
*   **Industrial Lists:** Use Space Grotesk for list indices (e.g., 001, 002) in `primary` to emphasize the "sequence" of operations.

### Data Chips
*   **Rugged Style:** Square corners. `surface-variant` background. If active, the text flips to `primary` and a `primary` 2px left-side "indicator bar" is added.

## 6. Do's and Don'ts

### Do:
*   **DO** use 0px border-radius everywhere. Roundness suggests consumer-grade "softness"; we are building industrial-grade "strength."
*   **DO** use monochromatic grey scales for 90% of the UI, saving the Terminal Neon (`primary`) for the 10% that actually matters.
*   **DO** align text to a strict vertical grid to emphasize the "Neo-Grotesque" architectural feel.

### Don't:
*   **DON'T** use standard 1px #000 dividers. They clutter the "machined" look.
*   **DON'T** use soft drop shadows. If it doesn't look like a physical light source is hitting it, don't use it.
*   **DON'T** use icons with rounded caps. Use sharp, stroke-based iconography that matches the Inter typeface's geometric rigor.