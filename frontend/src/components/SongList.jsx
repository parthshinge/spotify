import { useEffect, useState } from "react";
import API from "../api";
import { usePlayer } from "../context/PlayerContext";

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { playSong, currentSong } = usePlayer();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await API.get("/songs/");
        console.log("Songs from API:", res.data); // debug log
        setSongs(res.data);
      } catch (err) {
        console.error("Error fetching songs", err);
        setError({
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return <div className="text-gray-400 p-4">Loading songs...</div>;
  }

  // जर error असेल तर UI मध्ये direct दाखव
  if (error) {
    return (
      <div className="text-red-400 p-4 text-sm">
        <div className="font-bold mb-1">Error loading songs ❌</div>
        <div>Status: {error.status ?? "no status"}</div>
        <div>Message: {error.message}</div>
        <pre className="mt-2 bg-black/50 p-2 rounded">
          {JSON.stringify(error.data, null, 2)}
        </pre>
      </div>
    );
  }

  if (!songs.length) {
    return <div className="text-gray-400 p-4">No songs found.</div>;
  }

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold mb-2">All Songs</h2>
      {songs.map((song, index) => (
        <div
          key={song.id}
          className={`flex items-center justify-between p-2 rounded cursor-pointer transition
          ${
            currentSong?.id === song.id
              ? "bg-green-700"
              : "bg-neutral-800 hover:bg-neutral-700"
          }`}
          onClick={() => playSong(song, index, songs)}
        >
          <div>
            <div className="font-semibold">{song.title}</div>
            <div className="text-sm text-gray-300">{song.artist?.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
