# JuRiArtt

Tienda online sencilla: portada, catálogo, ficha en tarjeta, carrito y páginas de contacto y perfil.

La portada dice “Mi Tienda” y lleva a `/products`.

## Rutas y piezas

| Ruta / componente | Qué es |
| --- | --- |
| `pages/Home.tsx` | Portada |
| `pages/Products.tsx` | Catálogo |
| `pages/Contact.tsx` | Contacto |
| `pages/Profile.tsx` | Perfil |
| `components/ProductCard.tsx` | Tarjeta de producto |
| `components/Cart.tsx` | Carrito |
| `components/Navbar.tsx` | Barra |
| `context/CartContext.tsx` | Estado del carrito |

## Stack

- React 18 y TypeScript en las páginas
- Vite
- React Router 6
- Bootstrap 5

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

El carrito vive en memoria a través de `CartContext` mientras la pestaña está abierta.
