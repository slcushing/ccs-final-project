from django.urls import path
from .views import ProfileListAPIView, ProfileDetailAPIView, CurrentUserProfileAPIView


app_name = 'accounts'

urlpatterns = [
    # path('<int:pk>/', AccountDetailAPIView.as_view(), name='account_detail'),
    # path('', AccountListAPIView.as_view(), name='account_list'),
    path('profiles/', ProfileListAPIView.as_view(), name='profile_list'),
    path('profiles/<int:pk>/', ProfileDetailAPIView.as_view(), name='profile_detail'),
    path('profiles/current_user/', CurrentUserProfileAPIView.as_view(), name='profile_detail'),
    # path('notes/', NoteListAPIView.as_view(), name='notes_list'),
    # path('notes/<int:pk>/', NoteDetailAPIView.as_view(), name='notes_detail'),

]