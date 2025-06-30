# Frontend

Next.js application.

## Directory layout

- `components/` – reusable UI pieces.
- `layouts/` – base layouts for public and admin pages.
- `services/` – API functions that connect to the Django REST backend.
- `hooks/` – auth and cart state management.
- `pages/` – route-driven pages.
- `public/` – static assets.
Next.js application goes here.

- `components/` – reusable React components
- `pages/` – route-driven pages
- `public/` – static assets

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

The main page is implemented in `pages/index.js` and stitches together components found in the `components/` directory.
