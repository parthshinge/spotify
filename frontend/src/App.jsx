import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DiscoverCards from "./components/DiscoverCards";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f0a3a] via-[#3c1487] to-[#050016] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex gap-6">
        {/* Left Sidebar - hidden on small screens */}
        <aside className="hidden lg:flex lg:w-72 flex-col">
          <Sidebar />
        </aside>

        {/* Center content */}
        <main className="flex-1 max-w-3xl">
          <DiscoverCards />
        </main>

        {/* Right panel - Song list */}
        <aside className="hidden xl:block xl:w-96">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl h-full">
            <SongList />
          </div>
        </aside>
      </div>

      <PlayerBar />
      <BottomNav />
    </div>
  );
}
