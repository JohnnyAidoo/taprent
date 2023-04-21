from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.IntegerField()
    location = models.CharField(max_length=200)
    price = models.IntegerField()
    image = models.ImageField()
    image2 = models.ImageField()
    image3 = models.ImageField()
