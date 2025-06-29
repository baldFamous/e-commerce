from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    nombre_completo = models.CharField(max_length=255, blank=True)
    telefono = models.CharField(max_length=20, blank=True)
    direccion_principal = models.CharField(max_length=255, blank=True)
    es_administrador_local = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    class Role(models.TextChoices):
        ADMINISTRATOR = 'administrator', 'Administrador'
        MAINTAINER = 'maintainer', 'Mantenedor'

    role = models.CharField(max_length=20, choices=Role.choices, default=Role.MAINTAINER)

    def __str__(self):
        return self.username
