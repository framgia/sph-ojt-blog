from .views import RegisterAPI
from django.urls import path

urlpatterns = [
    path('api/user/register', RegisterAPI.as_view(), name='register'),
]
