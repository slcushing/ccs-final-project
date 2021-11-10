from rest_auth.serializers import UserDetailsSerializer
from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer

# Create your views here.

class ProfileListAPIView(generics.ListCreateAPIView):
    # queryset = Profile.objects.all()
    serializer_class=ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Profile.objects.filter(user__is_staff=False)
        
    

# class AccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = AccountSerializer


#classyclass django
#django generic function based view - don't do as class 3.2 topics 