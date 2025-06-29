from rest_framework import viewsets, permissions

from .models import Category, Subcategory, Product
from .serializers import CategorySerializer, SubcategorySerializer, ProductSerializer
from apps.users.permissions import IsLocalAdmin, IsSuperAdmin


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated, IsSuperAdmin | IsLocalAdmin]


class SubcategoryViewSet(viewsets.ModelViewSet):
    queryset = Subcategory.objects.all()
    serializer_class = SubcategorySerializer
    permission_classes = [permissions.IsAuthenticated, IsSuperAdmin | IsLocalAdmin]


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return Product.objects.all()
        if user.es_administrador_local:
            return Product.objects.filter(administrador=user)
        return Product.objects.filter(activo=True)

    def perform_create(self, serializer):
        serializer.save(administrador=self.request.user)
