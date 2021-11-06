from rest_framework import generics
from .models import Workout
from .serializers import WorkoutSerializer
# Create your views here.

class WorkoutListAPIView(generics.ListCreateAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class WorkoutDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer