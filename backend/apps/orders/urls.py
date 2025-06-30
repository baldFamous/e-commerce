from rest_framework.routers import DefaultRouter

from .views import PedidoViewSet

router = DefaultRouter()
router.register('orders', PedidoViewSet)

urlpatterns = router.urls
