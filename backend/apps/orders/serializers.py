from rest_framework import serializers

from .models import Pedido, DetallePedido
from apps.products.serializers import ProductSerializer


class DetallePedidoSerializer(serializers.ModelSerializer):
    producto = ProductSerializer(read_only=True)

    class Meta:
        model = DetallePedido
        fields = ('producto', 'cantidad', 'precio_unitario')


class PedidoSerializer(serializers.ModelSerializer):
    detalles = DetallePedidoSerializer(many=True, read_only=True)

    class Meta:
        model = Pedido
        fields = (
            'id', 'usuario', 'estado', 'direccion_envio', 'fecha_pedido', 'total',
            'metodo_pago', 'confirmado', 'codigo_seguimiento', 'detalles'
        )
        read_only_fields = ('fecha_pedido',)
