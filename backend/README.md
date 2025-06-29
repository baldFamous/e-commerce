# Backend

Django REST API for the e-commerce platform.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Configure PostgreSQL credentials via environment variables (`POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_PORT`).
3. Run migrations:
   ```bash
   python manage.py migrate
   ```
4. Create a superuser:
This Django project powers the e‑commerce platform. Apps live in `apps/` and configuration in `config/`.

## Setup

1. Install dependencies (Django 4):
   ```bash
   pip install django
   ```
2. Initialize the database:
   ```bash
   python manage.py migrate
   ```
3. Create an admin user:
   ```bash
   python manage.py createsuperuser
   ```

## Features

- Custom `User` model with local admin and superadmin roles
- JWT authentication using `djangorestframework-simplejwt`
- CRUD endpoints for products, categories and orders under `/api/`
- Password reset token endpoint (email backend must be configured)

Start the development server with:
```bash
python manage.py runserver
```
## User roles

The custom `User` model includes a `role` field with two options: `administrator` and `maintainer`. Manage users and products through the built-in Django admin at `/admin/`.
