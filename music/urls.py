from rest_framework.routers import DefaultRouter
from .views import SongViewSet, PlaylistViewSet

router = DefaultRouter()
router.register('songs', SongViewSet, basename='song')
router.register('playlists', PlaylistViewSet, basename='playlist')

urlpatterns = router.urls
