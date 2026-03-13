# FullyPromoted Cameroon Studio App


## Setup

1. Create a project in Firebase
2. Enable Authentication providers:
   - Email/Password
   - Google (optional)

3. Go to Firebase Console → Project Settings → Web App
4. Copy your config into:

js/firebase-config.js

Replace:

REPLACE_API_KEY
REPLACE_PROJECT
REPLACE_PROJECT_ID
REPLACE_APP_ID

## Run locally

Use a local server (important because of ES modules):

Python:

python3 -m http.server 8000

Then open: [localhost:8000](http://localhost:8000)

## Pages

index.html – public homepage
login.html – login/signup
dashboard.html – protected page

## Deploy

Works on:

- Firebase Hosting
- Netlify
- Cloudflare Pages
- Vercel