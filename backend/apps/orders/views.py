from rest_framework import viewsets, permissions

from .models import Pedido
from .serializers import PedidoSerializer
from apps.users.permissions import IsLocalAdmin, IsSuperAdmin


class PedidoViewSet(viewsets.ModelViewSet):
    serializer_class = PedidoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return Pedido.objects.all()
        if user.es_administrador_local:
            return Pedido.objects.filter(detalles__producto__administrador=user).distinct()
        return Pedido.objects.filter(usuario=user)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)
