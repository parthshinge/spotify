import { usePlayer } from "../context/PlayerContext";

function formatTime(sec = 0) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
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
    <div className="fixed bottom-0 left-0 right-0 player-bar py-3 px-6">
      <div className="max-w-full mx-auto flex items-center gap-6">
        {/* Left: album art + title */}
        <div className="flex items-center gap-4 w-96">
          <div className="w-14 h-14 bg-black rounded-sm overflow-hidden">
            {/* square artwork */}
            {currentSong.album?.cover ? (
              <img src={currentSong.album.cover} alt={currentSong.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">🎵</div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-white truncate">{currentSong.title}</div>
            <div className="text-xs muted truncate">{currentSong.artist?.name}</div>
          </div>
        </div>

        {/* Center: controls */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-6 mb-2">
            <button onClick={prevSong} className="text-white/70 hover:text-white text-2xl">⏮️</button>
            <button onClick={togglePlayPause} className="w-12 h-12 rounded-full bg-[var(--spotify-accent)] text-black flex items-center justify-center text-2xl shadow-lg">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={nextSong} className="text-white/70 hover:text-white text-2xl">⏭️</button>
          </div>

          <div className="flex items-center gap-3 w-full max-w-2xl">
            <span className="text-xs muted">{formatTime(currentTime)}</span>
            <input
              type="range"
              className="progress-track flex-1"
              min={0}
              max={duration || 0}
              value={currentTime}
              aria-valuemin={0}
              aria-valuemax={duration || 0}
              aria-valuenow={Math.floor(currentTime)}
              onChange={(e) => seek(Number(e.target.value))}
              onInput={(e) => seek(Number(e.target.value))}
              style={{
                background: `linear-gradient(90deg, var(--spotify-accent) ${
                  duration ? Math.round((currentTime / duration) * 100) : 0
                }%, rgba(255,255,255,0.08) ${
                  duration ? Math.round((currentTime / duration) * 100) : 0
                }%)`,
              }}
            />
            <span className="text-xs muted">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: volume + icons */}
        <div className="flex items-center gap-4 w-64 justify-end">
          <div className="hidden md:flex items-center gap-2 w-36">
            <span className="text-white/70">🔊</span>
            <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e) => changeVolume(Number(e.target.value))} className="w-full progress-track" />
          </div>
          <div className="flex items-center gap-3 muted text-sm">
            <button title="Queue">≡</button>
            <button title="Devices">💻</button>
            <button title="Like">♡</button>
          </div>
        </div>
      </div>
    </div>
  );
}
