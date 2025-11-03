# 🚀 COMPLETE DEPLOYMENT GUIDE: GitHub + Vercel

Follow these steps to deploy your cafe search tool online!

---

## ✅ What You'll Need

- [ ] GitHub account (free)
- [ ] Vercel account (free)  
- [ ] Google Maps API key (free tier)
- [ ] 10 minutes of your time

---

## 📝 STEP 1: Create GitHub Account (if needed)

1. Go to: https://github.com
2. Click "Sign up"
3. Enter email, create password, choose username
4. Verify your email address
5. Done! ✅

**Already have GitHub?** Skip to Step 2

---

## 📁 STEP 2: Create New GitHub Repository

1. **Log into GitHub**
2. **Click the "+" icon** (top right) → Select "New repository"
3. **Fill in the details:**
   - Repository name: `cafe-review-search`
   - Description: `Search cafes based on review content`
   - Visibility: **Public** ✅ (important for Vercel)
   - Initialize: **Check "Add a README file"** ✅
4. **Click "Create repository"**

Your empty repository is ready! 🎉

---

## 📤 STEP 3: Upload Files to GitHub

### Required Files (Must Upload):

✅ `cafe-review-search.html` - The web app  
✅ `server.js` - Backend server  
✅ `package.json` - Dependencies  
✅ `vercel.json` - Vercel configuration  
✅ `.gitignore` - Git ignore file  
✅ `README.md` - Documentation  

### How to Upload:

**Method 1: Drag & Drop (Easiest)**

1. In your repository, click **"Add file"** → **"Upload files"**
2. **Drag all 6 files** into the upload area
3. Add commit message: `Initial commit - cafe search tool`
4. Click **"Commit changes"**

**Method 2: Using Git CLI**

```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/cafe-review-search.git
cd cafe-review-search

# Copy all files here
# Then:
git add .
git commit -m "Initial commit - cafe search tool"
git push
```

---

## ⚡ STEP 4: Deploy to Vercel

### 4.1: Create Vercel Account

1. Go to: https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest!)
4. **Authorize Vercel** to access your GitHub repositories
5. Done! ✅

### 4.2: Import Your Repository

1. Click **"Add New..."** (top right) → **"Project"**
2. **Find your repository** in the list: `cafe-review-search`
   - *Can't see it? Click "Adjust GitHub App Permissions"*
3. Click **"Import"**

### 4.3: Configure & Deploy

1. **Project Name:** `cafe-review-search` (or customize)
2. **Framework Preset:** Leave as "Other" or "Node.js"
3. **Root Directory:** Leave as `./`
4. **Build Command:** (leave default)
5. **Output Directory:** (leave default)
6. Click **"Deploy"**

### 4.4: Wait for Deployment

⏰ Takes about 1-2 minutes

You'll see:
- "Building..." 
- "Deploying..."
- "Ready! ✅"

---

## 🎉 STEP 5: Get Your URL

Once deployed, Vercel gives you a URL like:

```
https://cafe-review-search-abc123.vercel.app
```

**Your app is live!** 🌐

To access it, add `/cafe-review-search.html`:

```
https://cafe-review-search-abc123.vercel.app/cafe-review-search.html
```

---

## 📱 STEP 6: Use It on Your Phone!

1. **Copy your full URL** (with `/cafe-review-search.html`)
2. **Open it on your phone's browser**
3. **Bookmark it** for easy access
4. Enter your Google Maps API key (first time only)
5. **Start searching!** 🎉

**The app will work from anywhere in the world!**

---

## 🔑 STEP 7: Get Google Maps API Key

If you haven't already:

1. Go to: https://console.cloud.google.com/google/maps-apis/overview
2. **Create a project:**
   - Click "Select a project" → "New Project"
   - Name: "Cafe Search"
   - Click "Create"
3. **Enable Places API:**
   - Click "Enable APIs and Services"
   - Search for "Places API"
   - Click it → Click "Enable"
4. **Create API Key:**
   - Go to "Credentials" (left sidebar)
   - Click "Create Credentials" → "API Key"
   - **Copy your key!** 🔑
5. **Restrict the key (recommended):**
   - Click on your key
   - Under "Application restrictions", select "None" (for now)
   - Under "API restrictions", select "Restrict key"
   - Check only: "Places API" and "Places API (New)"
   - Click "Save"

**Cost:** FREE (28,000 requests/month free tier)

---

## ✅ Complete Checklist

- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Uploaded all 6 files to GitHub
- [ ] Created Vercel account
- [ ] Imported repository to Vercel
- [ ] Deployed successfully
- [ ] Got deployment URL
- [ ] Tested on phone
- [ ] Got Google Maps API key
- [ ] Restricted API key
- [ ] Entered API key in app
- [ ] Successfully searched for cafes! 🎉

---

## 🔄 How to Update Your App

Made changes? Deploy them easily:

1. **Update files on GitHub:**
   - Go to your repository
   - Click on the file you want to edit
   - Click the pencil icon (Edit)
   - Make your changes
   - Click "Commit changes"

2. **Vercel auto-deploys!**
   - Vercel detects the change
   - Automatically rebuilds and redeploys
   - Usually takes ~1 minute
   - Your app is updated! ✅

---

## 🆘 Troubleshooting

### "Can't see my repository in Vercel"

**Solution:**
1. Make sure repository is **Public** on GitHub
2. In Vercel, click "Adjust GitHub App Permissions"
3. Grant access to your repository

### "Deployment failed"

**Solution:**
1. Check all 6 required files are uploaded
2. Make sure file names are exact (case-sensitive!)
3. Check Vercel logs for specific error
4. Try redeploying: Go to Deployments → Click "Redeploy"

### "API Error: REQUEST_DENIED"

**Solution:**
1. Make sure "Places API" is enabled in Google Cloud Console
2. Check API key restrictions aren't blocking requests
3. Try removing all restrictions temporarily
4. Make sure billing is enabled (even for free tier)

### "Page shows but search doesn't work"

**Solution:**
1. Open browser console (F12) and check for errors
2. Make sure you entered your API key
3. Wait 5-10 minutes for new API keys to activate
4. Try refreshing the page

### "Can't access from phone"

**Solution:**
1. Make sure you're using the full URL with `/cafe-review-search.html`
2. Try opening in incognito/private mode
3. Clear browser cache
4. Make sure you have internet connection

---

## 🎯 What's Next?

### Customize Your Domain (Optional)

Want a custom URL like `cafe-search.yourdomain.com`?

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Vercel, go to your project → Settings → Domains
3. Add your custom domain
4. Follow Vercel's DNS instructions
5. Done! Professional URL! 🌟

### Share with Friends

Your app is public! Share the URL with anyone:
- Text them the link
- Post on social media
- Add to your portfolio
- Help others find great cafes! ☕

---

## 📊 Vercel Features You Get (Free)

- ✅ Automatic HTTPS (secure!)
- ✅ Global CDN (fast everywhere)
- ✅ Auto-deploys on GitHub changes
- ✅ Deployment previews
- ✅ Analytics (optional)
- ✅ 100GB bandwidth per month
- ✅ Unlimited projects

---

## 🎉 Congratulations!

You now have:
- ✅ A live web app accessible anywhere
- ✅ Automatic deployments from GitHub
- ✅ A tool that solves your cafe search problem
- ✅ No laptop needed to use it!

**Enjoy finding perfect cafes!** ☕✨

---

## 💡 Pro Tips

1. **Bookmark on phone home screen:**
   - iOS: Share → Add to Home Screen
   - Android: Menu → Add to Home Screen

2. **Update anytime:**
   - Edit files on GitHub
   - Vercel auto-deploys
   - Refresh your app

3. **Monitor usage:**
   - Check Google Cloud Console for API usage
   - You'll never hit free tier limits with personal use

4. **Keep API key safe:**
   - Don't share your API key publicly
   - If compromised, regenerate it in Google Cloud Console

---

Need help? Check the main README.md or open an issue on GitHub!
