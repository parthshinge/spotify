import ArtistSidebar from "./components/ArtistSidebar";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";

import { useState } from "react";

export default function App() {
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-slate-900 pb-28">
      <div className="max-w-6xl mx-auto px-4 pt-6 flex gap-4">
        {/* Left: artists */}
        <ArtistSidebar
          selectedArtistId={selectedArtistId}
          onSelect={setSelectedArtistId}
        />

        {/* Right: songs */}
        <main className="flex-1 h-[calc(100vh-6rem)]">
          <SongList selectedArtistId={selectedArtistId} />
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
