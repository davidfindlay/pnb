from django.conf.urls import url, include
from rest_framework import routers
from profiles import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from api.tempAlbums import ListAlbums, AlbumItems

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, basename='users')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
    url(r'^albums/$', ListAlbums.as_view(), name='albums'),
    url(r'^albums/test-album/$', AlbumItems.as_view(), name='albums_items'),
]