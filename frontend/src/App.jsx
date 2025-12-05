import ArtistSidebar from "./components/ArtistSidebar";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";

import { useState } from "react";

export default function App() {
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  return (
    <div className="min-h-screen bg-[var(--spotify-bg)] text-white pb-28">
      <div className="max-w-7xl mx-auto px-6 pt-8 flex gap-6">
        {/* Left: artists */}
        <ArtistSidebar
          selectedArtistId={selectedArtistId}
          onSelect={setSelectedArtistId}
        />

        {/* Main content */}
        <main className="flex-1 h-[calc(100vh-8rem)]">
          <SongList selectedArtistId={selectedArtistId} />
        </main>
      </div>

      <PlayerBar />
    </div>
  );
}
