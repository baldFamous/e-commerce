from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        ('Información adicional', {'fields': ('nombre_completo', 'telefono', 'direccion_principal', 'es_administrador_local')}),
    )
    list_display = ('email', 'nombre_completo', 'es_administrador_local', 'is_superuser')
    search_fields = ('email', 'nombre_completo')
    ordering = ('email',)

        ('Role', {'fields': ('role',)}),
    )
    list_display = ('username', 'email', 'role', 'is_staff')
