from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import PostSerializer
from .models import Post

# Create your views here.
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-published_at')
    serializer_class = PostSerializer
    lookup_field = 'slug'

class PostDetailView(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-published_at')
    serializer_class = PostSerializer
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    
