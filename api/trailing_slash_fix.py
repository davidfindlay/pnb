from rest_framework.routers import DefaultRouter


# So that API requests can be sent to /api/example or /api/example/ and still work.
# See: https://goo.gl/aY7pUq

class OptionalSlashRouter(DefaultRouter):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.trailing_slash = '/?'
