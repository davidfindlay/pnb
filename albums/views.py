from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import status
from django.http import Http404
from rest_framework import generics

from albums.models import Album, AlbumItem
from albums.serializers import AlbumSerializer, AlbumItemSerializer
from django.shortcuts import render


# Create your views here.
class ListAlbums(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer


class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    # def get_object(self, album_stub):
    #     try:
    #         return Album.objects.get(album_stub=album_stub)
    #     except Album.DoesNotExist:
    #         raise Http404
    #
    # def get(self, request, album_stub, format=None):
    #     album = self.get_object(album_stub)
    #     serializer = AlbumSerializer(album)
    #     return Response(serializer.data)
    #
    # def put(self, request, pk, format=None):
    #     album = self.get_object(pk)
    #     serializer = AlbumSerializer(album, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #
    # def delete(self, request, pk, format=None):
    #     album = self.get_object(pk)
    #     album.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


class AlbumItems(APIView):

    def get(self, request, album_stub, format=None):

        album_items = AlbumItem.objects.filter(album_stub=album_stub)
        serializer = AlbumItemSerializer(album_items, many=True)

        return Response(serializer.data)