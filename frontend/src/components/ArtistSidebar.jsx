import { useEffect, useState } from "react";
import API from "../api";

export default function ArtistSidebar({ selectedArtistId, onSelect }) {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        // backend मध्ये /api/artists/ किंवा /api/artist/ कसा आहे त्याप्रमाणे बदल
        const res = await API.get("/artists/");
        setArtists(res.data);
      } catch (err) {
        console.error("Error loading artists", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white/5 backdrop-blur-lg rounded-3xl p-4 text-sm text-slate-100 shadow-xl">
      <h2 className="text-lg font-semibold mb-3">Artists</h2>

      {loading && <div className="text-xs text-slate-300">Loading…</div>}

      <button
        onClick={() => onSelect(null)}
        className={`mb-2 px-3 py-2 rounded-2xl text-left transition 
          ${selectedArtistId === null ? "bg-purple-600 text-white" : "hover:bg-white/10"}`}
      >
        All artists
      </button>

      <div className="space-y-1 overflow-y-auto">
        {artists.map((artist) => (
          <button
            key={artist.id}
            onClick={() => onSelect(artist.id)}
            className={`w-full px-3 py-2 rounded-2xl text-left transition 
              ${
                selectedArtistId === artist.id
                  ? "bg-purple-600 text-white"
                  : "hover:bg-white/10"
              }`}
          >
            {artist.name}
          </button>
        ))}
      </div>
    </aside>
  );
}
