# Launch Checklist for danielmolloy.com Redesign

## Pre-Launch

### WordPress Setup
- [ ] Move WordPress site to `cms.danielmolloy.com` subdomain
  - [ ] Update WordPress site URL in Settings → General
  - [ ] Update permalinks structure (ensure date-based: `/%year%/%monthnum%/%day%/%postname%/`)
  - [ ] Enable REST API access (should be enabled by default)
  - [ ] Test REST API endpoint: `https://cms.danielmolloy.com/wp-json/wp/v2/posts`
  - [ ] Update DNS to point `cms.danielmolloy.com` to WordPress hosting

### Next.js Environment Variables
- [ ] Set `NEXT_PUBLIC_WP_API_URL` to `https://cms.danielmolloy.com/wp-json/wp/v2`
- [ ] Test WordPress API connectivity from Next.js app

### Assets
- [ ] Upload high-res portrait image (>=2000px wide) to `/public/portrait.jpg`
- [ ] Update `components/hero.tsx` to use actual portrait image
- [ ] Add logo/wordmark if available
- [ ] Add Misura.ai logo if needed

### Content
- [ ] Add testimonials/reviews section (once URL is provided)
- [ ] Confirm Calendly link is correct: `https://calendly.com/d4nmolloy/book-a-call`
- [ ] Verify all blog posts are loading correctly
- [ ] Test all internal links

### SEO
- [ ] Verify sitemap is generating: `https://danielmolloy.com/sitemap.xml`
- [ ] Verify robots.txt: `https://danielmolloy.com/robots.txt`
- [ ] Test all redirects (especially `/blog-posts` → `/blog`)
- [ ] Add structured data (JSON-LD) for Person/Organization if needed
- [ ] Verify OpenGraph images are generating correctly

### Performance
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Test Core Web Vitals
- [ ] Enable Next.js Image Optimization

### Domain & DNS
- [ ] Point `danielmolloy.com` A/CNAME records to Next.js hosting (Vercel/Netlify/etc.)
- [ ] Set up SSL certificate
- [ ] Verify domain is resolving correctly

## Launch Day

### Final Checks
- [ ] All pages load correctly
- [ ] Blog posts preserve original URLs
- [ ] Navigation works on mobile and desktop
- [ ] Forms/CTAs are functional
- [ ] No console errors
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor WordPress API response times
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor analytics (if applicable)

## Post-Launch

### SEO Monitoring
- [ ] Submit new sitemap to Google Search Console
- [ ] Monitor 404 errors and fix any broken links
- [ ] Check that old URLs redirect properly
- [ ] Monitor search rankings for key terms

### Content Updates
- [ ] Add testimonials once source is available
- [ ] Update case studies/work examples as needed
- [ ] Keep blog content fresh

### Performance Optimization
- [ ] Monitor Core Web Vitals in Google Search Console
- [ ] Optimize slow-loading pages
- [ ] Consider implementing ISR for blog posts if needed

## Notes

- WordPress REST API should remain publicly accessible for Next.js to fetch content
- Keep WordPress site at `cms.danielmolloy.com` for content management
- All blog post URLs should preserve original format: `/{year}/{month}/{day}/{slug}/`
- Test redirects thoroughly before launch to avoid SEO issues
