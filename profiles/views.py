from django.contrib.auth import get_user_model

from rest_framework import permissions, viewsets, status
from rest_framework.response import Response

from .serializers import UserSerializer, ProfileSerializer
from .models import Profile
from api.extra_perms import IsAuthenticatedOrWriteOnly


# TODO: Change permissions to group-based views.
# TODO: Add Password Changing
UserModel = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    """
        API endpoint to allow Profiles to be viewed or edited.
    """
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrWriteOnly,)

