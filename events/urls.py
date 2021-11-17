from django.urls import path
from .views import EventListAPIView, EventDetailAPIView, EventCancellationAPIView, EventRegisterAPIView, sessions_create

app_name= 'events'

urlpatterns = [
    path('<int:pk>/cancellation/', EventCancellationAPIView.as_view(), name='event_cancellation'),
    path('<int:pk>/', EventDetailAPIView.as_view(), name='event_detail'),
    path('register/<int:pk>/', EventRegisterAPIView.as_view(), name='event_register'),
    path('sessions/generate/', sessions_create, name='sessions_create'),
    path('', EventListAPIView.as_view(), name='event_list'),
]