from rest_auth.serializers import UserDetailsSerializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser


from .models import Profile
from .serializers import ProfileSerializer
from .permissions import ProfileListCreateUserPermissions

# Create your views here.

class ProfileListAPIView(generics.ListCreateAPIView):
    # queryset = Profile.objects.all()
    serializer_class=ProfileSerializer
    permission_classes=(ProfileListCreateUserPermissions,)
    

    def perform_create(self, serializer):
        # import pdb 
        # pdb.set_trace()
        user = self.request.user 
        user.first_name = self.request.data['first_name']
        user.last_name = self.request.data['last_name']
        user.save()
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Profile.objects.filter(user__is_staff=False)
        
    

# class AccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = AccountSerializer


#classyclass django
#django generic function based view - don't do as class 3.2 topics 