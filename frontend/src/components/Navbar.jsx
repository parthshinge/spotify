export default function Navbar() {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center text-white font-bold">P</div>
          <div>
            <div className="text-sm text-gray-300">Good evening</div>
            <div className="font-bold">Parth</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <input className="rounded-full bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a855f7]" placeholder="Search music" />
          <button className="text-sm text-gray-300">⋯</button>
        </div>
      </div>
    </header>
  );
}
