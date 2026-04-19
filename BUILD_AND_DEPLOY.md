# Quick Build & Deploy Guide

## 1️⃣ Build the Project (Do This Locally)

```bash
npm run build
```

**What happens:**
- Creates a `dist/` folder with all production files
- Minifies and optimizes everything
- Ready for upload to Hostinger

## 2️⃣ Connect to Hostinger (Get Your FTP Credentials)

In Hostinger Control Panel:
1. Click **Hosting**
2. Select your hosting plan
3. Go to **Settings** → **FTP Accounts**
4. Use the default FTP account or create a new one
5. Note down:
   - **Server/Host**: Usually `ftp.yourdomain.com`
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21 (or 22 for SFTP)

## 3️⃣ Upload Files to Hostinger

### Option A: Using File Manager (Easiest)
1. In Hostinger, click **File Manager**
2. Navigate to `public_html` folder
3. Delete any existing files
4. Click **Upload** button
5. Select all files from your local `dist/` folder
6. Wait for upload to complete

### Option B: Using FTP Client (Faster for large files)

**Download FileZilla:**
- Go to https://filezilla-project.org/
- Download and install

**Connect:**
1. Open FileZilla
2. Go to **File** → **Site Manager**
3. Create new site:
   - **Host**: ftp.yourdomain.com
   - **Protocol**: FTP (or SFTP)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
4. Click **Connect**

**Upload:**
1. Left side: Navigate to your `dist/` folder
2. Right side: Should show `public_html`
3. Drag all files from left to right
4. Wait for upload (you'll see progress)

## 4️⃣ Verify Upload

After uploading:
- [ ] Visit `public_html` folder - should see index.html and other files
- [ ] Check `.htaccess` file is there
- [ ] Verify all folders (css, js, assets) uploaded

## 5️⃣ Check Your Domain

1. Make sure your domain is connected to this hosting
2. Visit your domain: `https://yourdomain.com`
3. Should see your website!
4. Test all pages and links

## 6️⃣ Troubleshooting

**Pages show 404?**
- Make sure `.htaccess` is in `public_html` root
- Not in a subfolder

**Site takes too long to load?**
- Clear your browser cache (Ctrl+Shift+Del)
- Check file sizes in dist folder

**Images not showing?**
- Verify all image files uploaded
- Check image paths in your pages

**HTTPS not working?**
- Go to Hostinger SSL settings
- Enable "Automatic HTTPS redirect"
- Wait 5-10 minutes

## 7️⃣ Future Updates

When you make changes to the website:

```bash
# 1. Build locally
npm run build

# 2. Upload new dist/ files to public_html
# 3. In FTP: Delete old files, upload new ones

# 4. Clear browser cache to see changes
```

---

## Quick Command Reference

```bash
# Start development server locally
npm run dev

# Build for production
npm run build

# Preview production build locally
npx vite preview
```

## Important Files

| File/Folder | What it is |
|------------|-----------|
| `dist/` | Your production website (upload this) |
| `.htaccess` | Server configuration (upload to public_html root) |
| `package.json` | Project info (don't upload) |
| `node_modules/` | Dependencies (don't upload) |
| `src/` | Source code (don't upload) |

---

**Ready? Follow steps 1-5 above and you're live! 🚀**
