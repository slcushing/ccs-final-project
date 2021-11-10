from django.urls import path
from .views import EventListAPIView, EventDetailAPIView, EventCancellationAPIView

app_name= 'events'

urlpatterns = [
    path('<int:pk>/cancellation/', EventCancellationAPIView.as_view(), name='event_cancellation'),
    path('<int:pk>/', EventDetailAPIView.as_view(), name='event_detail'),
    path('', EventListAPIView.as_view(), name='event_list'),
]