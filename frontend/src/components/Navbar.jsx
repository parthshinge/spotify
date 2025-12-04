export default function Navbar() {
  return (
    <header className="w-full py-6 px-8 border-b border-white/15 backdrop-blur-xl sticky top-0 z-30 bg-black/40 shadow-2xl shadow-purple-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl drop-shadow-lg">🎵</div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">Spotify</h1>
          </div>
          <p className="text-sm text-gray-300/80">Discover, play, and enjoy music</p>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <input 
              className="rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:bg-white/8 transition w-64" 
              placeholder="Search songs, artists..." 
            />
            <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>
      </div>
    </header>
  );
}
