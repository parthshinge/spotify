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
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#050016]/80 via-[#1f0a3a]/70 to-transparent text-white p-4 border-t border-white/5 rounded-t-3xl shadow-2xl flex flex-col gap-3 z-50">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="bg-white/4 backdrop-blur-md border border-white/6 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-xl">🎵</div>
              <div>
                <div className="font-semibold">{currentSong.title}</div>
                <div className="text-sm text-gray-300">{currentSong.artist?.name}</div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
            />
            <div className="flex items-center justify-center gap-6">
              <button onClick={prevSong} className="text-white text-2xl">⏮️</button>
              <button onClick={togglePlayPause} className="bg-[#a855f7] hover:bg-[#9226e0] text-white rounded-full p-3">
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              <button onClick={nextSong} className="text-white text-2xl">⏭️</button>
            </div>
          </div>

          <div className="w-48 flex items-center gap-3">
            <span className="text-white">🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => changeVolume(Number(e.target.value))}
              className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#a855f7]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
