import React from "react";
import { Clock } from "lucide-react";

type Artist = {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  description: string;
};

type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // mm:ss
  albumArt: string;
};

interface Props {
  artist: Artist;
  songs: Song[];
  onPlaySong: (song: Song) => void;
}

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function MainContent({ artist, songs, onPlaySong }: Props) {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Header / Hero */}
      <section
        className="relative h-80 px-10 pt-16 pb-6 flex items-end"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,20,0.6), rgba(0,0,0,0.9))",
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <img
            src={artist.cover}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex items-end gap-8">
          <div className="art w-80 h-64 rounded-xl overflow-hidden shadow-xl">
            <img
              src={artist.cover}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="meta">
            <div className="label text-sm text-[#b3b3b3] tracking-wider uppercase">ARTIST</div>
            <h1 className="artist-name text-4xl font-extrabold text-white mt-2">{artist.name}</h1>
            <p className="artist-desc mt-3 text-sm text-[#b3b3b3] max-w-3xl">{artist.description}</p>
          </div>
        </div>
      </section>

      {/* Popular Songs Table */}
      <section className="px-10 py-6">
        <div className="mb-4">
          <h2 className="text-white text-xl font-semibold">Popular Songs</h2>
        </div>

        <div className="bg-black rounded-xl overflow-hidden shadow-xl songs-table">
          <div className="grid grid-cols-[48px_2fr_1.5fr_1.5fr_96px] gap-0 px-6 py-3 border-b border-white/10 text-[#b3b3b3] text-sm">
            <div className="text-center">#</div>
            <div>Title</div>
            <div>Artist</div>
            <div>Album</div>
            <div className="text-right"><Clock className="inline w-4 h-4 align-middle" /></div>
          </div>

          <div>
            {songs.map((song, idx) => {
              const even = idx % 2 === 1;
              return (
                <button
                  key={song.id}
                  onClick={() => onPlaySong(song)}
                  className={`w-full text-left grid grid-cols-[48px_2fr_1.5fr_1.5fr_96px] gap-0 px-6 py-3 border-b border-white/5 transition-colors duration-150 ${
                    even ? "bg-[#070707]" : "bg-black"
                  } hover:bg-[#181818]`}
                >
                  <div className="text-[#b3b3b3] text-center">{idx + 1}</div>
                  <div className="text-white truncate">{song.title}</div>
                  <div className="text-[#b3b3b3] truncate">{song.artist}</div>
                  <div className="text-[#b3b3b3] truncate">{song.album}</div>
                  <div className="text-[#b3b3b3] text-right">{song.duration}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
