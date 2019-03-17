from django.urls import path

from albums.views import ListAlbums, AlbumDetail, AlbumItemAdd, AlbumItemFileAdd, AlbumListItems, AlbumItemGetFile

urlpatterns = [
    path(r'albums/', ListAlbums.as_view(), name='albums'),
    path(r'albums/<int:pk>/', AlbumDetail.as_view(), name='album_details'),
    path(r'albums/<int:pk>/items/', AlbumListItems.as_view(), name='album_items'),
    path(r'albums/<int:pk>/add/', AlbumItemAdd.as_view(), name='album_add'),
    path(r'albums/<int:pk>/addfile/', AlbumItemFileAdd.as_view(), name='album_addfile'),
    path(r'files/<int:pk>/', AlbumItemGetFile.as_view(), name='album_getfile')
]