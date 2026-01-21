# RTLYNX React Website - Deployment Guide

## 🚀 Deploy to GitHub & Vercel

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `rtlynx-website` (or any name you prefer)
   - Make it **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   cd C:\Users\SHAHN\Downloads\rtlynx-react
   git remote add origin https://github.com/YOUR_USERNAME/rtlynx-website.git
   git branch -M main
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Website (Easiest)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your `rtlynx-website` repository
   - Click "Import"

3. **Configure the project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (should be auto-filled)
   - **Output Directory:** `dist` (should be auto-filled)
   - **Install Command:** `npm install` (should be auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Your site will be live at `https://your-project-name.vercel.app`

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd C:\Users\SHAHN\Downloads\rtlynx-react
   vercel
   ```

3. **Follow the prompts:**
   - Login to Vercel
   - Set up and deploy the project
   - Choose default settings

### Step 3: Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `rtlynx.com`)
   - Follow the DNS configuration instructions

### 📝 Important Notes

- **Port Configuration:** The Vite config is set to port 9000 for local development, but Vercel will use its own port in production.
- **Environment Variables:** If you need any, add them in Vercel Dashboard → Settings → Environment Variables
- **Automatic Deployments:** Every push to `main` branch will trigger a new deployment automatically
- **Preview Deployments:** Pull requests will get their own preview URLs

### 🔧 Troubleshooting

If deployment fails:

1. **Check build locally:**
   ```bash
   npm run build
   ```

2. **Verify build output:**
   - Check if `dist` folder is created
   - Should contain `index.html` and assets

3. **Common issues:**
   - Make sure all dependencies are in `package.json`
   - Check for any console errors
   - Verify all imports are correct

### 📱 Testing

After deployment, test:
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Images display properly
- ✅ Animations work smoothly
- ✅ Mobile responsive design
- ✅ Contact form (if integrated)

### 🎉 Your Website is Live!

Once deployed, share your link:
- **Vercel URL:** `https://your-project-name.vercel.app`
- **Custom Domain:** `https://yourdomain.com` (if configured)

---

## Current Repository Status

✅ Git initialized
✅ All files committed
✅ Ready to push to GitHub

**Next step:** Create GitHub repository and push code (see Step 1 above)

