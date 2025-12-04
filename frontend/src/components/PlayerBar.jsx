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
    <div className="fixed bottom-0 left-0 right-0 px-4 pb-4">
      <div className="mx-auto max-w-3xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-5 py-3 flex flex-col gap-3 text-slate-900">
        {/* Upper: tiny album + title */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500" />
            <div className="leading-tight">
              <div className="text-sm font-semibold truncate">
                {currentSong.title}
              </div>
              <div className="text-xs text-slate-600 truncate">
                {currentSong.artist?.name || "Unknown artist"}
              </div>
            </div>
          </div>

          {/* Volume */}
          <div className="hidden md:flex items-center gap-2 w-40">
            <span className="text-xs">🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => changeVolume(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
          </div>
        </div>

        {/* Middle: controls */}
        <div className="flex items-center justify-center gap-5">
          <button onClick={prevSong} className="text-xl">
            ⏮️
          </button>
          <button
            onClick={togglePlayPause}
            className="w-11 h-11 rounded-full bg-rose-500 text-white flex items-center justify-center text-2xl shadow-lg"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button onClick={nextSong} className="text-xl">
            ⏭️
          </button>
        </div>

        {/* Bottom: progress bar */}
        <div className="flex items-center gap-3 text-xs text-slate-700">
          <span className="w-10 text-right">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            className="flex-1 accent-rose-500"
          />
          <span className="w-10">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
