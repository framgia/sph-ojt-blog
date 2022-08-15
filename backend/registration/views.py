from django.shortcuts import render
from rest_framework import generics, permissions, views, status
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from . import serializers
from .models import RegisteredUser


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    permission_classes = (permissions.AllowAny,)
    http_method_names = ['get', 'head', 'post']
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = RegisterSerializer(users, many=True)
        return Response(serializer.data)
    
    queryset = User.objects.all()

class LoginAPI(views.APIView):
    serializer_class = LoginSerializer
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)
    http_method_names = ['head', 'post']
    def post(self, request, *args, **kwargs):
        serializer = serializers.LoginSerializer(data=self.request.data,
            context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)
