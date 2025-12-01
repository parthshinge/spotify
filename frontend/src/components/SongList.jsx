import { useEffect, useState } from "react";
import API from "../api";
import { usePlayer } from "../context/PlayerContext";

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { playSong, currentSong } = usePlayer();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await API.get("/songs/");
        setSongs(res.data);
      } catch (err) {
        console.error("Error fetching songs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return <div className="text-gray-400 p-4">Loading songs...</div>;
  }

  if (!songs.length) {
    return <div className="text-gray-400 p-4">No songs found.</div>;
  }

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold mb-2">All Songs</h2>
      {songs.map((song) => (
        <div
          key={song.id}
          className={`flex items-center justify-between p-2 rounded cursor-pointer
          ${currentSong?.id === song.id ? "bg-green-700" : "bg-neutral-800 hover:bg-neutral-700"}`}
          onClick={() => playSong(song)}
        >
          <div>
            <div className="font-semibold">{song.title}</div>
            <div className="text-sm text-gray-300">
              {song.artist?.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
