export default function SongList({ selectedArtistId }) {
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
    return <div className="text-slate-300">Loading songs…</div>;
  }

  // 👉 इथे artist filter
  const filteredSongs = songs.filter((song) => {
    if (!selectedArtistId) return true;
    return song.artist && song.artist.id === selectedArtistId;
  });

  if (!filteredSongs.length) {
    return <div className="text-slate-400">No songs for this artist.</div>;
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 shadow-xl h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-3">
        {selectedArtistId ? "Songs by artist" : "All Songs"}
      </h2>

      <div className="space-y-2">
        {filteredSongs.map((song, index) => {
          const isActive = currentSong?.id === song.id;
          return (
            <div
              key={song.id}
              onClick={() => playSong(song, index, filteredSongs)}
              className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition
                ${
                  isActive
                    ? "bg-purple-600/80 text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
            >
              <div>
                <div className="font-semibold text-sm">{song.title}</div>
                <div className="text-xs text-slate-300">
                  {song.artist?.name || "Unknown artist"}
                </div>
              </div>

              {/* small play icon */}
              <div className="text-lg">
                {isActive ? "⏸" : "▶"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
