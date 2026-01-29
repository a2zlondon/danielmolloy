# danielmolloy.com

A modern, conversion-focused website for Daniel Molloy's fractional CTO services, built with Next.js and headless WordPress.

## Features

- **Headless WordPress**: Content managed in WordPress, rendered by Next.js
- **SEO-Optimized**: Preserves all existing blog post URLs, sitemap, robots.txt
- **Apple-Inspired Design**: Charcoal and crème color scheme with clean typography
- **Three-Tier Pricing**: Day Rate, Monthly Retainer, and Embedded Fractional CTO
- **Responsive**: Mobile-first design with shadcn/ui components

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **CMS**: WordPress (headless via REST API)
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- WordPress site (for content)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

4. Update `.env.local` with your WordPress API URL:
   ```
   NEXT_PUBLIC_WP_API_URL=https://cms.danielmolloy.com/wp-json/wp/v2
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── [year]/[month]/[day]/[slug]/  # Blog post dynamic routes
│   ├── about/               # About page
│   ├── blog/                # Blog index
│   ├── contact/             # Contact page
│   ├── work-with-me/        # Pricing/services page
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── hero.tsx             # Homepage hero section
│   ├── pricing-tiers.tsx    # Pricing cards
│   ├── capabilities.tsx     # Skills/capabilities section
│   └── ...
├── lib/                     # Utilities
│   ├── wp.ts                # WordPress API client
│   └── utils.ts             # General utilities
└── public/                  # Static assets
```

## WordPress Setup

The site uses WordPress as a headless CMS. After launch:

1. Move WordPress to `cms.danielmolloy.com` subdomain
2. Ensure REST API is enabled (default in WordPress)
3. Set permalink structure to: `/%year%/%monthnum%/%day%/%postname%/`
4. Update `NEXT_PUBLIC_WP_API_URL` environment variable

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable: `NEXT_PUBLIC_WP_API_URL`
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted (Node.js server)

## Environment Variables

- `NEXT_PUBLIC_WP_API_URL`: WordPress REST API base URL (required)

## Blog Post URL Preservation

All blog posts maintain their original WordPress permalink structure:
- Format: `/{year}/{month}/{day}/{slug}/`
- Example: `/2024/09/20/the-ctos-role-the-decision-maker-behind-the-scenes/`

This ensures zero SEO impact during migration.

## Launch Checklist

See [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for a complete pre-launch checklist.

## License

Private project - All rights reserved.
