# Deployment Guide - Legal Services Website

## Quick Setup for Hostinger

### Step 1: Build Locally
```bash
npm run build
```
**Output**: Creates a `dist/` folder with all production files

### Step 2: FTP Connection Details
In Hostinger Account:
1. Go to Hosting → File Manager
2. Or use FTP credentials:
   - **Host**: ftp.yourdomain.com (from Hostinger)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21 (or 22 for SFTP)

### Step 3: Upload Files
**Using File Manager**:
- Navigate to `public_html` folder
- Delete all existing files
- Upload all files from your local `dist/` folder

**Using FTP Client (FileZilla recommended)**:
1. Download FileZilla from https://filezilla-project.org/
2. Enter FTP credentials
3. Navigate to `public_html` on server
4. Drag & drop all files from `dist/` folder

### Step 4: Domain Setup
1. In Hostinger → Domains
2. Add your domain and point nameservers
3. Wait for DNS propagation (24-48 hours)

### Step 5: SSL Certificate
- Hostinger auto-applies free SSL
- Check: Settings → SSL/TLS Certificate
- Enable "Automatic HTTPS redirect"

### Step 6: Verify Routing
The `.htaccess` file (included) handles React routing:
- ✅ All unknown routes redirect to index.html
- ✅ Gzip compression enabled
- ✅ Security headers added
- ✅ Browser caching configured

### Step 7: Test
- Visit your domain
- Test all navigation links
- Check mobile responsiveness
- Verify HTTPS works

## Files Included

| File | Purpose |
|------|---------|
| `.htaccess` | Router configuration, caching, security, compression |
| `dist/` | Production build (after `npm run build`) |
| `package.json` | Project dependencies |

## Troubleshooting

**Issue**: Routes return 404
- **Solution**: Verify `.htaccess` is in `public_html` root

**Issue**: Slow loading
- **Solution**: Check browser cache is enabled (in `.htaccess`)

**Issue**: Styles/Images not loading
- **Solution**: Verify all files uploaded to correct folder

**Issue**: Pages look different online
- **Solution**: Clear browser cache (Ctrl+Shift+Del)

## Future Updates

After making changes:
```bash
# 1. Build locally
npm run build

# 2. Upload new dist/ contents to public_html
# 3. Clear browser cache to see changes
```

## Support
Contact Hostinger support if you have FTP/DNS issues.
