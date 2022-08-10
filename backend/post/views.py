from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .serializers import PostSerializer
from .models import Post


# Create your views here.
class PostView(viewsets.ModelViewSet):
    queryset = Post.objects
    serializer_class = PostSerializer
    lookup_field = 'slug'

class PostDetailView(viewsets.ModelViewSet):
    queryset = Post.objects
    serializer_class = PostSerializer
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        post = Post.objects.filter(pk=kwargs['pk'], poster=self.request.user)
        if post.exists():
            return self.destroy(request, *args, **kwargs)
        else:
            raise ValidationError("This is not your post to delete")

