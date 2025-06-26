from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMINISTRATOR = 'administrator', 'Administrador'
        MAINTAINER = 'maintainer', 'Mantenedor'

    role = models.CharField(max_length=20, choices=Role.choices, default=Role.MAINTAINER)

    def __str__(self):
        return self.username
