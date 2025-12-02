import { useEffect, useState } from "react";
import API from "../api";
import { usePlayer } from "../context/PlayerContext";

// Controls component for search and liked toggle
function Controls({ search, onSearchChange, showLikedOnly, onToggleLikedOnly }) {
  return (
    <div className="sticky top-0 bg-black/80 backdrop-blur z-40 p-4 space-y-3">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search songs or artists..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-neutral-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition"
      />

      {/* All / Liked Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => onToggleLikedOnly(false)}
          className={`px-4 py-1 rounded-full font-medium transition ${
            !showLikedOnly
              ? "bg-green-500 text-black"
              : "bg-neutral-800 text-gray-300 hover:text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => onToggleLikedOnly(true)}
          className={`px-4 py-1 rounded-full font-medium transition ${
            showLikedOnly
              ? "bg-green-500 text-black"
              : "bg-neutral-800 text-gray-300 hover:text-white"
          }`}
        >
          Liked ❤️
        </button>
      </div>
    </div>
  );
}

export default function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [likedIds, setLikedIds] = useState(new Set());
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  const { playSong, currentSong } = usePlayer();

  // Load liked songs from localStorage on mount
  useEffect(() => {
    const storedLikedIds = localStorage.getItem("likedSongIds");
    if (storedLikedIds) {
      try {
        const parsed = JSON.parse(storedLikedIds);
        setLikedIds(new Set(parsed));
      } catch (err) {
        console.warn("Failed to parse liked songs from localStorage", err);
        setLikedIds(new Set());
      }
    }
  }, []);

  // Save liked songs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("likedSongIds", JSON.stringify(Array.from(likedIds)));
  }, [likedIds]);

  // Fetch songs on mount
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await API.get("/songs/");
        setSongs(res.data);
        setError(null);
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

  // Toggle like/unlike
  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // Compute filtered songs
  const filteredSongs = songs.filter((song) => {
    // Apply search filter
    const searchLower = search.toLowerCase();
    const matchesSearch =
      song.title.toLowerCase().includes(searchLower) ||
      song.artist?.name?.toLowerCase().includes(searchLower);

    if (!matchesSearch) return false;

    // Apply liked filter
    if (showLikedOnly && !likedIds.has(song.id)) {
      return false;
    }

    return true;
  });

  // Show loading state
  if (loading) {
    return (
      <div className="p-4">
        <Controls
          search={search}
          onSearchChange={setSearch}
          showLikedOnly={showLikedOnly}
          onToggleLikedOnly={setShowLikedOnly}
        />
        <div className="text-gray-400 p-4 text-center">Loading songs...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="p-4">
        <Controls
          search={search}
          onSearchChange={setSearch}
          showLikedOnly={showLikedOnly}
          onToggleLikedOnly={setShowLikedOnly}
        />
        <div className="text-red-400 p-4 text-sm">
          <div className="font-bold mb-1">Error loading songs ❌</div>
          <div>Status: {error.status ?? "no status"}</div>
          <div>Message: {error.message}</div>
          <pre className="mt-2 bg-black/50 p-2 rounded text-xs">
            {JSON.stringify(error.data, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  // Main render
  return (
    <div className="space-y-3">
      <div className="mb-2">
        <Controls
          search={search}
          onSearchChange={setSearch}
          showLikedOnly={showLikedOnly}
          onToggleLikedOnly={setShowLikedOnly}
        />
      </div>

      {/* No songs message */}
      {filteredSongs.length === 0 ? (
        <div className="text-gray-400 p-4 text-center">
          {songs.length === 0
            ? "No songs available."
            : showLikedOnly
            ? "No liked songs found."
            : "No songs match your search."}
        </div>
      ) : (
        // Song list
        <div className="space-y-3">
          <h2 className="text-lg font-bold mb-2">
            {showLikedOnly
              ? `Liked Songs (${filteredSongs.length})`
              : `All Songs (${filteredSongs.length})`}
          </h2>
          {filteredSongs.map((song, index) => (
            <div
              key={song.id}
              className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition border border-white/5 bg-white/3 backdrop-blur-md ${
                currentSong?.id === song.id
                  ? "ring-2 ring-[#10b981] bg-gradient-to-br from-[#10b981]/20 to-white/5"
                  : "hover:bg-white/5"
              }`}
              onClick={() => playSong(song, index, filteredSongs)}
            >
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{song.title}</div>
                <div className="text-sm text-gray-300 truncate">{song.artist?.name}</div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(song.id);
                }}
                className="ml-3 text-xl hover:scale-110 transition flex-shrink-0"
                title={likedIds.has(song.id) ? "Unlike" : "Like"}
              >
                {likedIds.has(song.id) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
