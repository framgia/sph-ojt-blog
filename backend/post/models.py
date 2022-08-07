from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    author = models.CharField(max_length=100)
    published_at = models.DateTimeField(auto_now_add=True)
    total_votes = models.IntegerField()

    def __str__(self):
        return self.title

