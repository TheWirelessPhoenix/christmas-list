---
name: Yuletide Hearth
colors:
  surface: '#fff8ef'
  surface-dim: '#e3d9c1'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fdf3da'
  surface-container: '#f7edd4'
  surface-container-high: '#f1e8cf'
  surface-container-highest: '#ece2c9'
  on-surface: '#201b0c'
  on-surface-variant: '#414941'
  inverse-surface: '#35301f'
  inverse-on-surface: '#faf0d7'
  outline: '#727970'
  outline-variant: '#c1c9be'
  surface-tint: '#3a6843'
  primary: '#204e2b'
  on-primary: '#ffffff'
  primary-container: '#386641'
  on-primary-container: '#afe2b3'
  inverse-primary: '#a0d3a5'
  secondary: '#a7373b'
  on-secondary: '#ffffff'
  secondary-container: '#ff7a7a'
  on-secondary-container: '#74101a'
  tertiary: '#244e0b'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b6722'
  on-tertiary-container: '#b0e490'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcefc0'
  primary-fixed-dim: '#a0d3a5'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#22502d'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#861f25'
  tertiary-fixed: '#bdf19c'
  tertiary-fixed-dim: '#a2d582'
  on-tertiary-fixed: '#082100'
  on-tertiary-fixed-variant: '#26500d'
  background: '#fff8ef'
  on-background: '#201b0c'
  surface-variant: '#ece2c9'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system crafts an affectionate, nostalgic, yet modern digital hearth for holiday gift exchanges. Grounded in familial warmth, joyful anticipation, and thoughtful coordination, it balances vintage holiday charm with modern SaaS utility. 

The aesthetic style is **Warm Editorial Modernism**—anchored by tactile paper textures, delicate organic tones, structured card layouts, and refined typographic contrast. It avoids synthetic, overly commercial holiday tropes (such as harsh neon reds, excessive tinsel, or plasticky snow animations) in favor of deep pine greens, crisp spiced reds, and toasted parchment backgrounds. 

The emotional tone balances cozy togetherness with stress-free clarity, ensuring every family member—from tech-savvy siblings to less digital grandparents—feels welcome, delighted, and effortlessly organized.

## Colors

The palette directly honors the natural, heritage shades of the winter season:

- **Primary Hunter Green (`#386641`):** Represents evergreen boughs, stability, and structure. Used for core interactive elements, high-level navigation, primary buttons, and dominant headers.
- **Secondary Crimson Red (`#BC4749`):** A warm, festive berry red. Used selectively for call-outs, high-priority gift tags, vital actions, claim indicators, and delightful holiday accents.
- **Tertiary Olive & Celadon (`#6A994E` / `#A7C957`):** Muted botanical midtones. `#6A994E` handles secondary actions, progress fills, and supporting badges; `#A7C957` operates as a gentle status background tint for claimed items and light emphasis.
- **Neutral Parchment (`#F2E8CF`):** A warm, comforting paper background. It replaces clinical, sterile white with the feel of bespoke stationery.
- **Surface & Text Extensions:** Pure crisp white (`#FFFFFF`) is reserved for card interiors and pop-up surfaces to maximize readability against the parchment ground. Deep roasted spruce (`#1B2E1E`) serves as the ultra-legible high-contrast body copy tone.

## Typography

The typographic hierarchy pairs literary warmth with functional clarity:

- **Headlines (Newsreader):** A timeless, editorial serif with refined calligraphic details. It infuses section headers, person profile banners, and gift list titles with literary holiday warmth, evocative of personalized cards and family storybooks.
- **Body & Labels (Plus Jakarta Sans):** A friendly, contemporary geometric sans-serif with subtle humanist curves. Its open counters and robust legibility ensure item descriptions, purchase links, prices, and status indicators read cleanly at smaller scale on mobile screens.
- **Stylistic Conventions:** Large headline serifs embrace soft italic accents when denoting personal touches (e.g., *“Emily’s Holiday Wishes”* or *“Secret Santa Notes”*). Badges and tags use uppercase tracking (+0.03em to +0.05em) in `label-sm` and `label-md` for quick visual scanning.

## Layout & Spacing

The layout adopts a flexible, bounded fluid grid that balances editorial breathing room with responsive density:

- **Desktop (1024px+):** Max-width container of `1280px` with 12 columns, `1.5rem` gutters, and `3rem` outer margins. Wishlist cards align in structured 3-column or 4-column responsive formations.
- **Tablet (768px – 1023px):** 8-column layout with `1.25rem` gutters and `2rem` outer margins, displaying wishlist items in 2-column card pairs.
- **Mobile (< 768px):** 4-column layout utilizing `1rem` gutters and `1.25rem` outer margins. Wishlist items collapse into single-column vertical stacks for frictionless thumb navigation.
- **Component Rhythm:** Interior card padding strictly utilizes `space-md` (compact cards) and `space-lg` (featured items). Vertical spacing between distinct family member boards and list categories adheres to `space-xl`.

## Elevation & Depth

Visual hierarchy rejects harsh digital drop shadows, instead using **tonal layering and warm ambient illumination**:

- **Canvas Foundation:** The primary canvas sits on parchment (`#F2E8CF`), creating an organic, unbleached baseline.
- **Surface Tiering:** Cards and floating panels adopt clean crisp white surfaces (`#FFFFFF`) or tinted parchment sheets (`#FAF6ED`). This creates natural card-stock separation without artificial edges.
- **Warm Ambient Shadowing:** Floating modals, dropdowns, and hover states feature extra-diffused, soft-drop shadows tinted with pine and umber undertones (`rgba(27, 46, 30, 0.08)` blur 16px, spread -2px, y-offset 6px).
- **Subtle Organic Borders:** Cards, tags, and inputs leverage hairline framing using a muted tint of Hunter Green (`rgba(56, 102, 65, 0.14)`) or Olive to anchor them to the page like fine stationery.

## Shapes

The design system embraces a **Rounded (Level 2)** geometry:
- Default elements (cards, input fields, containers) feature an 8px (`0.5rem`) corner radius.
- Larger group surfaces and modal containers expand to 16px (`1rem`).
- Pills and interactive badges (status chips, claim tags, priority indicators, circular avatar cutouts) apply full pill radius (`9999px`) to emphasize a friendly, gift-tag aesthetic.

## Components

### 1. Wishlist Item Cards
- **Base:** Pure white surface (`#FFFFFF`) bound by a 1px soft border (`rgba(56, 102, 65, 0.14)`), `0.5rem` border-radius, and padded with `space-lg`.
- **Header Section:** Features the item title in `headline-sm` (`Newsreader`), priority badge on the top right, and price range indicator beneath in `label-md`.
- **Media Preview:** Optional rounded image thumbnail (`0.5rem` radius) showcasing the gift item.
- **Body & Notes:** Notes from the recipient are styled in `body-sm` inside a muted parchment inset container (`#FAF6ED`) with an optional italicized personal quote style.
- **Footer Section:** Contains external store link icon button, price details, and the primary "Claim" button.

### 2. Status Chips & Priority Badges
- **Claimed Status:** 
  - *Unclaimed / Available:* Muted border in Sage (`#6A994E`), text in Hunter Green (`#386641`), background transparent or soft cream.
  - *Claimed / Secret:* Filled with Celadon background (`#A7C957` at 25% opacity), Hunter Green text, accompanied by a discreet wrapped gift icon.
  - *Claimed by You:* Hunter Green background (`#386641`), white text (`#FFFFFF`), with an inline toggle to unclaim.
- **Priority Badges:**
  - *High / Most Wanted:* Pill shape, Crimson Red background (`#BC4749`), white text (`#FFFFFF`), bold holiday star icon.
  - *Medium:* Olive background (`#6A994E`), white text.
  - *Low / Nice-to-Have:* Cream background (`#F2E8CF`), Hunter Green text.

### 3. Buttons & Interactive Links
- **Primary Action (Claim Gift, Add Item):** Solid Hunter Green (`#386641`) with white text (`#FFFFFF`), hover transition to deep evergreen (`#27472D`).
- **Urgent / High-Priority Action:** Solid Crimson Red (`#BC4749`) with white text.
- **Secondary Action:** Transparent fill, 1.5px solid border in Hunter Green, matching text.
- **Store External Links:** Styled as inline pill anchors with a subtle arrow-up-right icon, colored in Sage Green (`#6A994E`), with hover underline.

### 4. Input Fields & Form Controls
- **Text Inputs & Textareas:** Off-white background, 1px Hunter Green border at 20% opacity. On focus, the border shifts to full Hunter Green (`#386641`) with an ambient 3px outer glow in light olive.
- **Checkboxes & Radios:** Hunter Green fill when checked with a crisp white checkmark; subtle rounded corners (4px radius for checkboxes).

### 5. Family Sharing & Navigation Bar
- **Family Switcher Bar:** A horizontal scrolling strip featuring rounded avatar bubbles for each family member, bordered with Christmas ribbons or festive accents. Active member displays a Hunter Green border ring and an elevated cream badge.
- **Progress Gauge:** A subtle bar showing percentage of items claimed across a member's list, rendered in Olive Green (`#6A994E`) over a light parchment track.