from .views import RegisterAPI,LoginAPI
from django.urls import path

urlpatterns = [
    path('api/user/register', RegisterAPI.as_view(), name='register'),
    path('api/user/login/', LoginAPI.as_view(), name='login'),
]
