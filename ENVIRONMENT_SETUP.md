# Environment Setup Guide

## Development Environment

### Prerequisites
- **Node.js**: v16 or higher
- **npm**: v7 or higher (or pnpm v7+)

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Server runs at: `http://localhost:5173`

## Production Environment

### Build Steps
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Build Output
- Minified JavaScript files
- Optimized CSS with Tailwind
- Compressed images and assets
- Source maps (optional for debugging)

## Deployment Environment (Hostinger)

### Server Requirements Met ✅
- ✅ Apache web server (standard on Hostinger)
- ✅ PHP 7.4+ (not needed for static site but good to have)
- ✅ mod_rewrite enabled (for .htaccess routing)
- ✅ mod_deflate enabled (for gzip compression)
- ✅ mod_expires enabled (for browser caching)

### Configuration Files Provided
- `.htaccess` - Handles routing, compression, caching, security
- `robots.txt` - Search engine optimization
- `public/` folder - Static assets

### Nothing to Configure!
The project is ready to deploy. All configuration is done.

## Environment Variables (if needed in future)

Create `.env.local` file in project root if you need API keys:
```
VITE_API_URL=https://api.yourdomain.com
VITE_API_KEY=your_key_here
```

These will be available in your code as:
```javascript
console.log(import.meta.env.VITE_API_URL)
```

**Important**: Don't commit `.env.local` to git (it's in .gitignore)

## Project Structure

```
Legal Services Website Revamp/
├── src/                    # React source code
│   ├── app/
│   │   ├── App.tsx
│   │   ├── components/     # Reusable UI components
│   │   └── pages/          # Page components
│   └── main.tsx
├── public/                 # Static files (robots.txt, etc)
├── dist/                   # Production build (created by npm run build)
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Build configuration
├── .htaccess               # Server configuration
├── .gitignore              # Version control settings
└── tailwind.config.ts      # Tailwind CSS config
```

## Troubleshooting

### Local Development Issues

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind styles not showing?**
- Check `tailwind.config.ts`
- Run `npm install` to ensure dependencies are current
- Restart dev server

### Build Issues

**Build fails?**
```bash
npm run build -- --debug
```

**dist/ folder empty?**
- Check vite.config.ts is correct
- Ensure no syntax errors in src/
- Check dist/ folder path permissions

### Production Issues

**See DEPLOYMENT_GUIDE.md for production troubleshooting**

## Performance Tips

### For Development
- Don't open too many browser tabs (slows dev server)
- Clear browser cache when making CSS changes
- Use React DevTools browser extension

### For Production
- Keep file sizes small (shown in build output)
- Use images in webp format when possible
- Minimize external API calls
- Enable HTTPS (done by Hostinger)

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server on localhost:5173

# Production
npm run build            # Build for production
npx vite preview         # Preview production build locally

# Cleanup
npm install              # Reinstall dependencies
npm cache clean --force  # Clear npm cache
```

## Support Resources

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Hostinger Support**: https://support.hostinger.com

---

**Ready to deploy?** Follow the steps in `BUILD_AND_DEPLOY.md`
