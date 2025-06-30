# E-Commerce Platform

This repository contains a modular e-commerce starter using Django REST Framework for the backend and Next.js for the frontend.

## Structure

- `backend/` – Django REST project with PostgreSQL configuration.
- `frontend/` – Next.js application with reusable components and layouts.
- `docs/` – project documentation.

### Frontend overview

The Next.js app is organized into modules:

- `components/` – UI components like navigation, product cards and modals.
- `layouts/` – wrappers for public and admin pages.
- `services/` – API helpers for communicating with the Django backend.
- `hooks/` – React hooks for auth and cart state.
- `pages/` – route-based pages for public shop and admin area.

Run the development server from the `frontend` directory:

```bash
npm install
npm run dev
```
- `backend/` – Django REST project with PostgreSQL configuration

This repository contains a modular e-commerce starter using Django for the backend and Next.js for the frontend.

## Structure

- `backend/` – Django project with custom user roles and product models
- `frontend/` – Next.js application
- `docs/` – project documentation

Check each folder's `README.md` for setup instructions.
