from rest_auth.serializers import UserDetailsSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from django.shortcuts import get_object_or_404


from .models import Profile
from .serializers import ProfileSerializer
from .permissions import ProfileListCreateUserPermissions

# Create your views here.

class ProfileListAPIView(generics.ListCreateAPIView):
    # queryset = Profile.objects.all()
    serializer_class=ProfileSerializer
    permission_classes=(ProfileListCreateUserPermissions,)
    

    def perform_create(self, serializer):
        user = self.request.user 
        user.first_name = self.request.data['first_name']
        user.last_name = self.request.data['last_name']
        user.save()

        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Profile.objects.filter(user__is_staff=False).order_by('user__last_name')
        

class ProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class CurrentUserProfileAPIView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
   
    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, user=self.request.user)
        return obj

# class NoteListAPIView(generics.ListCreateAPIView):
#     queryset = Note.objects.all()
#     serializer_class = NoteSerializer

#     def perform_create(self, serializer):
#         # import pdb 
#         # pdb.set_trace()
#         id = self.request.data.get('profile')
#         profile = get_object_or_404(Profile, pk=id)

#         serializer.save(user=self.request.user,profile=profile)

# class NoteDetailAPIView(generics.RetrieveUpdateAPIView):
#     queryset = Note.objects.all()
#     serializer_class = NoteSerializer


#classyclass django
#django generic function based view - don't do as class 3.2 topics 