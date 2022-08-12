from rest_framework import serializers
from .models import Post, Comment, DummyUser

class DummyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DummyUser
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        lookup_field = 'slug'

class CommentSerializer(serializers.ModelSerializer):
    post = PostSerializer(read_only=True)
    post_id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
