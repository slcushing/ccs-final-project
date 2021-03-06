from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    path('accounts/', include('accounts.urls', namespace='accounts')),
    path('events/', include('events.urls', namespace='events')),
    path('tasks/', include('tasks.urls', namespace='tasks')),
    path('workouts/', include('workouts.urls', namespace='workouts')),
    path('broadcast/', include('broadcast.urls', namespace="broadcast")),
]