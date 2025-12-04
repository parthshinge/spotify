import React, { useState } from 'react';

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('Home');

  const menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '🔥', label: 'Trending' },
    { icon: '❤️', label: 'Favorites' },
    { icon: '📚', label: 'Library' },
    { icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="flex flex-col h-full sticky top-24">
      <div className="bg-gradient-to-b from-white/8 to-white/3 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-900/40">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/20">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-2xl shadow-violet-500/50 ring-2 ring-white/30 drop-shadow-lg">P</div>
          <div>
            <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Welcome back</div>
            <div className="text-lg font-bold text-white">Parth</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 mb-8">
          {menuItems.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveMenu(label)}
              className={`flex items-center gap-4 w-full px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
                activeMenu === label
                  ? 'bg-gradient-to-r from-violet-500/80 to-purple-500/80 text-white shadow-2xl shadow-violet-500/50 scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
              }`}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="pt-8 border-t border-white/20">
          <button className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/30 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
