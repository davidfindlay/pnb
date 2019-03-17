from rest_framework import serializers
from albums.models import Album, AlbumItem, AlbumItemFile

from pnb import settings


class AlbumItemSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = AlbumItem
        fields = ('id', 'type', 'file', 'title', 'description', 'owner')
        read_only_fields = ('owner',)


class AlbumItemFileSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    def get_file_url(self, obj):
        return '%s' % (obj.file)

    class Meta:
        model = AlbumItemFile
        fields = ('id', 'file_url')


class AlbumSerializer(serializers.ModelSerializer):
    owner = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Album
        fields = ('id', 'title', 'description', 'items', 'owner')
        read_only_fields = ('owner',)

    def create(self, validated_data):

        print(serializers.CurrentUserDefault())

        items_data = validated_data.pop('items')
        album = Album.objects.create(**validated_data)

        for item_data in items_data:
            AlbumItem.objects.create(album=album, **item_data)

        return album
