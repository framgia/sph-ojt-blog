from django.db import models
from django.template.defaultfilters import slugify


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    content = models.TextField()
    excerpt = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    published_at = models.DateTimeField(auto_now_add=True)
    total_votes = models.IntegerField()

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Post.objects.all().filter(slug__iexact=original_slug).count()
        
        # Ensures that the slug is unique
        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Post.objects.all().filter(slug__iexact=slug).count()
        self.slug = slug

        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

