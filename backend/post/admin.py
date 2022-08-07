from django.contrib import admin
from .models import Post

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'author', 'published_at', 'total_votes')
    #list_display = ('title', 'content', 'published_at', 'total_votes')

admin.site.register(Post, PostAdmin)
