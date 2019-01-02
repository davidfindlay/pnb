from django.db import models


# Create your models here.
class Album(models.Model):
    album_stub = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


# Album Items
class AlbumItem(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    type = models.CharField(max_length=10)
    file = models.ImageField(upload_to=user_directory_path)
    title = models.CharField(max_length=100)
    description = models.TextField()

