# MVP Design Labs

A modern web application for a digital product development agency, built with Next.js and TypeScript.

## Overview

MVP Design Labs ([mvpdesignlabs.com](https://mvpdesignlabs.com)) is a professional website showcasing digital product development services, featuring:

- Modern, responsive design with animations
- Dark mode support
- Interactive UI components
- Dynamic content sections
- Performance optimized assets

## Tech Stack

- **Framework:** Next.js 15.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Fonts:** Geist, Inter, Plus Jakarta Sans
- **Icons:** Lucide React
- **Theme:** Dark mode with CSS variables

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
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
├── app/
│   ├── layout.tsx    # Root layout with font configuration
│   ├── page.tsx      # Main page component
│   └── globals.css   # Global styles and CSS variables
├── components/
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/           # Reusable UI components
└── lib/              # Utility functions and configurations
```

## Features

- **Interactive Hero Section:** Dynamic text rotation and floating animations
- **Service Showcase:** Highlighting various development services
- **Portfolio Display:** Showcasing featured projects with hover effects
- **Team Section:** Team member profiles with social links
- **Testimonials:** Client testimonials with image carousel
- **Pricing Plans:** Service pricing with interactive cards
- **FAQ Section:** Expandable questions and answers
- **Contact CTA:** Call-to-action with booking modal
- **Responsive Design:** Optimized for all device sizes

## Development

- Use `npm run lint` to run ESLint
- Use `npm run build` to create a production build
- Use `npm start` to run the production server

## Deployment

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## License

This project is licensed under the MIT License.
