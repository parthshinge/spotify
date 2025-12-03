import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DiscoverCards from "./components/DiscoverCards";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/30 to-black text-white overflow-hidden">
      {/* Decorative gradient background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex gap-8">
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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl h-full max-h-[calc(100vh-200px)] overflow-y-auto">
            <SongList />
          </div>
        </aside>
      </div>

      <PlayerBar />
      <BottomNav />
    </div>
  );
}
