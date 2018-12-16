from rest_framework.permissions import BasePermission


class IsAuthenticatedOrWriteOnly(BasePermission):
    """
        User must be authenticated or can only POST info.
    """

    def has_permission(self, request, view):
        write_method = ['POST',]

        return (
            request.method in write_method or
            request.user and
            request.user.is_authenticated()
        )


class IsOwnerOrAdmin(BasePermission):
    """
        Must be the owner of an object or an Administrator.
    """

    def has_object_permission(self, request, view, obj):
        return (
            obj == request.user or
            request.user.is_superuser
        )