from rest_framework import serializers
from albums.models import Album, AlbumItem


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'album_stub', 'title', 'description')


class AlbumItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumItem
        fields = ('id', 'type', 'file', 'title', 'description')
