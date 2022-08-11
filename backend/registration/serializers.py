from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator

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
                'max_length': 30,
                },
            'email': {
                'validators': [
                UniqueValidator(
                    queryset=User.objects.all()
                )
                ],
                'max_length': 30,
            },
            'username':{
                'max_length': 30,
                'help_text': None,
            }
        }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

