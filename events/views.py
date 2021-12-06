from django.db.models import Q
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
import datetime
from broadcast.views import broadcast_sms
from accounts.models import Profile

from .models import Event, Session
from .serializers import EventSerializer, RegisterSerializer
from .permissions import IsCoachOrReadOnly

from django.utils.timezone import now

# Create your views here.


class EventListAPIView(generics.ListCreateAPIView):
    permission_classes = (IsCoachOrReadOnly,)
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        # type
        queryset = Event.objects.all()
        # import pdb 
        # pdb.set_trace()
        type = self.request.query_params.get('type')
        if type == 'community':
            queryset = queryset.filter(gymEvent=True)
        if type == 'coach':
            queryset = queryset.filter(Q(owner=self.request.user) | Q(gymEvent=True))
        if type == 'session':
            queryset = queryset.filter(session=True, start__gte=now().date(
            ), start__lte=now().date() + datetime.timedelta(days=7))
        return queryset.order_by('start')

class EventDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventCancellationAPIView(generics.DestroyAPIView):
    serializer_class = EventSerializer 
    queryset = Event.objects.all()

    def perform_destroy(self, instance):

        recipients = Profile.objects.all()
        message = "The event " + instance.title + " is cancelled."

        # import pdb 
        # pdb.set_trace()

        if not instance.gymEvent:
            pass
        instance.delete()
        broadcast_sms(recipients, message)
       
        
        

class EventRegisterAPIView(generics.UpdateAPIView):
    serializer_class = RegisterSerializer
    queryset = Event.objects.all()
    
    # def perform_update(self, serializer):
    #     serializer.save()

@api_view()
def sessions_create(self):
    sessions = Session.objects.all()
    for session in sessions:
        if session.active:
            session_start = now()
            session_start = session_start.replace(hour=session.start.hour,
                                                  minute=session.start.minute)

            session_end = now()
            session_end = session_end.replace(hour=session.end.hour,
                                              minute=session.end.minute)
            days = 1
            while days <= 10:
                start = session_start + datetime.timedelta(days=days)
                end = session_end + datetime.timedelta(days=days)
                if not start.weekday() == 6:
                    print('not ')
                    obj, created = Event.objects.get_or_create(
                        title=session.title, start=start, end=end, session=True, owner=session.owner)
                days = days + 1

    return Response({"message": "Sessions generated!"})
# @api_view()
# def sessions_create(self):
#     sessions = Session.objects.all()
#     for session in sessions:
#         if session.is_active:
#             days = 10
#             start = session.start + datetime.timedelta(days=days)
#             end = session.end + datetime.timedelta(days=days)
#             obj, created = Event.objects.get_or_create(
#                 title=session.title, start=start, end=end, session=True, owner=session.owner)

#     return Response({"message": "Sessions generated!"})

