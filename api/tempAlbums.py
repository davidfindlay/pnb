from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions

albums = [{
            'id': 'test-album',
            'title': 'Test Album',
            'description': 'This is our test album'
            },
            {
                'id': 'test-album2',
                'title': 'Test Album 2',
                'description': 'This is our test album 2'
            }
        ]


class ListAlbums(APIView):

    def get(self, request, format=None):

        return Response(albums)


class AlbumItems(APIView):

    def get(self, request, format=None):

        album = {
            'id': 'test-album',
            'title': 'Test Album',
            'description': 'This is our test album',
            'items': [{
                    'id': 1,
                    'type': 'image',
                    'file': 'album_image_1.jpg',
                    'title': 'Test Photo 1',
                    'description': 'This is a test item number 1'
                },
                {
                    'id': 2,
                    'type': 'image',
                    'file': 'album_image_2.jpg',
                    'title': 'Test Photo 2',
                    'description': 'This is a test item number 2'
                },
                {
                    'id': 3,
                    'type': 'image',
                    'file': 'album_image_3.jpg',
                    'title': 'Test Photo 3',
                    'description': 'This is a test item number 3'
                }
            ]
        }
        return Response(album)
