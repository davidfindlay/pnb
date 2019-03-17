from django.contrib import admin
from .models import Album
from .models import AlbumItem

# Register your models here.
admin.site.register(Album)
admin.site.register(AlbumItem)
