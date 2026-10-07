# Faim Arts Gallery

Contemporary hyperrealistic graphite portraiture by **Iyanu**.

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # production build
```

## Folder Structure

```
src/
  components/
    layout/   Navbar.jsx, Footer.jsx, Layout.jsx
    home/     Hero.jsx, SelectedWorks.jsx, AboutPreview.jsx, QuoteBand.jsx
    ui/       Button.jsx, SectionHeading.jsx, Reveal.jsx
  pages/      Home.jsx, ComingSoon.jsx
  data/       artworks.js  ← artwork metadata lives here
  styles/     tokens.css, global.css
  App.jsx     Router + routes
  main.jsx    Entry point
public/       Static images
```

## Add a New Artwork

1. Copy image to `public/` with a descriptive name.
2. Open `src/data/artworks.js` and add:

```js
{
  id: 'new-work', title: 'Title', medium: 'Graphite on paper',
  year: '2025', image: '/new-work.jpg',
  alt: 'Descriptive alt text', size: 'small', featured: true,
}
```

## Add a Real Page

1. Create `src/pages/YourPage.jsx`.
2. Add `<Route path="/route" element={<YourPage />} />` in `App.jsx`.
3. Add the link to `navLinks` in `Navbar.jsx`.

## Design Tokens

All colors, fonts, and spacing live in `src/styles/tokens.css`.
Never use hardcoded hex values in components — always reference CSS variables.
