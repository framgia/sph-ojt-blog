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

class Comment(models.Model):
    author_fk = models.ForeignKey(
            DummyUser, on_delete=models.CASCADE, related_name='comment_author', default=None)
    content = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-published_at',)

class Vote(models.Model):
    author_fk = models.ForeignKey(
            DummyUser, on_delete=models.CASCADE, related_name='voter', default=None)
    total_votes = models.IntegerField()

class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    content = models.TextField()
    excerpt = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    published_at = models.DateTimeField(auto_now_add=True)
    comment_fk = models.ManyToManyField(
                Comment, blank=True)
    vote_fk = models.ManyToManyField(
            Vote, blank=True)

    # This refers to the comment
    @property
    def comment_content(self):
        return self.comment_fk.content

    # This refers to the upvote
    @property
    def no_of_upvotes(self):
        return self.vote_fk.total_votes

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
