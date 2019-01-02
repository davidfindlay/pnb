from django.conf.urls import url, include
from rest_framework import routers
from profiles import views

from albums.views import ListAlbums, AlbumItems, AlbumDetail

urlpatterns = [
    url(r'^albums/$', ListAlbums.as_view(), name='albums'),
    url(r'^albums/<string:album_stub>', AlbumDetail.as_view(), name='album_details'),
]