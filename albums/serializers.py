from rest_framework import serializers
from albums.models import Album, AlbumItem, AlbumItemFile

from pnb import settings


class AlbumItemFileSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    def get_url(self, obj):
        return '%s' % (obj.file)

    class Meta:
        model = AlbumItemFile
        fields = ('id', 'file', 'url', 'owner')
        read_only_fields = ('owner',)


class AlbumItemSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())
    # file = AlbumItemFileSerializer(many=False, read_only=True)

    class Meta:
        model = AlbumItem
        fields = ('id', 'album', 'type', 'file', 'title', 'description', 'owner')
        read_only_fields = ('owner',)


class AlbumSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Album
        fields = ('id', 'title', 'description', 'owner')
        read_only_fields = ('owner',)

