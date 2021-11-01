from rest_framework import generics

from .models import Profile
from .serializers import AccountSerializer

# Create your views here.

class AccountListAPIView(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class=AccountSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        
    

class AccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = AccountSerializer
