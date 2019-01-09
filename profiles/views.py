from django.contrib.auth import get_user_model

from rest_framework import viewsets
from rest_framework import generics

from .serializers import UserSerializer, UserRegistrationSerializer
from api.extra_perms import IsAuthenticatedOrWriteOnly, IsOwnerOrAdmin


# TODO: Change permissions to group-based views.
# TODO: Add Password Changing
# TODO: Add admin interface for User API (PW change, etc.)
UserModel = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    """
        API endpoint to allow Profiles to be viewed or edited.
    """
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrWriteOnly,)

    # Only owners or admins can modify user accounts.
    # Still need password to change.
    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = (IsAuthenticatedOrWriteOnly,)
        if self.request.method == 'PATCH' or self.request.method == 'PUT':
            self.permission_classes = (IsOwnerOrAdmin,)
        return super().get_permissions()


class UserRegistrationViewSet(generics.CreateAPIView):
    """
        API Endpoint for user registration
    """
    queryset = UserModel.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = (IsAuthenticatedOrWriteOnly, )
