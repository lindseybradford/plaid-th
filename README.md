# Services Portfolio

Built with Next.js, TypeScript, and Tailwind CSS.

Here's some notes on the build:

## Animation thoughts

Scroll-based animations use intersection observer API and are designed to scale with content (eg, dynamic content model from a CMS) and respond to some basic breakpoints. I did add a light pass of responsive though this wasn't explicitely requested in the requirements; possibly it will be part of the live coding step, so I kept it to a light pass in case there's mobile-specific designs planned for that session.

## Accessibility considerations

I've prioritized inclusive design and added accessibility support for each component based on WCAG compliance best practices. Screen-reader and keyboard tabbing is supported (eg, "skip to content", tab to open drawers) and motion preferences are honored so that drawer transitions and scroll animations are toggled based on `prefers-reduced-motion` system settings. I did a light pass to add high contrast support and improve focus management in the CSS as well.

The page is broken up to honor landmark roles with special attention to the navigation structure and proper heading hiearchy.

## About the build

When you run build, Next is configured to generate a static site of complete HTML files to ensure the site is SEO-friendly. I've not added any additional meta tags but usually I'd do a thorough open-graph pass, and potentially account for LD-JSON as well.

_Somet thoughts on the CSS_
I opted for semantic CSS to make the project easy to review/scan but I'd add a caveat that, ideally, using Tailwind's utility classes with an API like [tailwind-variants](https://github.com/heroui-inc/tailwind-variants) make for less redudant, more performant, and minimal styles while remaining centralized and easy to manage.

# Install

Install it

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── components/
│   ├── Drawer.tsx       # Expandable service drawers
│   ├── Section.tsx      # Service sections with state management
│   ├── Sidecar.tsx      # Animated sidebar with section tracking
│   └── TopNavbar.tsx    # Navigation header
├── types.ts             # TypeScript interfaces
└── pages/
    └── index.tsx        # Main page with content and logic
```

## Key Components

- **Sidecar**: Animated sidebar that tracks active sections with character-by-character text animations
- **Section**: Service sections with accordion-style drawers for detailed descriptions
- **Drawer**: Individual expandable items with smooth height transitions
- **TopNavbar**: Fixed navigation header with brand and contact links

## Styling

Uses Tailwind CSS with custom utility classes defined in `globals.css`:

- Responsive grid system with `parent-container` and `parent-grid`
- Semantic component classes for consistent styling
- Animation utilities for responsive transitions

## Content Management

Content is structured as a JavaScript object in `index.tsx`, simulating API data:

- Easy to modify service descriptions and titles
- Scalable structure for additional sections
- Type-safe with TypeScript interfaces

## Performance Optimizations

- **Intersection Observer** for efficient scroll tracking
- **CSS-only animations** for smooth 60fps performance
- **Semantic HTML** for better SEO and accessibility
- **Optimized bundle** with Next.js automatic optimizations
