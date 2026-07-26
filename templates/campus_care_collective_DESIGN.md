---
name: Campus Care Collective
colors:
  surface: '#f3faff'
  surface-dim: '#c7dde9'
  surface-bright: '#f3faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e6f6ff'
  surface-container: '#dbf1fe'
  surface-container-high: '#d5ecf8'
  surface-container-highest: '#cfe6f2'
  on-surface: '#071e27'
  on-surface-variant: '#56423c'
  inverse-surface: '#1e333c'
  inverse-on-surface: '#dff4ff'
  outline: '#89726b'
  outline-variant: '#ddc0b8'
  surface-tint: '#9f4122'
  primary: '#9f4122'
  on-primary: '#ffffff'
  primary-container: '#ff8a65'
  on-primary-container: '#752305'
  inverse-primary: '#ffb59e'
  secondary: '#286b33'
  on-secondary: '#ffffff'
  secondary-container: '#abf4ac'
  on-secondary-container: '#2e7238'
  tertiary: '#006398'
  on-tertiary: '#ffffff'
  tertiary-container: '#60b1f2'
  on-tertiary-container: '#004268'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#7f2a0d'
  secondary-fixed: '#abf4ac'
  secondary-fixed-dim: '#90d792'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#07521d'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#94ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004b74'
  background: '#f3faff'
  on-background: '#071e27'
  surface-variant: '#cfe6f2'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1200px
  gutter: 20px
---

## Brand & Style
The design system focuses on creating an atmosphere of safety, empathy, and collective responsibility. The visual direction is **Modern Softness**, blending clean layouts with organic, approachable elements. The goal is to reduce the anxiety associated with reporting stray animals while maintaining a high level of functional clarity for campus-wide coordination.

The aesthetic utilizes a refined version of **Minimalism** layered with **Tactile** qualities. High whitespace preserves focus, while large, friendly interaction points encourage community participation. The design should feel less like a utility tool and more like a helpful neighbor—warm, dependable, and always accessible.

## Colors
The palette is rooted in the natural intersection of campus life and animal welfare. 

- **Primary (Soft Orange):** Used for primary actions, active tracking indicators, and branding elements. It evokes warmth and urgency without causing alarm.
- **Secondary (Sage Green):** Applied to success states, healthy pet statuses, and environmental markers. It grounds the UI in a sense of care and nature.
- **Tertiary (Friendly Blue):** Reserved for informational badges, links, and map utilities. It provides a cool counterpoint to the warmer primary tones.
- **Neutrals:** A slate-based neutral palette is used for text and borders to maintain high legibility and a modern, professional structure.
- **Status Tints:** 
  - *Emergency:* A soft red-coral (#EF5350) for high-priority alerts.
  - *Sick:* A muted amber (#FFB74D) for cautionary status updates.

## Typography
The typography system prioritizes clarity and friendliness. **Plus Jakarta Sans** is used for headlines to provide a modern, slightly rounded geometric feel that aligns with the brand's warmth. **Inter** is utilized for body text and labels to ensure maximum readability, especially for data-heavy pet reports and map descriptions.

Headlines use tighter letter spacing and bold weights to create a strong visual hierarchy. Body text maintains generous line heights to ensure the interface remains airy and easy to scan during quick interactions on the go.

## Layout & Spacing
The layout employs a **Fluid Grid** system that prioritizes a card-based architecture. On desktop, a 12-column grid is used with generous 24px gutters to prevent the UI from feeling cramped. 

**Responsive Behavior:**
- **Mobile (< 600px):** Single column layout. Margins reduce to 16px. Large buttons become full-width for easy thumb-tapping.
- **Tablet (600px - 1024px):** 2-column grid for cards. Margins increase to 24px.
- **Desktop (> 1024px):** Content is centered in a 1200px container. Complex forms use a 2/3 width column to maintain line-length readability.

Navigation remains anchored to the bottom on mobile (App-bar style) and moves to a traditional top-header on desktop.

## Elevation & Depth
This design system uses **Ambient Shadows** and **Tonal Layers** to create a sense of physical presence without looking dated. 

- **Level 0 (Base):** The page background, using a very light neutral tint (#F8F9FA).
- **Level 1 (Cards/Surface):** White surfaces with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)). This is the primary container for pet reports.
- **Level 2 (Interactive/Hover):** A slightly deeper shadow (0px 8px 30px rgba(0,0,0,0.08)) to indicate interactivity.
- **Level 3 (Modals/Overlays):** High elevation with a 20% backdrop blur (Glassmorphism) to keep the user grounded in the campus map context while filling out forms.

## Shapes
The shape language is defined by high-radius curves, reinforcing the "friendly" and "safe" brand pillars. 

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Containers:** Large cards and map overlays use `rounded-xl` (1.5rem / 24px) to create a soft, modern container look.
- **Interactive Badges:** Status indicators and tags are fully pill-shaped to differentiate them from actionable buttons.

## Components

### Buttons & Inputs
Buttons feature high-contrast text and a subtle 1px inner highlight to give them a "squishy," tactile feel. Input fields use a thick 2px border on focus in the Primary Soft Orange to guide the user's attention clearly.

### Status Badges
Status badges are critical for the locator:
- **Normal:** Sage Green background with dark green text.
- **Sick:** Muted Amber background with dark brown text.
- **Emergency:** Soft Red background with white text.
All badges use the `label-sm` typography style and are pill-shaped.

### Report Cards
The primary content unit. Cards must include a thumbnail with a 16px corner radius, a clear "Last Seen" timestamp, and a prominent location tag. The card footer should always contain a single, clear "View Details" or "Update Status" button.

### Interactive Maps
Maps should use a custom-styled light theme with Sage Green highlights for parks and Soft Orange pins for animal sightings. Pins should "pulse" if the report was made within the last hour.

### Report Forms
Multi-step forms are preferred to avoid overwhelming users. Each step should be clearly labeled at the top with a progress indicator using the Primary color.