# Solder3t Website

This repository contains the public website for **Solder3t**, an independent Android developer.
It is a lightweight static site that serves:

- the main landing page
- app listings
- GitHub project previews
- support information
- privacy policy, support, and terms pages for **Musaic Player**

## Repository Structure

- `index.html` - main homepage
- `style.css` - global site styles
- `script.js` - dynamic rendering for app cards, GitHub repo previews, and page effects
- `pages/` - legal and support pages

## Features

- Responsive landing page with custom styling
- App card rendering from a small in-page data set
- GitHub repository previews loaded from the GitHub API
- Support, privacy policy, and terms pages for Play Store use
- Simple reveal animations and automatic footer year updates

## Local Preview

Because this is a static site, you can open `index.html` directly in a browser.

For a better local preview, use any simple static server, for example:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Publishing

This repository is set up like a GitHub Pages site. After pushing changes, GitHub Pages can serve the contents of this repository directly.

## Notes

- The homepage fetches public repositories from `https://api.github.com/users/solder3t/repos`.
- The app list currently includes **Musaic Player**.
- The support and legal pages are meant to be used as public URLs in Google Play Console.

## License

No license file is included in this repository. Add one if you want to define reuse terms for the site content or code.
