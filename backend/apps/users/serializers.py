from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'nombre_completo', 'telefono', 'direccion_principal')

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            nombre_completo=validated_data.get('nombre_completo', ''),
            telefono=validated_data.get('telefono', ''),
            direccion_principal=validated_data.get('direccion_principal', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'nombre_completo', 'telefono', 'direccion_principal', 'es_administrador_local', 'is_superuser')
        read_only_fields = ('es_administrador_local', 'is_superuser')
