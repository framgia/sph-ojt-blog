from django.db import models
# Add this back when the Login/Signup function is complete
#from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

class DummyUser(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField('User Email')

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    def save(self, *args, **kwargs):
        super(Comment, self).save(*args, **kwargs)

class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    content = models.TextField()
    excerpt = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    published_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('published_at',)

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

class Comment(models.Model):
    post_fk = models.ForeignKey(
            Post, on_delete=models.CASCADE, related_name='post_comments')
    #author_fk = models.ForeignKey(
    #        DummyUser, on_delete=models.CASCADE, related_name='comment_author', default=None, blank=True)
    author = models.CharField(max_length=255, default="Anonymous")
    content = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.post_fk.title} - {self.author}"


class Vote(models.Model):
    post_fk = models.ForeignKey(
            Post, on_delete=models.CASCADE, related_name='post_votes')
    voter_fk = models.ForeignKey(
            DummyUser, on_delete=models.CASCADE, related_name='voter', default=None)
    total_votes = models.IntegerField()

