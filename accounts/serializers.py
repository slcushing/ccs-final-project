from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
from .models import Profile


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class UserDetailsSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = ('id', 'username', 'email', 'is_active', 'is_staff', 'is_superuser',)