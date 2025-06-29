from rest_framework import serializers

from .models import Category, Subcategory, Product, ProductImage


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'nombre')


class SubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = ('id', 'nombre', 'categoria')


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('id', 'imagen')


class ProductSerializer(serializers.ModelSerializer):
    imagenes_secundarias = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = (
            'id', 'nombre', 'slug', 'descripcion', 'precio', 'stock', 'imagen_principal',
            'imagenes_secundarias', 'categoria', 'subcategoria', 'activo', 'fecha_creacion', 'fecha_actualizacion'
        )
        read_only_fields = ('slug', 'fecha_creacion', 'fecha_actualizacion')
