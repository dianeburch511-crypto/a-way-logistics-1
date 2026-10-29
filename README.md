# A Way Logistics LLC — Website

A responsive static website for A Way Logistics LLC, designed for quick deployment to GitHub Pages.

## Files
- `index.html` — website content
- `styles.css` — responsive styling
- `script.js` — mobile navigation and quote-request email handoff
- `assets/logo.svg` — custom vector logo

## Before you publish
1. **Confirm the company name.** This draft uses “A Way Logistics LLC” based on the project context.
2. **Confirm the New Jersey address.** The supplied city was “Kearny, NJ 07032”; that spelling/ZIP combination should be verified before publishing.
3. **Set the official company email.** The quote form currently prepares an email to `info@awaylogistics.com`. Replace that address in `index.html` and `script.js` with the correct email before going live.
4. **Confirm licensing wording and any required authority details** before making specific regulatory claims beyond “Licensed & Bonded.”
5. This is a static website. The quote form opens the visitor’s email application; it does not store or transmit submissions to a database. Shipment tracking is not represented as live because a carrier/tracking system has not been connected.
6. Images currently load from Unsplash, and Google Fonts load from Google Fonts; an internet connection is needed for those remote assets.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository named `a-way-logistics-website` (or another name you prefer).
2. Upload `index.html`, `styles.css`, `script.js`, the `assets` folder, and this README. Keep the folder structure exactly as shown.
3. Open the repository **Settings → Pages**.
4. Under “Build and deployment,” select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to finish deploying. The published URL will appear in Settings → Pages.
6. To use your own domain, add it in the Pages settings and follow GitHub’s DNS instructions.

## Important
The website is a ready-to-upload static front end, but it does not configure a domain, mailbox, live tracking integration, quote database, or third-party form backend. Those require the appropriate account credentials or provider setup.
