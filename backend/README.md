# Backend

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

## User roles

The custom `User` model includes a `role` field with two options: `administrator` and `maintainer`. Manage users and products through the built-in Django admin at `/admin/`.
