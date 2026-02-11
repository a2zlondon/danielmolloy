# Vercel Setup & Blog Post Guide

## Step 1: Point Your Domain to Vercel

### In Vercel Dashboard:

1. Go to your project: `danielmolloywebsite`
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter: `danielmolloy.com`
5. Vercel will show you DNS records to add

### DNS Configuration:

You'll need to add one of these at your domain registrar:

**Option A: Apex Domain (danielmolloy.com)**
- Add **A Record**:
  - Name: `@` (or leave blank)
  - Value: Vercel's IP address (shown in Vercel dashboard)
  - TTL: 3600 (or default)

**Option B: CNAME (if your DNS supports it)**
- Add **CNAME Record**:
  - Name: `@` (or leave blank)
  - Value: `cname.vercel-dns.com`
  - TTL: 3600

**For www subdomain:**
- Add **CNAME Record**:
  - Name: `www`
  - Value: `cname.vercel-dns.com`
  - TTL: 3600

### Where to Add DNS Records:

- **GoDaddy**: DNS Management → Records
- **Namecheap**: Advanced DNS → Add New Record
- **Cloudflare**: DNS → Add Record
- **Google Domains**: DNS → Custom Records

### Wait for DNS Propagation:
- Usually takes 5-30 minutes
- Can take up to 48 hours (rare)
- Check status in Vercel dashboard

## Step 2: Configure Environment Variables in Vercel

1. In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add these variables:

### For Production Environment:

**If using WordPress.com:**
```
NEXT_PUBLIC_WPCOM_SITE = danielmolloy.com
```

**If using self-hosted WordPress (later):**
```
NEXT_PUBLIC_WP_API_URL = https://cms.danielmolloy.com/wp-json/wp/v2
```

3. Click **Save**
4. **Redeploy** your site (or wait for next push to trigger redeploy)

## Step 3: Verify WordPress Connection

After DNS propagates and environment variables are set:

1. Visit `https://danielmolloy.com/blog`
2. You should see your blog posts loading from WordPress
3. If posts don't appear, check:
   - Environment variables are set correctly
   - WordPress.com site is accessible
   - Vercel deployment logs for errors

## How to Add a New Blog Post

Since you're using **headless WordPress**, you add posts in WordPress and they automatically appear on your Next.js site.

### Method 1: WordPress.com Dashboard

1. Go to `https://danielmolloy.com/wp-admin` (or your WordPress.com dashboard)
2. Click **Posts** → **Add New**
3. Write your post:
   - **Title**: Your post title
   - **Content**: Your post content (supports blocks, HTML, etc.)
   - **Featured Image**: Add a featured image (appears on blog listing)
   - **Categories/Tags**: Organize your post
   - **Excerpt**: Optional - used as preview text
4. Click **Publish**

### Method 2: WordPress.com Mobile App

1. Download WordPress app
2. Sign in to your site
3. Tap **+** → **Post**
4. Write and publish

### After Publishing:

- Your Next.js site will automatically fetch the new post
- Posts appear on `/blog` page
- Individual post URLs: `/YYYY/MM/DD/post-slug`
- **Note**: Due to revalidation (1 hour), new posts may take up to 1 hour to appear. You can:
  - Wait for automatic revalidation
  - Or manually trigger a redeploy in Vercel

### Post URL Structure:

Your posts use WordPress permalink structure:
- Format: `/YYYY/MM/DD/post-slug`
- Example: `/2024/09/23/tech-stack-foundation`

This is preserved from your WordPress settings.

## Troubleshooting

### Blog Posts Not Showing:

1. **Check Environment Variables:**
   - Go to Vercel → Settings → Environment Variables
   - Verify `NEXT_PUBLIC_WPCOM_SITE` is set to `danielmolloy.com`

2. **Check WordPress API:**
   - Visit: `https://public-api.wordpress.com/wp/v2/sites/danielmolloy.com/posts`
   - Should return JSON with your posts
   - If you see an error, WordPress.com API might be restricted

3. **Check Vercel Logs:**
   - Go to Vercel → Your Project → **Deployments** → Click latest deployment → **Functions** tab
   - Look for errors fetching WordPress data

4. **Force Redeploy:**
   - In Vercel → Deployments → Click "..." → **Redeploy**

### Domain Not Working:

1. **Check DNS Propagation:**
   - Use [whatsmydns.net](https://www.whatsmydns.net) to check if DNS has propagated
   - Enter `danielmolloy.com` and check A/CNAME records

2. **Check SSL Certificate:**
   - Vercel automatically provisions SSL
   - Wait 5-10 minutes after adding domain
   - Check in Vercel → Domains → SSL status

3. **Clear Browser Cache:**
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

## Next Steps

1. ✅ Point domain to Vercel (DNS configuration)
2. ✅ Set environment variables in Vercel
3. ✅ Wait for DNS propagation
4. ✅ Test blog posts are loading
5. ✅ Add your first new blog post in WordPress
6. ✅ Verify it appears on your site

## Quick Reference

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Site**: https://danielmolloywebsite.vercel.app (temporary)
- **Production Site**: https://danielmolloy.com (after DNS setup)
- **WordPress Admin**: https://danielmolloy.com/wp-admin (or WordPress.com dashboard)
- **WordPress API**: https://public-api.wordpress.com/wp/v2/sites/danielmolloy.com/posts
