# Deployment Guide

## Quick Deployment Steps

### 1. Fix Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Build the Project
```bash
npm run build
```

### 3. Test Local Production
```bash
npm start
```

## Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio updates with React enhancements"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Use these settings:
     - Build Command: `npm run build`
     - Install Command: `npm install --legacy-peer-deps`
     - Output Directory: `.next`

## Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install --legacy-peer-deps`

## Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**
   ```json
   "homepage": "https://mohamedAskaarrr.github.io/mohamedAskaarrr",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d .next"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Environment Variables

If you add contact form functionality, you'll need:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Troubleshooting

### Common Issues:
1. **Dependency conflicts**: Use `--legacy-peer-deps`
2. **Build errors**: Check `next.config.mjs` has error ignoring enabled
3. **Images not showing**: Ensure all images exist in `/public` folder
4. **Deployment fails**: Check build command uses `--legacy-peer-deps`

## Performance Optimizations

The portfolio includes:
- ✅ Next.js 15 with App Router
- ✅ React 19 with modern patterns
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS optimization
- ✅ Progressive loading
- ✅ SEO optimization
