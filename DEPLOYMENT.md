# Deployment Guide

This guide covers deploying your Next.js site to production.

## Recommended: Vercel (Easiest for Next.js)

### Prerequisites
1. A GitHub account (or GitLab/Bitbucket)
2. A Vercel account (free tier available)
3. Your domain `danielmolloy.com` ready to configure

### Step 1: Push to Git Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Create a repository on GitHub and push
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your repository
4. Vercel will auto-detect Next.js settings
5. **Configure Environment Variables:**
   - `NEXT_PUBLIC_WP_API_URL` - Leave empty for now (uses WordPress.com API)
   - `NEXT_PUBLIC_WPCOM_SITE` - Set to `danielmolloy.com` (if not using NEXT_PUBLIC_WP_API_URL)
6. Click "Deploy"

### Step 3: Configure Domain

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add `danielmolloy.com` and `www.danielmolloy.com`
3. Vercel will provide DNS records to add:
   - **A Record**: Point `@` to Vercel's IP (or use CNAME if your DNS supports it)
   - **CNAME Record**: Point `www` to `cname.vercel-dns.com`
4. Update your DNS at your domain registrar
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 4: WordPress Subdomain Setup

**After deploying Next.js to the root domain:**

1. Set up WordPress on `cms.danielmolloy.com`:
   - If using WordPress.com: Add subdomain in WordPress.com settings
   - If self-hosting: Configure your hosting to serve WordPress at `cms.danielmolloy.com`

2. Update environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Update `NEXT_PUBLIC_WP_API_URL` to: `https://cms.danielmolloy.com/wp-json/wp/v2`
   - Redeploy (or wait for automatic redeploy)

### Step 5: Verify Deployment

- Visit `https://danielmolloy.com` - should show your Next.js site
- Visit `https://cms.danielmolloy.com` - should show WordPress admin
- Check blog posts are loading from WordPress API
- Test all pages and navigation

## Alternative: Netlify

1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Add environment variables (same as Vercel)
7. Configure domain in Netlify dashboard

## Alternative: Self-Hosted (VPS/Docker)

### Using Docker:

1. Create `Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

2. Update `next.config.ts` to enable standalone output:
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // ... rest of config
};
```

3. Build and run:
```bash
docker build -t danielmolloy-site .
docker run -p 3000:3000 -e NEXT_PUBLIC_WP_API_URL=... danielmolloy-site
```

### Using PM2:

```bash
npm run build
npm install -g pm2
pm2 start npm --name "danielmolloy" -- start
pm2 save
pm2 startup
```

## Important Considerations

### Environment Variables
- `NEXT_PUBLIC_WP_API_URL`: WordPress REST API endpoint
- `NEXT_PUBLIC_WPCOM_SITE`: WordPress.com site domain (fallback)

### SEO & Redirects
- Your `next.config.ts` already has redirects configured
- Consider adding more redirects for old WordPress URLs if needed
- Set up sitemap.xml (can be generated dynamically or static)

### Performance
- Images are optimized via Next.js Image component
- Blog posts use ISR (Incremental Static Regeneration) with 1-hour revalidation
- Consider adding caching headers for static assets

### Monitoring
- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor WordPress API response times
- Set up uptime monitoring

## Troubleshooting

### Blog posts not loading
- Check `NEXT_PUBLIC_WP_API_URL` is set correctly
- Verify WordPress REST API is accessible (test in browser)
- Check Vercel/Netlify function logs for API errors

### Images not showing
- Verify `next.config.ts` has correct `remotePatterns`
- Check WordPress media URLs are accessible
- Consider using Next.js Image Optimization or external CDN

### Domain not working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check SSL certificate is issued (automatic on Vercel/Netlify)
