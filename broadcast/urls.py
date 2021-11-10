from django.urls import path                                                                                                                                                        
from . import views

app_name = 'broadcast'

urlpatterns = [ 
    path('', views.broadcast_sms, name="default"),
]
