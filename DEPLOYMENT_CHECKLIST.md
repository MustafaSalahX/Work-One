# Deployment Checklist

## Before Deployment
- [ ] Test site locally: `npm run dev`
- [ ] All links working correctly
- [ ] Mobile responsive design verified
- [ ] No console errors
- [ ] Images loading properly
- [ ] All pages accessible

## Build for Production
- [ ] Run: `npm run build`
- [ ] Check `dist/` folder created
- [ ] dist/index.html exists
- [ ] All assets in dist/ folder

## Upload to Hostinger
- [ ] FTP credentials ready
- [ ] Download FileZilla (or use File Manager)
- [ ] Delete old files from `public_html`
- [ ] Upload all files from `dist/` to `public_html`
- [ ] `.htaccess` file is in `public_html` root (not in subfolder)
- [ ] Upload complete (verify file count)

## Domain Configuration
- [ ] Domain purchased from Hostinger
- [ ] Nameservers pointed correctly
- [ ] DNS records confirmed
- [ ] Wait 24-48 hours or check propagation

## Security & Performance
- [ ] SSL certificate active (HTTPS enabled)
- [ ] "Automatic HTTPS redirect" enabled
- [ ] .htaccess in place (rewrite rules active)
- [ ] Gzip compression enabled
- [ ] Browser caching configured

## Testing
- [ ] Visit domain in browser
- [ ] Check HTTPS lock icon
- [ ] All navigation links work
- [ ] Test on mobile device
- [ ] Forms (if any) submit correctly
- [ ] No 404 errors
- [ ] Page load time acceptable

## Optimization
- [ ] Cache cleared on browser
- [ ] Images optimized (check dist size)
- [ ] No unused packages in package.json
- [ ] Console clean (no errors/warnings)

## Maintenance
- [ ] Bookmark FTP credentials
- [ ] Keep local version updated
- [ ] Plan backup strategy
- [ ] Monitor site performance

## Common Issues to Check
- [ ] Routes returning 404? → Check .htaccess
- [ ] Styles not loading? → Check path in vite.config.ts
- [ ] Images missing? → Verify uploads completed
- [ ] Slow loading? → Check browser cache settings
- [ ] HTTPS not working? → Contact Hostinger support

---
**Last Deployment**: [DATE]
**Domain**: [yourdomain.com]
**FTP Account**: [username]
