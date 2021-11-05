from django.urls import path
from .views import ProfileListAPIView


app_name = 'accounts'

urlpatterns = [
    # path('<int:pk>/', AccountDetailAPIView.as_view(), name='account_detail'),
    # path('', AccountListAPIView.as_view(), name='account_list'),
    path('profiles/', ProfileListAPIView.as_view(), name='profile_list')
]