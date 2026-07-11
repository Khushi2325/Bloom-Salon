# Bloom Salon

<p align="center">
  <img src="public/readme-logo.svg" alt="Bloom Salon logo" width="900" />
</p>

Bloom Salon is a premium salon website built with React and Vite. It is designed to feel elegant, clear, and modern, with dedicated pages for services, gallery, about, reviews, contact, and appointments.

## Overview

The site focuses on a polished brand presentation, smooth navigation, and a strong booking flow. It combines responsive layouts, subtle motion, and reusable UI components to keep the experience clean on desktop and mobile.

## Key Features

- Luxury-style homepage with a strong hero section
- Dedicated pages for services, gallery, about, reviews, contact, and appointment booking
- Responsive navbar, footer, and floating booking CTA
- Animated interface elements for a more premium feel
- Theme support and reusable component structure

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Wouter
- TanStack React Query
- Radix UI components

## Getting Started

### Prerequisites

- Node.js 18 or newer
- pnpm

### Install Dependencies

```bash
pnpm install
```

### Run the App

```bash
pnpm dev
```

The app runs at `http://localhost:5173/` by default.

### Build for Production

```bash
pnpm build
```

### Preview the Production Build

```bash
pnpm serve
```

## Scripts

- `pnpm dev` - start the development server
- `pnpm build` - create a production build
- `pnpm serve` - preview the production build
- `pnpm typecheck` - run TypeScript checks

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    layout/
    ui/
  hooks/
  lib/
  pages/
public/
  favicon.svg
  opengraph.jpg
  readme-logo.svg
  robots.txt
```

## Notes

- The project uses the `@/` path alias for imports from `src/`.
- The README logo is a custom SVG added for GitHub presentation.
- The app is structured so it can be extended with more salon features later.