import { usePlayer } from "../context/PlayerContext";

export default function PlayerBar() {
  const { currentSong, isPlaying, togglePlayPause } = usePlayer();

  if (!currentSong) return null; // अजून काहीही select नाही

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-3 border-t border-neutral-700 flex items-center justify-between">
      <div>
        <div className="font-semibold">{currentSong.title}</div>
        <div className="text-sm text-gray-300">{currentSong.artist?.name}</div>
      </div>

      <button
        onClick={togglePlayPause}
        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded font-semibold"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
