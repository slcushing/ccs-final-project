from django.urls import path
from .views import WorkoutListAPIView, WorkoutDetailAPIView

app_name= 'workouts'

urlpatterns = [
    path('<int:pk>/', WorkoutDetailAPIView.as_view(), name='workout_detail'),
    path('', WorkoutListAPIView.as_view(), name='workout_list'),
]