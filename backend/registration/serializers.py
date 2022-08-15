from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth import authenticate
from .models import RegisteredUser

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True, 
                'style': {'input_type': 'password'},
                'max_length': 50,
                },
            'email': {
                'validators': [
                UniqueValidator(
                    queryset=User.objects.all()
                )
                ],
                'max_length': 50,
            },
            'username':{
                'max_length': 50,
                'help_text': None,
            }
        }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

#LoginSerializer
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredUser
        fields = ('id', 'username', 'password')

        extra_kwargs = {
            'password': {
                'write_only': True, 
                'style': {'input_type': 'password'},
                'max_length': 50,
                },
            'username':{
                'max_length': 50,
                'help_text': None,
            }
        }
    def validate(self, attrs):
        # Take username and password from request
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            # Try to authenticate the user using Django auth framework.
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                # If we don't have a regular user, raise a ValidationError
                msg = 'Access denied: wrong username or password.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')
        # We have a valid user, put it in the serializer's validated_data.
        # It will be used in the view.
        attrs['user'] = user
        return attrs
        