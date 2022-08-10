from django.test import TestCase
from django.contrib.auth.models import User 
from post.models import Post, Comment

class Test_Create_Post(TestCase):

    @classmethod
    def setUpTestData(cls):
        test_post = Post.objects.create(title='Hello World', slug='hello-world', content='sample content', excerpt='sample excerpt', author='Stephen Hawking', published_at='2022-08-09T01:37:27.000645Z', total_votes='2')
        testuser1 = User.objects.create_user(username='test_user1', password='123')
        test_comment = Comment.objects.create(post_id=1, author_id=1, content='deez nuts', published_at='2022-09-09T01:37:27.000645Z')

    def test_blog_content(self):
        post = Post.objects.get(id=1)
        comment = Comment.objects.get(id=1)
        title = f'{post.title}'
        content = f'{post.content}'
        excerpt = f'{post.excerpt}'
        author = f'{post.author}'
        published_at = f'{post.published_at}'
        total_votes = f'{post.total_votes}'
        self.assertEqual(title, 'Hello World')
        self.assertEqual(content, 'sample content')
        self.assertEqual(excerpt, 'sample excerpt')
        self.assertEqual(author, 'Stephen Hawking')
        self.assertEqual(total_votes, '2')
        self.assertEqual(str(post), 'Hello World')

