from django.conf.urls import url, include

from .trailing_slash_fix import OptionalSlashRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from profiles import views as profile_views
from albums.urls import urlpatterns as albums_urls

router = OptionalSlashRouter()
router.register(r'users', profile_views.UserViewSet, basename='users')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'register/', profile_views.UserRegistrationViewSet.as_view()),
    url(r'^token/$', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    url(r'^token/refresh/$', TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^token/verify/$', TokenVerifyView.as_view(), name='token_verify'),
    url(r'^', include('albums.urls')),
]