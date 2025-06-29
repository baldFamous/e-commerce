from django.conf import settings
from django.db import models
from django.utils.text import slugify


class TimestampedModel(models.Model):
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(TimestampedModel):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Subcategory(TimestampedModel):
    categoria = models.ForeignKey(Category, related_name='subcategorias', on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Product(TimestampedModel):
    administrador = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='productos')
    nombre = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    imagen_principal = models.ImageField(upload_to='productos/')
    activo = models.BooleanField(default=True)
    categoria = models.ForeignKey(Category, related_name='productos', on_delete=models.CASCADE)
    subcategoria = models.ForeignKey(Subcategory, related_name='productos', on_delete=models.SET_NULL, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.nombre)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nombre


class ProductImage(models.Model):
    producto = models.ForeignKey(Product, related_name='imagenes_secundarias', on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='productos/')
    
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.name
