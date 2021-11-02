from django.urls import path
from .views import EventListAPIView, EventDetailAPIView

app_name= 'events'

urlpatterns = [
    path('<int:pk>/', EventDetailAPIView.as_view(), name='event_detail'),
    path('', EventListAPIView.as_view(), name='event_list'),
]