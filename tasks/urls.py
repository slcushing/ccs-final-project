from django.urls import path
from .views import TaskListAPIView, TaskDetailAPIView

app_name = 'tasks'

urlpatterns = [
    path('<int:pk>/', TaskDetailAPIView.as_view(), name='task_detail'),
    path('', TaskListAPIView.as_view(), name='task_list'),
]