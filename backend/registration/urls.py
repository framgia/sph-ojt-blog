from .views import RegisterAPI, LoginAPI
from django.urls import path, include
from knox import views as knox_views
from rest_framework.authtoken import views

urlpatterns = [
    path('api/auth/', include('knox.urls')),
    path('api/user/register', RegisterAPI.as_view(), name='register'),
    path('api/user/login', LoginAPI.as_view(), name='login'),
    path('api/user/logout', knox_views.LogoutView.as_view(), name='logout'),
    path('api/user/logoutall', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/token/auth', views.obtain_auth_token)
]
