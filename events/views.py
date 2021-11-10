from rest_framework import generics

from broadcast.views import broadcast_sms
from accounts.models import Profile

from .models import Event
from .serializers import EventSerializer

# Create your views here.

class EventListAPIView(generics.ListCreateAPIView):
    
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        # type
        queryset = Event.objects.all()
        type = self.request.query_params.get('type')
        if type == 'community':
            queryset = queryset.filter(gymEvent=True)
        if type == 'coach':
            queryset = queryset.filter(owner=self.request.user)
        if type == 'session':
            queryset = queryset.filter(session=True)
        return queryset

class EventDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventCancellationAPIView(generics.DestroyAPIView):
    serializer_class = EventSerializer 
    queryset = Event.objects.all()

    def perform_destroy(self, instance):

        if instance.gymEvent:
            profiles = Profile.objects.all()
            broadcast_sms(profiles)
        
        import pdb 
        pdb.set_trace()
        
        instance.delete()




