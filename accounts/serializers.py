from rest_auth.models import TokenModel
from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer, TokenSerializer
from rest_auth.models import TokenModel
from .models import Profile


class UserDetailsSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        fields = ('id', 'username', 'email', 'is_active', 'is_staff', 'is_superuser','first_name', 'last_name', 'pt_coach',)


class TokenSerializer(TokenSerializer):
    user = UserDetailsSerializer()
    class Meta(TokenSerializer.Meta):
        fields = ('key', 'user',)

# class NoteSerializer(serializers.ModelSerializer):
#     is_editable = serializers.SerializerMethodField()

#     class Meta:
#         model = Note
#         exclude = ('profile',)

#     def get_is_editable(self, instance):
#         # import pdb 
#         # pdb.set_trace()
#         request = self.context.get('request')
#         # return request.user.is_staff or instance.user == request.user
#         return instance.user == request.user

class ProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.PrimaryKeyRelatedField(read_only=True, source="user.first_name")
    last_name = serializers.PrimaryKeyRelatedField(read_only=True, source="user.last_name")
    email = serializers.PrimaryKeyRelatedField(read_only=True, source="user.email")
    coach_name = serializers.PrimaryKeyRelatedField(read_only=True, source='pt_coach.username')
    is_client = serializers.SerializerMethodField()
    # notes = NoteSerializer(many=True, read_only=True)
    

    class Meta:
        model = Profile
        exclude = ('user',)

    def __init__(self,*args,**kwargs):
        if not kwargs['context'].get('request').user.is_staff:
            del self.fields['coach_notes']
        super().__init__(*args, **kwargs)

    def get_is_client(self, instance):
        request = self.context.get('request')
        return instance.pt_coach == request.user


    # def create(self, validated_data):
    #     import pdb 
    #     pdb.set_trace()
        # user = self.context.get('request').user 
        # user.first_name = self.context.get('request').data['first_name']
        # user.last_name = self.context.get('request').data['last_name']
        # user.save()

