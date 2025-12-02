import { usePlayer } from "../context/PlayerContext";

// Format time helper
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function PlayerBar() {
  const {
    currentSong,
    isPlaying,
    togglePlayPause,
    currentTime,
    duration,
    seek,
    volume,
    changeVolume,
    nextSong,
    prevSong,
  } = usePlayer();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 border-t border-neutral-700 rounded-t-3xl shadow-2xl flex flex-col gap-4 z-50">
      {/* Song Info */}
      <div className="text-center">
        <h3 className="font-bold text-lg">{currentSong.title}</h3>
        <p className="text-sm text-gray-400">{currentSong.artist?.name}</p>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col gap-2">
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-green-500"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={prevSong}
          className="text-white hover:text-green-500 transition p-2 text-2xl"
          title="Previous"
        >
          ⏮️
        </button>

        <button
          onClick={togglePlayPause}
          className="bg-green-500 hover:bg-green-600 text-black rounded-full p-3 transition"
          title={isPlaying ? "Pause" : "Play"}
        >
          <span className="text-2xl">
            {isPlaying ? "⏸️" : "▶️"}
          </span>
        </button>

        <button
          onClick={nextSong}
          className="text-white hover:text-green-500 transition p-2 text-2xl"
          title="Next"
        >
          ⏭️
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3">
        <span className="text-white text-lg min-w-fit">🔊</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => changeVolume(Number(e.target.value))}
          className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-green-500"
        />
      </div>
    </div>
  );
}
