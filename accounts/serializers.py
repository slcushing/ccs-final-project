from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
from .models import Profile


class UserDetailsSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = ('id', 'username', 'email', 'is_active', 'is_staff', 'is_superuser','first_name', 'last_name')


class ProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.PrimaryKeyRelatedField(read_only=True, source="user.first_name")
    last_name = serializers.PrimaryKeyRelatedField(read_only=True, source="user.last_name")
    email = serializers.PrimaryKeyRelatedField(read_only=True, source="user.email")
    

    
    class Meta:
        model = Profile
        exclude = ('user',)

