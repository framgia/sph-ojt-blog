from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import DummyUser, Comment, Vote, Post

# Register your models here.
class PostAdmin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display = ('id', 'title', 'content', 'author', 'published_at')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 25
    summernote_fields = ('content',)

admin.site.register(DummyUser)
admin.site.register(Comment)
admin.site.register(Vote)
admin.site.register(Post, PostAdmin)
