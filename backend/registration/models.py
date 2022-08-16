from django.db import models
from django import forms

# Create your models here.

class RegisteredUser(models.Model):
    class Meta:
        app_label = 'registration'
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
