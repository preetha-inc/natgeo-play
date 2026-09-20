# NatGeo Play: Play the Planet

A single-page concept landing page that reimagines **National Geographic** as a Steam/Miniclip-style game storefront.

> **Disclaimer:** This is a concept project created for educational and portfolio purposes. It is not affiliated with, endorsed by, or associated with National Geographic Partners, LLC.

## Features

- Cinematic expedition-themed hero section
- Game storefront with categories, pricing, and ratings
- Featured-game showcase and purchase panel
- Exploration-driven feature highlights
- Field-report-style player reviews
- Responsive design for desktop and mobile
- Custom field-frame, stamp, and journal-inspired UI elements
- Single-page architecture with no additional routes

## Tech Stack

- **Next.js 14** - App Router
- **Tailwind CSS** — Styling and responsive layouts
- **next/font/google** — Optimized Google Fonts
  - Fraunces
  - Inter
  - IBM Plex Mono

No external font files are required.

## Run Locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/preetha-inc/natgeo-play.git
cd natgeo-play
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
natgeo-play/
├── app/
│   ├── globals.css       # Base styles and field-journal UI treatments
│   ├── layout.js         # Fonts, metadata, and root layout
│   └── page.js           # Complete single-page landing page
├── public/               # Static images and other assets
├── tailwind.config.js    # NatGeo-inspired color tokens
├── package.json
└── README.md
```

Everything intentionally lives in `app/page.js` because the project was designed as a single landing page with no additional routes.

## Customization

### Update the Content

Game details, features, and reviews are stored in plain arrays at the top of `app/page.js`:

```js
GAMES
FEATURES
REPORTS
```

Edit these arrays to update the storefront content without changing the page layout.

### Change the Theme

The main color palette is defined in `tailwind.config.js` under the `ng` and `expedition` keys.

The theme includes colors inspired by:

- National Geographic yellow
- Expedition night
- Arctic ice
- Forest landscapes

Updating these tokens will re-theme the entire page consistently.

### Add Real Images

The current game artwork uses CSS gradients. To replace them with real images:

1. Add the image files to the `public/` directory.
2. Import the `Image` component from `next/image`.
3. Replace the gradient placeholders with optimized images.

```jsx
import Image from "next/image";

<Image
  src="/game-cover.jpg"
  alt="Game cover"
  width={800}
  height={500}
/>
```

## Note

This project is intended solely as a design and development concept.