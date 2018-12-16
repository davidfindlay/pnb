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
