from django.db import models
from django.template.defaultfilters import slugify


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    slug = models.SlugField()
    content = models.TextField(null=True, blank=True)
    excerpt = models.CharField(max_length=255, null=True, blank=True)
    author = models.CharField(max_length=30, null=False, blank=True)
    published_at = models.DateTimeField(auto_now_add=True)
    total_votes = models.IntegerField(null=True, blank=True, default=0)
    
    class Meta:
        ordering = ['-published_at']

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

