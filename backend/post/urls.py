from django.urls import path
from .views import PostView, PostDetailView, CreateCommentView

urlpatterns = [
    path('<slug>/', PostDetailView.as_view()),
    path('<int:post_id>/', CommentView.as_view()),
    path('', PostView.as_view()),
]
