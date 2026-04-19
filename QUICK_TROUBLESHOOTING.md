# 🔧 Quick Troubleshooting Guide

## Problem: Website shows 404 or blank page

### Cause: `.htaccess` file missing or routing not working

**Quick Fix:**
1. Go to Hostinger File Manager
2. Navigate to `public_html`
3. Check if `.htaccess` file exists
4. If missing, upload it (enable "Show hidden files" if needed)
5. Refresh your browser

**Alternative:**
- Delete all files from `public_html`
- Re-upload everything from `dist/` folder
- Make sure `.htaccess` is included

---

## Problem: Styles not loading (site looks broken)

### Cause: Browser cache or missing CSS files

**Quick Fix:**
1. Clear browser cache:
   - **Windows**: Press `Ctrl + Shift + Delete`
   - **Mac**: Press `Cmd + Shift + Delete` (Chrome/Edge)
   - Select "All time" → Click "Clear data"
2. Refresh webpage: `Ctrl + R` or `Cmd + R`

**If still broken:**
1. Check browser DevTools (F12)
2. Go to "Network" tab
3. Look for red/broken CSS files
4. Re-upload `dist/` folder to Hostinger

---

## Problem: Images not displaying

### Cause: Image files not uploaded or wrong path

**Quick Fix:**
1. Open browser DevTools (F12)
2. Go to "Console" tab
3. Look for image 404 errors
4. Go to Hostinger File Manager
5. Check `public_html/assets/` folder
6. Verify images are there
7. If missing, re-upload `dist/` folder

---

## Problem: HTTPS not working (shows warning)

### Cause: SSL certificate not activated

**Quick Fix:**
1. Go to Hostinger → Settings
2. Find "SSL/TLS Certificate"
3. Make sure SSL is "Active"
4. Enable "Automatic HTTPS redirect"
5. Wait 5-10 minutes
6. Refresh browser

**If still not working:**
- Contact Hostinger support

---

## Problem: Takes forever to load

### Cause: First load delay or connection issue

**Quick Fix:**
1. Refresh page after 10 seconds
2. Try different browser
3. Check your internet connection
4. Check Hostinger status page

**If consistently slow:**
1. Open DevTools (F12)
2. Go to "Network" tab
3. Check what files are loading slowly
4. Consider upgrading Hostinger plan

---

## Problem: Links return 404 (routing broken)

### Cause: `.htaccess` not working properly

**Quick Fix:**
1. Verify `.htaccess` is in `public_html` root
2. Check file shows these lines:
   ```
   RewriteEngine On
   RewriteRule . /index.html [L]
   ```
3. If not there, copy entire `.htaccess` content again
4. Re-upload to `public_html`
5. Refresh browser

---

## Problem: JSON or data files show on page

### Cause: `.htaccess` not enabled

**Quick Fix:**
1. Some servers don't have mod_rewrite enabled
2. Contact Hostinger support
3. Ask: "Enable mod_rewrite for Apache"
4. They'll fix it in seconds

---

## Problem: Site works on desktop but not mobile

### Cause: Responsive CSS issue or browser cache

**Quick Fix:**
1. Open mobile browser settings
2. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
3. Try in private/incognito mode
4. Try different mobile browser

---

## Problem: Form submissions not working

### Cause: Depends on your form setup

**Quick Fix (if using Formspree or similar):**
1. Check form action URL
2. Verify endpoint is correct
3. Test from different device

**Quick Fix (if using backend API):**
1. Check API URL is correct
2. Check CORS headers are set
3. Check API is running

---

## Problem: "Permission Denied" error on upload

### Cause: FTP permission issues

**Quick Fix:**
1. Use File Manager instead of FTP
2. Or try SFTP (port 22) instead of FTP (port 21)
3. Delete old files first before uploading
4. Contact Hostinger if issue persists

---

## Problem: Website works locally but not on Hostinger

### Cause: Likely path or deployment issue

**Check This First:**
1. ✅ All files uploaded? Check `public_html`
2. ✅ `.htaccess` uploaded? Check in root
3. ✅ Domain pointed correctly? Check DNS
4. ✅ SSL certificate active? Check SSL settings
5. ✅ Node modules not uploaded? (Good, shouldn't be)

**If all checked:**
1. Delete all files from `public_html`
2. Re-upload `dist/` files
3. Wait 5 minutes
4. Hard refresh (Ctrl+Shift+R)

---

## Problem: "npm" command not found

### Cause: Node.js not installed or not in PATH

**Quick Fix:**
1. Download Node.js: https://nodejs.org/
2. Install LTS version
3. Restart terminal
4. Try `npm --version`
5. Should show version number

---

## Problem: "vite" command not found

### Cause: Dependencies not installed

**Quick Fix:**
```bash
npm install
npm run build
```

---

## Problem: DNS/Domain not resolving

### Cause: DNS propagation delay

**Quick Fix:**
1. Wait 24-48 hours for DNS to propagate
2. Or check Hostinger nameservers are correct
3. Ask Hostinger support to verify

**Force clear DNS cache:**
- **Windows**: `ipconfig /flushdns`
- **Mac**: `sudo dscacheutil -flushcache`

---

## Problem: Can't remember FTP credentials

### Cause: Lost credentials

**Quick Fix:**
1. Go to Hostinger → Account Settings
2. Navigate to FTP Accounts
3. Should see default FTP account
4. If not, create new FTP account
5. Copy credentials

---

## Problem: Size limit exceeded during upload

### Cause: File too large for FTP

**Quick Fix:**
1. Use File Manager instead of FTP
2. Or upload files in smaller batches
3. Delete old files first

---

## ✅ Before Contacting Support

Make sure you've:
- [ ] Checked you're using correct domain
- [ ] Cleared browser cache (Ctrl+Shift+Del)
- [ ] Verified files in `public_html` folder
- [ ] Checked `.htaccess` is present
- [ ] Hard refreshed browser (Ctrl+Shift+R)
- [ ] Tried different browser
- [ ] Waited 10-15 minutes
- [ ] Checked Hostinger status page

---

## 📞 Getting Help

### For Website Issues:
1. Check this troubleshooting guide
2. Check `HOSTINGER_DEPLOYMENT.md`
3. Google the exact error message

### For Hostinger Issues:
1. Go to https://support.hostinger.com
2. Search for your issue
3. Contact support live chat

### For Code Issues:
1. Check `ENVIRONMENT_SETUP.md`
2. Try: `npm install` (reinstall dependencies)
3. Try: `npm run build` (rebuild)

---

## 🆘 Last Resort

If nothing works:

1. **Delete Everything**:
   - Go to Hostinger File Manager
   - Delete all files in `public_html`

2. **Start Fresh**:
   - Run `npm run build` on your computer again
   - Upload all files from `dist/` folder

3. **Contact Support**:
   - Hostinger support is usually quick to help
   - They can check server configuration

---

## ⏱️ Typical Resolution Times

| Issue | Time to Fix |
|-------|-----------|
| Browser cache | 30 seconds |
| File upload issue | 2-5 minutes |
| DNS propagation | 2 hours to 48 hours |
| SSL certificate | 5-10 minutes |
| Server error | 15-30 minutes |

---

**Most issues are solved in the first 5 minutes!**

Try the relevant fix above. If still stuck, follow "Last Resort" steps.
