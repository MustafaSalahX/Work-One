# 🚀 Hostinger Deployment - Step by Step

Complete guide to deploy your Legal Services Website to Hostinger.

---

## 📋 Prerequisites

✅ Hostinger hosting account active  
✅ Domain purchased (from Hostinger or elsewhere)  
✅ Project ready on your computer  
✅ Node.js and npm installed

---

## 🎯 Step 1: Build Your Project (5 minutes)

### On Your Computer:

Open a terminal/PowerShell in your project folder and run:

```bash
npm run build
```

**What to expect:**
- Project builds for 10-30 seconds
- Message: "✓ built in X ms"
- New folder created: `dist/`

**Verify:**
- Check `dist/` folder exists
- Inside should have: `index.html`, folders like `assets/`, `src/`, etc.

---

## 🔐 Step 2: Get FTP Credentials (3 minutes)

### In Hostinger Dashboard:

1. Click **Hosting** on the left menu
2. Select your hosting plan
3. Go to **Settings** → **FTP Accounts**
4. You'll see default FTP account info:
   ```
   Host: ftp.yourdomain.com
   Username: username_here
   Password: password_here
   Port: 21
   ```

**Save these credentials!** You'll need them in next step.

---

## 📤 Step 3: Upload Files to Hostinger (10-20 minutes)

### Choose Method A or B:

---

### **Method A: File Manager (Easiest)**

1. In Hostinger, click **File Manager**
2. Navigate to `public_html` folder
3. **DELETE** all existing files in there
4. Click **Upload** button (top right)
5. Select all files from your local `dist/` folder:
   - From your computer: Open `dist/` folder
   - Select ALL files (Ctrl+A)
   - Drag into Hostinger File Manager OR click upload button
6. Wait for upload to complete (100%)

**Verify:**
- You should now see in `public_html`:
  - `index.html` ✓
  - `assets/` folder ✓
  - `.htaccess` file ✓
  - Other folders ✓

---

### **Method B: FTP Client (Faster for large uploads)**

**Step 1: Download FileZilla**
- Go to: https://filezilla-project.org/
- Download and install the "FileZilla Client"

**Step 2: Open FileZilla and Connect**

1. Open FileZilla
2. Go to **File** → **Site Manager**
3. Click **New Site**
4. Fill in these fields:
   - **Host**: `ftp.yourdomain.com`
   - **Protocol**: FTP
   - **Username**: (from step 2)
   - **Password**: (from step 2)
   - **Port**: 21
5. Click **Connect**

**Step 3: Upload Files**

1. **Left side** (your computer):
   - Navigate to your `dist/` folder
   - Select all files (Ctrl+A)

2. **Right side** (Hostinger server):
   - Should show `public_html` folder
   - Double-click to enter it
   - Make sure it's empty first (delete old files)

3. **Upload**:
   - Right-click selected files on left
   - Click **Upload**
   - Wait for progress bar to reach 100%

**Verify:**
- Right side should now show your files
- You can see the upload completed

---

## ✅ Step 4: Verify Upload on Server

1. Go back to Hostinger **File Manager**
2. Navigate to `public_html` folder
3. Check that you see:
   - [ ] `index.html` - Main website file
   - [ ] `.htaccess` - Server configuration (might be hidden)
   - [ ] `assets/` - Your CSS, JavaScript, images
   - [ ] Other files from your project

If `.htaccess` isn't visible:
- Click **View** (top menu) → Show hidden files
- It should appear

---

## 🌐 Step 5: Test Your Website

1. Open your browser
2. Visit: `https://yourdomain.com`
3. Website should appear!

### Test These Things:
- [ ] Homepage loads
- [ ] All pages accessible (About, Services, Blog, Contact, etc.)
- [ ] Click on all navigation links
- [ ] Try on mobile phone or use browser DevTools (F12)
- [ ] Check HTTPS lock icon (green lock) appears

### If Something Doesn't Work:
See troubleshooting section below ⬇️

---

## 🔧 Troubleshooting

### Problem: Website shows 404 error or blank page

**Solution:**
1. Delete everything from `public_html`
2. Make sure `.htaccess` file is uploaded
3. Re-upload all files from `dist/` folder
4. Wait 5 minutes and refresh browser

### Problem: Styles/CSS not loading (site looks broken)

**Solution:**
1. Clear browser cache:
   - **Chrome/Edge**: Ctrl+Shift+Delete
   - **Firefox**: Ctrl+Shift+Delete
   - Select "All time" and Clear
2. Reload website

### Problem: Images not showing

**Solution:**
1. Go to Hostinger File Manager
2. Navigate to `public_html` → `assets/`
3. Verify images are there
4. If missing, re-upload `dist/` folder

### Problem: Takes forever to load

**Solution:**
1. Check file sizes are reasonable (dev tools → Network tab)
2. Wait 10 minutes (might be first load)
3. Try different browser
4. Check your internet connection

### Problem: HTTPS not working (shows warning)

**Solution:**
1. Go to Hostinger → **Settings** → **SSL/TLS Certificate**
2. Verify SSL is enabled and active
3. Check "Automatic HTTPS redirect" is ON
4. Wait 5-10 minutes for SSL to activate
5. Or contact Hostinger support

---

## 📝 For Future Updates

When you make changes to your website:

### On your computer:
1. Make changes to files in `src/` folder
2. Test locally: `npm run dev`
3. Build again: `npm run build`

### Upload to Hostinger:
1. Delete all files in `public_html`
2. Upload new files from `dist/` folder
3. Clear browser cache
4. Refresh website

---

## 📞 Need Help?

### Contact me if:
- Website not showing up
- Getting error messages
- Pages not loading correctly
- HTTPS issues

### Contact Hostinger if:
- Can't access FTP
- DNS issues
- SSL certificate problems
- Server errors

📞 **Hostinger Support**: https://support.hostinger.com

---

## ✨ You're Live!

Congratulations! Your Legal Services Website is now live on your domain! 🎉

### What's Next:
- [ ] Share your website with clients
- [ ] Set up contact form responses
- [ ] Add your business to Google Business
- [ ] Monitor website analytics
- [ ] Keep content updated

---

**Start here**: Follow Steps 1-5 above, then test!

Still need help? Check `BUILD_AND_DEPLOY.md` for more details.
