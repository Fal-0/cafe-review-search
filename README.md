# ☕ Cafe Review Search

Search for cafes based on what people **actually say** in their reviews!

## 🌐 Live Demo

Once deployed, your app will be at: `https://your-app-name.vercel.app/cafe-review-search.html`

## 🎯 What This Does

Instead of searching Google Maps and getting random cafes by rating, this tool:
- ✅ Reads ALL cafe reviews automatically
- ✅ Searches for YOUR keywords (studying, quiet, outlets, wifi, etc.)
- ✅ Shows only cafes where people mentioned what you care about
- ✅ Displays actual review snippets with keywords highlighted
- ✅ Works perfectly on mobile! 📱

## 🚀 Quick Deploy to Vercel

1. Fork this repository or click "Use this template"
2. Go to [Vercel](https://vercel.com) and sign up with GitHub
3. Click "New Project" and import this repository
4. Click "Deploy" - that's it!
5. Get your Google Maps API key (see below)
6. Open your app and enter your API key
7. Start searching! 🎉

## 🔑 Getting Your Google Maps API Key

You need a Google Maps API key (free tier = 28,000 requests/month):

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/overview)
2. Create a new project
3. Enable "Places API"
4. Go to Credentials → Create Credentials → API Key
5. Copy your API key
6. (Recommended) Restrict key to only "Places API"

**Cost:** FREE for personal use (you won't hit the limits)

## 📱 How to Use

1. Open the deployed app on your phone or computer
2. Enter your Google Maps API key (saved in your browser)
3. Click "Use My Location" or enter coordinates
4. Type keywords: `studying, quiet, outlets, wifi`
5. Click "Search Cafes"
6. See results ranked by keyword matches! 🎉

## 💡 Example Searches

**For Studying:**
```
studying, quiet, outlets, wifi, spacious
```

**For Working:**
```
laptop friendly, power outlets, wifi, work friendly, not loud
```

**For Meetings:**
```
good for conversation, not too loud, comfortable, spacious
```

**For Reading:**
```
quiet, peaceful, cozy, books, calm
```

## 🛠️ Local Development

If you want to run it locally:

```bash
npm install
npm start
```

Open `http://localhost:3000/cafe-review-search.html`

## 📁 Project Structure

```
cafe-review-search/
├── cafe-review-search.html    # The web app (frontend)
├── server.js                   # Backend API proxy
├── package.json               # Dependencies
├── vercel.json                # Vercel configuration
├── .gitignore                 # Git ignore file
└── README.md                  # This file
```

## 🌍 Tech Stack

- **Frontend:** Vanilla HTML/CSS/JavaScript
- **Backend:** Node.js + Express
- **APIs:** Google Places API
- **Hosting:** Vercel (or any Node.js hosting)

## 🔒 Privacy & Security

- Your API key is stored only in your browser's local storage
- No data is collected or stored on the server
- All searches are processed in real-time
- Server only acts as a proxy to avoid CORS issues

## 📊 How It Works

1. User enters location + keywords
2. Fetches nearby cafes from Google Places API
3. Gets detailed reviews for each cafe
4. Searches reviews for user's keywords
5. Scores and ranks cafes by keyword matches
6. Displays results with highlighted review snippets

## 🆘 Troubleshooting

**"API Error: REQUEST_DENIED"**
- Make sure "Places API" is enabled in Google Cloud Console
- Check your API key is correct

**"No cafes found"**
- Try different/broader keywords
- Check your location is correct
- Try searching with one keyword first

**"Failed to fetch"**
- If deployed to Vercel, make sure the deployment succeeded
- Check that your API key has no restrictions blocking the request

## 🤝 Contributing

Feel free to fork, modify, and improve this tool! Some ideas:
- Add distance filters
- Save favorite searches
- Negative keyword filters (exclude "loud", "crowded")
- Share results with friends
- Review sentiment analysis

## 📝 License

MIT License - feel free to use for personal or commercial projects!

## 💖 Credits

Built to solve the frustrating problem of Google Maps not letting you search by review content.

Now you can finally find that perfect quiet cafe with outlets for studying! ☕✨

---

**Questions?** Open an issue on GitHub or check the documentation files!
