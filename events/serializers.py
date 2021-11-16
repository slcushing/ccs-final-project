from rest_framework import serializers
from .models import Event
from django.contrib.auth import get_user_model 

User = get_user_model()

class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event 
        fields = ('attendees',)
        depth = 1

    def update(self, instance, validated_data):
       
        instance = super().update(instance, validated_data)
       
        user = self.context.get('request').user
        if instance.attendees.filter(id=user.id).exists():
            instance.attendees.remove(user)
        else:
            instance.attendees.add(user)
    
        instance.save()
        return instance
