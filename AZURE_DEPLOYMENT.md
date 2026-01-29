# Azure Deployment Guide

This guide covers deploying your Next.js site to Azure Static Web Apps.

## Prerequisites
1. Azure account (free tier available)
2. GitHub account with your code repository
3. Azure CLI (optional, but helpful)

## Option 1: Azure Static Web Apps (Recommended)

Azure Static Web Apps supports Next.js with server-side rendering and is free for most use cases.

### Step 1: Create Azure Static Web App

**Via Azure Portal:**
1. Go to [portal.azure.com](https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web Apps"
4. Click "Create"
5. Fill in:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `danielmolloy-site` (or your preferred name)
   - **Plan type**: Free (or Standard for custom domains)
   - **Region**: Choose closest to your audience
   - **Deployment details**: 
     - Source: GitHub
     - Sign in to GitHub and authorize Azure
     - Organization: Your GitHub username
     - Repository: Your repository name
     - Branch: `main` (or your default branch)
   - **Build details**:
     - **Build Presets**: Next.js
     - **App location**: `/` (root)
     - **Api location**: Leave empty (or `/api` if you add API routes)
     - **Output location**: `.next`
6. Click "Review + create" then "Create"

**Via Azure CLI:**
```bash
# Login to Azure
az login

# Create resource group
az group create --name danielmolloy-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name danielmolloy-site \
  --resource-group danielmolloy-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --output-location ".next"
```

### Step 2: Configure Build Settings

Azure Static Web Apps will auto-detect Next.js, but you may need to configure:

1. In Azure Portal → Your Static Web App → Configuration → Build configuration
2. Update `build.yml` workflow (created automatically in `.github/workflows/`):

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          lfs: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: ".next"
          api_location: ""
```

### Step 3: Set Environment Variables

1. In Azure Portal → Your Static Web App → Configuration → Application settings
2. Add:
   - `NEXT_PUBLIC_WPCOM_SITE` = `danielmolloy.com`
   - `NEXT_PUBLIC_WP_API_URL` = (leave empty for WordPress.com, or set to your CMS URL)

### Step 4: Configure Custom Domain

1. In Azure Portal → Your Static Web App → Custom domains
2. Click "Add"
3. Enter `danielmolloy.com`
4. Follow DNS instructions:
   - Add a CNAME record pointing to your Static Web App hostname
   - Or add A/AAAA records if using apex domain
5. Azure will automatically provision SSL certificate

### Step 5: Verify Deployment

- Push a commit to trigger deployment
- Check GitHub Actions tab for build status
- Visit your site URL (provided in Azure Portal)
- Verify blog posts load from WordPress API

## Option 2: Azure App Service

For more control, you can use Azure App Service with Node.js runtime.

### Step 1: Create App Service

```bash
# Create App Service Plan
az appservice plan create \
  --name danielmolloy-plan \
  --resource-group danielmolloy-rg \
  --sku FREE \
  --is-linux

# Create Web App
az webapp create \
  --resource-group danielmolloy-rg \
  --plan danielmolloy-plan \
  --name danielmolloy-site \
  --runtime "NODE:20-lts"
```

### Step 2: Configure Deployment

**Via GitHub Actions:**
1. In Azure Portal → Your Web App → Deployment Center
2. Connect to GitHub repository
3. Azure will create a GitHub Actions workflow

**Via Azure CLI:**
```bash
az webapp deployment source config \
  --name danielmolloy-site \
  --resource-group danielmolloy-rg \
  --repo-url https://github.com/YOUR_USERNAME/YOUR_REPO \
  --branch main \
  --manual-integration
```

### Step 3: Configure Build

1. In Azure Portal → Your Web App → Configuration → General settings
2. Set:
   - **Startup Command**: `npm start`
   - **Always On**: Enable (if not on free tier)

### Step 4: Set Environment Variables

Same as Static Web Apps - add in Configuration → Application settings

## Option 3: Azure Container Apps (Advanced)

For containerized deployments:

1. Create `Dockerfile` (see DEPLOYMENT.md)
2. Build and push to Azure Container Registry
3. Deploy to Azure Container Apps

## Cost Comparison

- **Azure Static Web Apps**: Free tier includes 100GB bandwidth/month
- **Azure App Service**: Free tier (F1) available, limited resources
- **Azure Container Apps**: Pay-as-you-go, more expensive

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Verify `output_location` is `.next` (not `out` or `dist`)
- Ensure Node.js version matches (Azure uses Node 18+ by default)

### Blog Posts Not Loading
- Verify environment variables are set correctly
- Check WordPress API is accessible from Azure
- Review Application Insights logs (if enabled)

### Custom Domain Issues
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check SSL certificate status in Azure Portal

## Next Steps

1. Choose your Azure option (Static Web Apps recommended)
2. Create the resource in Azure Portal
3. Connect your GitHub repository
4. Configure environment variables
5. Set up custom domain
6. Test deployment

## Additional Resources

- [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- [Next.js on Azure](https://docs.microsoft.com/azure/static-web-apps/nextjs)
- [Azure Free Tier](https://azure.microsoft.com/free/)
