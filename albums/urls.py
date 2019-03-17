from django.urls import path

from albums.views import ListAlbums, AlbumDetail, AlbumItemAdd

urlpatterns = [
    path(r'albums/', ListAlbums.as_view(), name='albums'),
    path(r'albums/<int:pk>/', AlbumDetail.as_view(), name='album_details'),
    path(r'albums/<int:pk>/add/', AlbumItemAdd.as_view(), name='album_add'),
]