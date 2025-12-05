import { useEffect, useState } from "react";
import API from "../api";
import { usePlayer } from "../context/PlayerContext";

export default function SongList({ selectedArtistId }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState(null);
  const { playSong, currentSong } = usePlayer();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await API.get("/songs/");
        setSongs(res.data || []);
      } catch (err) {
        console.error("Error fetching songs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    if (!selectedArtistId) return setArtist(null);
    const fetchArtist = async () => {
      try {
        const res = await API.get(`/artists/${selectedArtistId}/`);
        setArtist(res.data);
      } catch (err) {
        // fallback: derive from songs
        const found = songs.find((s) => s.artist?.id === selectedArtistId);
        setArtist(found?.artist || null);
      }
    };
    fetchArtist();
  }, [selectedArtistId, songs]);

  if (loading) return <div className="text-slate-300">Loading songs…</div>;

  const filteredSongs = songs.filter((song) => {
    if (!selectedArtistId) return true;
    return song.artist && song.artist.id === selectedArtistId;
  });

  const formatDuration = (d) => {
    const secs = Number(d) || 0;
    if (!secs) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="h-full overflow-y-auto">
      {/* Artist header */}
      <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] p-6 rounded-2xl mb-4 spotify-main">
        <div className="flex items-center gap-6">
          <div className="w-40 h-40 rounded-md bg-black/40 flex items-center justify-center overflow-hidden shadow-lg">
            {artist?.image ? (
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/6 flex items-center justify-center text-4xl">{artist?.name?.charAt(0) ?? "A"}</div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">{artist?.name || "All Artists"}</h1>
            <p className="muted mt-1 max-w-2xl">{artist?.bio || "Explore top tracks and albums from this artist."}</p>
            <div className="text-sm muted mt-2">{artist?.followers ? `${artist.followers.toLocaleString()} followers` : "—"}</div>
          </div>
        </div>
      </div>

      {/* Songs table */}
      <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-2xl">
        <table className="w-full songs-table">
          <thead>
            <tr>
              <th className="w-12">#</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th className="w-24 text-right">Duration</th>
            </tr>
          </thead>
          <tbody>
            {filteredSongs.map((song, i) => {
              const isActive = currentSong?.id === song.id;
              return (
                <tr key={song.id} onClick={() => playSong(song, i, filteredSongs)} className={`songs-row ${isActive ? "bg-[rgba(29,185,84,0.06)]" : ""}`}>
                  <td className="py-3 text-sm">{i + 1}</td>
                  <td className="py-3">
                    <div className="font-medium text-white">{song.title}</div>
                  </td>
                  <td className="py-3 muted text-sm">{song.artist?.name || "Unknown"}</td>
                  <td className="py-3 muted text-sm">{song.album?.name || "—"}</td>
                  <td className="py-3 text-right muted text-sm">{formatDuration(song.duration)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
