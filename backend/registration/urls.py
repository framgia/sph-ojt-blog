from .views import RegisterAPI, LoginAPI
from django.urls import path
from knox import views as knox_views

urlpatterns = [
    path('api/user/register', RegisterAPI.as_view(), name='register'),
    path('api/user/login/', LoginAPI.as_view(), name='login'),
    path('api/user/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/user/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
