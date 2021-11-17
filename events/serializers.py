from rest_framework import serializers
from .models import Event
from django.contrib.auth import get_user_model 

User = get_user_model()


class AttendeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name')

class EventSerializer(serializers.ModelSerializer):
    is_registered = serializers.SerializerMethodField()
    attendee_list = AttendeeSerializer(many=True, read_only=True, source="attendees")

    class Meta:
        model = Event
        fields = '__all__'

    def get_is_registered(self, obj):
        user = self.context.get('request').user
        if obj.attendees.all().filter(id=user.id).exists():
            return True 
        return False


class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event 
        fields = '__all__'

    def update(self, instance, validated_data):
        user = self.context.get('request').user
        if instance.attendees.all().filter(id=user.id).exists():
            print('remove')
            instance.attendees.remove(user)
        else:
            print('add')
            instance.attendees.add(user)

        instance.save()
       
        return instance
