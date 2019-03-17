from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework import authentication, permissions
from rest_framework import status
from django.http import Http404
from rest_framework import generics

from albums.models import Album, AlbumItem, AlbumItemFile
from albums.serializers import AlbumSerializer, AlbumItemSerializer, AlbumItemFileSerializer
from django.shortcuts import render


# Create your views here.
class ListAlbums(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class AlbumItemAdd(generics.CreateAPIView):
    queryset = AlbumItem.objects.all()
    serializer_class = AlbumItemSerializer


class AlbumItemFileAdd(generics.CreateAPIView):
    queryset = AlbumItemFile.objects.all()
    serializer_class = AlbumItemFileSerializer


class AlbumListItems(generics.ListAPIView):
    serializer_class = AlbumItemSerializer

    def get_queryset(self):
        album_id = self.kwargs['pk']

        return AlbumItem.objects.filter(album=album_id)


class AlbumItemGetFile(generics.RetrieveAPIView):
    queryset = AlbumItemFile.objects.all()
    serializer_class = AlbumItemFileSerializer
