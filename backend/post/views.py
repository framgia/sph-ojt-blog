from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .serializers import PostSerializer, CommentSerializer
from .models import Post, Comment
from .pagination import CustomPageNumberPagination
from rest_framework import permissions


# Create your views here.
class PostView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pagination_class = CustomPageNumberPagination
    lookup_field = 'slug'

class PostDetailView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        post = Post.objects.filter(pk=kwargs['pk'], author=self.request.user)
        if post.exists():
            return self.destroy(request, *args, **kwargs)
        else:
            raise ValidationError("This is not your post to delete")

class CommentView(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        query = self.request.query_params.dict()
        return self.queryset.filter(**query)
