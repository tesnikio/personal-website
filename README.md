# Nikita Teslyuk — Personal Website

A minimalist personal website for Nikita Teslyuk, AI/Software Engineer and entrepreneur. The site highlights work, social links, and a clean dark/light visual system with a time-based dark theme.

## Features

- Dark theme automatically enabled from 6pm–8am (local time)
- Animated hero layout and clean typography
- Social links and contact CTAs
- Theme toggle with manual override

## Tech Stack

- Astro
- React (islands)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Getting Started

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview the build

## Customization

- Main content: `src/pages/index.astro`
- Layout shell: `src/layouts/BaseLayout.astro`
- Theme toggle: `src/components/ThemeToggle.tsx`
- Styles: `src/index.css`
