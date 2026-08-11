# Soldevs Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen?style=for-the-badge)](https://solder3t.github.io)
[![License](https://img.shields.io/badge/license-none-lightgrey?style=for-the-badge)](#license)
[![Static Site](https://img.shields.io/badge/site-static-orange?style=for-the-badge)](#local-preview)

The public home of **Solder3t**, an independent Android development studio focused on clean, practical apps.

Website: [solder3t.github.io](https://solder3t.github.io)

This site acts as a lightweight portfolio and publishing hub:

- it introduces the developer and current Android work
- it highlights published and in-progress apps
- it surfaces recent GitHub projects
- it hosts support, privacy, and terms pages for Play Store submissions

The site is intentionally simple: plain HTML, CSS, and JavaScript, with no build step.

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
- Ready for GitHub Pages deployment without a framework

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

This repository is set up as a GitHub Pages site using the default GitHub Pages domain. After pushing changes, GitHub Pages can serve the contents of this repository directly.

If you are using GitHub Pages:

- point Pages at the repository root
- leave the source as the main branch or your preferred deployment branch
- ensure `index.html` remains at the top level so the homepage resolves correctly
- no custom domain or DNS setup is required while using the default GitHub Pages URL

## Notes

- The homepage fetches public repositories from `https://api.github.com/users/solder3t/repos`.
- The app list currently includes **Musaic Player**.
- The support and legal pages are meant to be used as public URLs in Google Play Console.

## License

No license file is included in this repository. The project should be treated as all rights reserved unless a license is added later.
