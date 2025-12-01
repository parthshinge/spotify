from rest_framework import serializers
from .models import Artist, Album, Song, Playlist, PlaylistSong


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['id', 'name']


class AlbumSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer(read_only=True)

    class Meta:
        model = Album
        fields = ['id', 'title', 'artist', 'cover_image']


class SongSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer(read_only=True)
    album = AlbumSerializer(read_only=True)
    audio_file = serializers.FileField(read_only=True)

    class Meta:
        model = Song
        fields = [
            'id',
            'title',
            'artist',
            'album',
            'audio_file',
            'duration_seconds',
            'created_at',
        ]


class PlaylistSongSerializer(serializers.ModelSerializer):
    song = SongSerializer(read_only=True)

    class Meta:
        model = PlaylistSong
        fields = ['id', 'song', 'order']


class PlaylistSerializer(serializers.ModelSerializer):
    playlist_songs = PlaylistSongSerializer(many=True, read_only=True)

    class Meta:
        model = Playlist
        fields = ['id', 'name', 'is_public', 'created_at', 'playlist_songs']
