from django.urls import path, include

urlpatterns = [
    path('users/', include('apps.users.urls')),
    path('catalog/', include('apps.products.urls')),
    path('orders/', include('apps.orders.urls')),
]
