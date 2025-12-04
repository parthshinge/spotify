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
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent text-white border-t border-white/20 backdrop-blur-2xl shadow-2xl shadow-purple-900/50 z-50 pb-safe">
      <div className="max-w-7xl mx-auto w-full px-8 py-8">
        <div className="bg-gradient-to-r from-white/10 to-white/6 backdrop-blur-2xl border border-white/20 rounded-3xl p-7 shadow-2xl shadow-violet-500/30">
          {/* Song Info & Progress */}
          <div className="flex items-center gap-8 mb-6">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl shadow-2xl shadow-violet-500/50 flex-shrink-0 drop-shadow-lg">🎵</div>
              <div className="min-w-0">
                <div className="font-bold text-white truncate text-lg drop-shadow">{currentSong.title}</div>
                <div className="text-sm text-gray-300 truncate drop-shadow">{currentSong.artist?.name}</div>
              </div>
            </div>

            {/* Seek Bar */}
            <div className="flex-1 flex items-center gap-4 min-w-0">
              <span className="text-xs text-gray-400 w-12 text-right flex-shrink-0">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={(e) => seek(Number(e.target.value))}
                className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-violet-500 hover:accent-violet-400 shadow-lg"
              />
              <span className="text-xs text-gray-400 w-12 text-left flex-shrink-0">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Left: Volume */}
            <div className="flex items-center gap-3 w-48">
              <span className="text-lg drop-shadow-lg">🔊</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => changeVolume(Number(e.target.value))}
                className="flex-1 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-violet-500 shadow-lg"
              />
              <span className="text-xs text-gray-400 w-8 text-right">{Math.round(volume * 100)}%</span>
            </div>

            {/* Center: Play Controls */}
            <div className="flex items-center justify-center gap-8">
              <button onClick={prevSong} className="text-white/60 hover:text-white text-2xl transition hover:scale-120 duration-200 drop-shadow-lg hover:drop-shadow-2xl">⏮️</button>
              <button onClick={togglePlayPause} className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl shadow-violet-500/50 transform hover:scale-120 transition-all duration-200 drop-shadow-lg">
                <span className="text-2xl">{isPlaying ? '⏸️' : '▶️'}</span>
              </button>
              <button onClick={nextSong} className="text-white/60 hover:text-white text-2xl transition hover:scale-120 duration-200 drop-shadow-lg hover:drop-shadow-2xl">⏭️</button>
            </div>

            {/* Right: Empty spacer */}
            <div className="w-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
