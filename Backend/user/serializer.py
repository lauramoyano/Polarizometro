from rest_framework import serializers
from .models import User  # Asegúrate de importar tu modelo User si aún no lo has hecho

class UserSerializer(serializers.ModelSerializer):  # Corrige "ModelSerialiazer" a "ModelSerializer"
    class Meta:
        model = User
        fields = '__all__'
