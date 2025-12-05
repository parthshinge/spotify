import { useEffect, useState } from "react";
import API from "../api";

export default function ArtistSidebar({ selectedArtistId, onSelect }) {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await API.get("/artists/");
        setArtists(res.data || []);
      } catch (err) {
        console.error("Error loading artists", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  return (
    <aside className="hidden lg:flex lg:flex-col w-60 p-4 spotify-sidebar rounded-3xl text-sm text-white">
      <h2 className="text-lg font-semibold mb-3">Artists</h2>

      {loading && <div className="text-xs muted">Loading…</div>}

      <div className="space-y-2 overflow-y-auto">
        <button
          onClick={() => onSelect(null)}
          className={`artist-item w-full flex items-center gap-3 px-3 py-2 rounded-2xl text-left ${
            selectedArtistId === null ? "active" : ""
          }`}
        >
          <div className="artist-avatar">All</div>
          <div className="truncate">All artists</div>
        </button>

        {artists.map((artist) => (
          <button
            key={artist.id}
            onClick={() => onSelect(artist.id)}
            className={`artist-item w-full flex items-center gap-3 px-3 py-2 rounded-2xl text-left ${
              selectedArtistId === artist.id ? "active" : ""
            }`}
          >
            <div className="artist-avatar" style={{backgroundImage: artist.image ? `url(${artist.image})` : undefined, backgroundSize:'cover'}}>
              {!artist.image && (artist.name || "?").charAt(0).toUpperCase()}
            </div>
            <div className="truncate">
              <div className="text-sm font-medium">{artist.name}</div>
              <div className="text-xs muted">{artist.genre || "Artist"}</div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
