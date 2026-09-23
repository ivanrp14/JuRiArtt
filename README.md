# JuRiArtt

A small online store: landing page, catalog, product card, cart, and contact and profile pages.

The landing page says “Mi Tienda” and links to `/products`.

## Routes and pieces

| Route / component | What it is |
| --- | --- |
| `pages/Home.tsx` | Landing |
| `pages/Products.tsx` | Catalog |
| `pages/Contact.tsx` | Contact |
| `pages/Profile.tsx` | Profile |
| `components/ProductCard.tsx` | Product card |
| `components/Cart.tsx` | Cart |
| `components/Navbar.tsx` | Bar |
| `context/CartContext.tsx` | Cart state |

## Stack

- React 18, with TypeScript on the pages
- Vite
- React Router 6
- Bootstrap 5

## How to run

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

The cart lives in memory through `CartContext` while the tab stays open.
