from django.db import models
from profiles.models import Profile
from django.contrib.auth.models import User


# Create your models here.
class Album(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'static/assets/albums/user_{0}/{1}'.format(instance.owner.id, filename)


# Album Files
class AlbumItemFile(models.Model):
    file = models.ImageField(upload_to=user_directory_path)


# Album Items
class AlbumItem(models.Model):
    album = models.ForeignKey(Album, related_name='items', on_delete=models.CASCADE)
    type = models.CharField(max_length=10)
    file = models.ForeignKey(AlbumItemFile, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
