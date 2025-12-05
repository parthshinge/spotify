import React from "react";

type Artist = {
  id: string;
  name: string;
  avatar: string;
};

interface Props {
  artists: Artist[];
  activeArtist: string;
  onSelectArtist: (id: string) => void;
}

export default function Sidebar({ artists, activeArtist, onSelectArtist }: Props) {
  return (
    <aside className="w-64 p-6 bg-transparent flex flex-col gap-4 spotify-sidebar">
      <div>
        <h2 className="text-white text-lg font-semibold">Your Artists</h2>
      </div>

      <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
        {artists.map((a) => {
          const active = activeArtist === a.id;
          return (
            <button
              key={a.id}
              onClick={() => onSelectArtist(a.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-150 text-sm w-full text-left ${
                active
                  ? "bg-[#1DB954] text-black font-semibold"
                  : "hover:bg-white/5 text-white"
              }`}
            >
              <img
                src={a.avatar}
                alt={a.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <span className="truncate">{a.name}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
