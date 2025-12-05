import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // mm:ss
  albumArt: string;
};

interface Props {
  currentSong: Song;
  isPlaying: boolean;
  onPlayPause: () => void;
}

function parseDuration(duration: string) {
  const parts = duration.split(":").map((p) => parseInt(p, 10));
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
}

export default function PlayerBar({ currentSong, isPlaying, onPlayPause }: Props) {
  const total = parseDuration(currentSong.duration);
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(72);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setCurrent(0);
  }, [currentSong.id]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => {
          if (c >= total) {
            window.clearInterval(intervalRef.current ?? 0);
            return total;
          }
          return c + 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isPlaying, total]);

  const percent = total > 0 ? Math.min(100, (current / total) * 100) : 0;

  function formatTime(s: number) {
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  }

  function seekToPercent(p: number) {
    const t = Math.round((p / 100) * total);
    setCurrent(Math.max(0, Math.min(total, t)));
  }

  function onTrackClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const p = (x / rect.width) * 100;
    seekToPercent(p);
  }

  return (
    <footer className="h-24 bg-[#111111] border-t border-[#222222] px-6 flex items-center justify-between gap-4 player-bar">
      {/* Left */}
      <div className="flex items-center gap-4 w-80">
        <img src={currentSong.albumArt} alt={currentSong.title} className="w-14 h-14 rounded object-cover" />
        <div className="flex flex-col overflow-hidden">
          <span className="text-white text-sm truncate">{currentSong.title}</span>
          <span className="text-[#b3b3b3] text-xs truncate">{currentSong.artist}</span>
        </div>
      </div>

      {/* Center */}
      <div className="flex-1 flex flex-col items-center gap-3 max-w-3xl">
        <div className="flex items-center gap-6">
          <button className="text-[#b3b3b3] hover:text-white p-2">
            <SkipBack className="w-5 h-5" />
          </button>
          <button onClick={onPlayPause} className="bg-white text-black rounded-full p-3 w-14 h-14 flex items-center justify-center shadow-lg">
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button className="text-[#b3b3b3] hover:text-white p-2">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 w-full">
          <div className="text-[#b3b3b3] text-xs w-12 text-right">{formatTime(current)}</div>
          <div className="flex-1" onClick={onTrackClick} style={{ cursor: "pointer" }}>
            <div className="h-2 bg-[#333] rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: `${percent}%` }} />
            </div>
          </div>
          <div className="text-[#b3b3b3] text-xs w-12 text-left">{currentSong.duration}</div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 w-40 justify-end">
        <Volume2 className="w-4 h-4 text-[#b3b3b3]" />
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value, 10))}
          className="w-28"
          aria-label="Volume"
        />
      </div>
    </footer>
  );
}
