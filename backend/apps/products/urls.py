from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet, SubcategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register('categories', CategoryViewSet)
router.register('subcategories', SubcategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = router.urls
