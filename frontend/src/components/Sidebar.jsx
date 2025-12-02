import React from 'react';

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full sticky top-6">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center text-white text-lg font-bold shadow-md">P</div>
          <div>
            <div className="text-sm text-gray-300">Hi!</div>
            <div className="font-bold text-white">Parth</div>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            ['🏠', 'Home'],
            ['🎤', 'Artist'],
            ['❤️', 'Favorite'],
            ['📚', 'Library'],
            ['❓', 'Help'],
            ['⚙️', 'Settings'],
          ].map(([icon, label]) => (
            <button
              key={label}
              className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition"
            >
              <span className="text-lg">{icon}</span>
              <span className="text-sm text-gray-200">{label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-white/5">
          <button className="w-full text-left text-sm text-pink-400">Logout</button>
        </div>
      </div>
    </div>
  );
}
