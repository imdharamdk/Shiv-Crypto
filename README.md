# Shiv Crypto Web App

Landing page web app for **Shiv Crypto**, a decentralized blockchain initiative integrating:

- **IAE (Information-Action-Existence)**
- **DEO (Dynamic Existence Optimization)**

It is dedicated to:

- Nature conservation through transparent donations
- Yoga education and knowledge sharing
- Community-led governance with SHIV token economics

## Included content

- Main app: `index.html`
- Styles: `styles.css`
- Donation estimator logic: `app.js`
- Full whitepaper: `whitepaper.md`
- Product roadmap: `roadmap.md`
- Netlify deploy config: `netlify.toml`

## Run locally

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Open:

- `http://localhost:4173`

## Deploy on Netlify

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Netlify, choose **Add new site** → **Import an existing project**.
3. Select this repository.
4. Build settings:
   - Build command: *(leave empty)*
   - Publish directory: `.`
5. Deploy site.

Because this is a static app, no build step is required.

## Notes

- The app includes accessibility enhancements (skip link, semantic landmarks, nav labels, focus states).
- Whitepaper and roadmap are linked directly from the main page.
