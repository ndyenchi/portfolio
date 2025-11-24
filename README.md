# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

### ✨ UI/UX Implementation
- **Clean, minimalistic design** with consistent spacing, typography, and color palette
- **Light & Dark mode** support with system preference detection
- **Responsive layout** optimized for desktop, tablet, and mobile devices
- **Smooth animations** with fade-in, slide-in effects, and micro-interactions
- **Modular design system** with reusable components and consistent styling

### 🧩 Component Architecture
- **Navbar** - Scroll detection with active section highlighting and mobile menu
- **Hero Section** - Animated welcome section with call-to-action buttons
- **Education** - Academic background display with achievements
- **Experience** - Timeline view of work history with technologies
- **Projects** - Grid layout with project cards, hover effects, and links
- **Skills** - Categorized skill display with visual grouping
- **Contact** - Contact form with validation and social links
- **Footer** - Social media links and copyright information

### 🎨 Design System
- **Custom CSS Variables** for colors, spacing, typography, and shadows
- **Light/Dark Mode** with automatic theme detection and persistence
- **Responsive Breakpoints** following mobile-first approach
- **Reusable Button Styles** (primary, secondary, ghost variants)
- **Card Components** with hover states and transitions
- **Typography Scale** with responsive sizing
- **Custom Animations** for enhanced user experience

### ⚡ Performance Optimizations
- **Build Size**: 24.5 KB CSS, 218 KB JS (gzipped: 5.4 KB CSS, 66.5 KB JS)
- **Vite** for fast development and optimized production builds
- **Tree-shaking** and code splitting for minimal bundle size
- **Optimized images** with lazy loading support
- **CSS-in-JS** avoided in favor of vanilla CSS for better performance

### ♿ Accessibility & SEO
- **WCAG-compliant** contrast ratios and semantic HTML
- **ARIA labels** for interactive elements
- **Keyboard navigation** support throughout
- **SEO meta tags** including Open Graph and Twitter Cards
- **Semantic HTML5** structure for better search engine indexing

## Tech Stack

- **React 19.2.0** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── home.tsx
│   │   ├── education.tsx
│   │   ├── experience.tsx
│   │   ├── Projects.tsx
│   │   ├── skills.tsx
│   │   ├── contact.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/             # Portfolio data
│   │   └── portfolio.ts
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Update Your Information

Edit `/src/data/portfolio.ts` to update:
- Personal information (name, title, bio)
- Skills and technologies
- Work experience
- Projects
- Education
- Contact information

### Theme Colors

Modify CSS variables in `/src/styles/index.css`:
```css
:root {
  --color-primary: 59 130 246;  /* Primary color */
  --color-secondary: 99 102 241; /* Secondary color */
  /* ... other colors */
}
```

### SEO Meta Tags

Update meta tags in `/index.html`:
- Title, description, keywords
- Open Graph tags for social sharing
- Twitter Card information

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Bundle Size**: <250 KB (JS + CSS)

## License

MIT License - feel free to use this template for your own portfolio.

## Acknowledgments

- Design inspired by modern portfolio best practices
- Built with React and Tailwind CSS
- Icons from Heroicons (embedded SVG)
