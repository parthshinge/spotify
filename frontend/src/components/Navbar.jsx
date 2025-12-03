export default function Navbar() {
  return (
    <header className="w-full py-6 px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Discover</h1>
          <p className="text-sm text-gray-400 mt-1">Find your next favorite track</p>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <input 
              className="rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:bg-white/8 transition w-64" 
              placeholder="Search songs..." 
            />
            <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>
      </div>
    </header>
  );
}
