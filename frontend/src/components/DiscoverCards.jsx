import React from 'react';

function FeaturedCard({ title, subtitle, emoji }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-violet-500/40 via-purple-500/30 to-pink-500/20 backdrop-blur-2xl border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer h-40 flex items-end hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
      <div className="relative z-10">
        <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{emoji}</div>
        <h3 className="text-2xl font-bold drop-shadow-lg">{title}</h3>
        <p className="text-sm text-gray-200 mt-1 drop-shadow">{subtitle}</p>
      </div>
    </div>
  );
}

export default function DiscoverCards({ search, onSearchChange }) {
  return (
    <div className="space-y-12 pb-8">
      {/* Welcome Section + Search */}
      <section>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <span className="text-4xl">👋</span>
              <span>Welcome to Your Music Hub</span>
            </h2>
            <p className="text-sm text-purple-100/70">Discover, play, and enjoy music</p>
          </div>

          <div className="hidden md:block w-80">
            <div className="relative">
              <input
                value={search ?? ""}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Search music"
                className="w-full rounded-full bg-white/8 backdrop-blur-lg border border-white/20 px-4 py-2.5 text-white placeholder-purple-200/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200 shadow-lg"
              />
              <span className="absolute right-3 top-2 text-purple-200/60">🔍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span>🎵</span> Featured For You
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <FeaturedCard title="Midnight Focus" subtitle="Deep focus beats" emoji="🌙" />
          <FeaturedCard title="Summer Vibes" subtitle="Feel-good hits" emoji="☀️" />
        </div>
      </section>

      {/* Popular Playlists */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">🔥 Trending Now</h2>
          <button className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition">View all →</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['Chill Hits', 'Party Mix', 'Workout', 'Sleep'].map((name, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white/8 backdrop-blur-xl border border-white/20 hover:border-white/30 hover:bg-white/12 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105 hover:-translate-y-1">
              <div className="w-full h-32 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{'🎧'}</div>
              <div className="p-4">
                <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition drop-shadow">{name}</p>
                <p className="text-xs text-gray-400 mt-1 drop-shadow">Playlist • 50+ songs</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">✨ New Releases</h2>
          <button className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition">View all →</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 group cursor-pointer">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-violet-500/60 to-pink-500/40 flex items-center justify-center text-6xl mb-3 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300 group-hover:scale-105">🎧</div>
              <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition">New Song {i + 1}</p>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats or Info Section */}
      <section className="grid grid-cols-3 gap-4 mt-12">
        <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition">
          <div className="text-3xl font-bold text-violet-400">1,234</div>
          <p className="text-sm text-gray-400 mt-2">Total Songs</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition">
          <div className="text-3xl font-bold text-pink-400">24h</div>
          <p className="text-sm text-gray-400 mt-2">Listening Time</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition">
          <div className="text-3xl font-bold text-purple-400">47</div>
          <p className="text-sm text-gray-400 mt-2">Liked Songs</p>
        </div>
      </section>
    </div>
  );
}
