from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Song, Playlist, PlaylistSong
from .serializers import SongSerializer, PlaylistSerializer


class SongViewSet(viewsets.ReadOnlyModelViewSet):
    """
    फक्त list + retrieve (GET) साठी songs
    """
    queryset = Song.objects.all().order_by('-created_at')
    serializer_class = SongSerializer
    permission_classes = [permissions.AllowAny]


class PlaylistViewSet(viewsets.ModelViewSet):
    """
    User-specific playlists (create, list, update, delete)
    """
    serializer_class = PlaylistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Playlist.objects.filter(user=self.request.user).order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'], url_path='add-song')
    def add_song(self, request, pk=None):
        """
        POST /api/playlists/<id>/add-song/
        body: { "song_id": 1 }
        """
        playlist = self.get_object()
        song_id = request.data.get('song_id')

        if not song_id:
            return Response({"detail": "song_id is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            song = Song.objects.get(id=song_id)
        except Song.DoesNotExist:
            return Response({"detail": "Song not found"}, status=status.HTTP_404_NOT_FOUND)

        # simple order
        order = playlist.playlist_songs.count()
        PlaylistSong.objects.get_or_create(
            playlist=playlist,
            song=song,
            defaults={'order': order}
        )
        return Response({"detail": "Song added to playlist"})
