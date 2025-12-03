import React from 'react';

function FeaturedCard({ title, subtitle, emoji }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-violet-500/40 via-purple-500/30 to-pink-500/20 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-40 flex items-end">
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
      <div className="relative z-10">
        <div className="text-5xl mb-3">{emoji}</div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default function DiscoverCards() {
  return (
    <div className="space-y-8 pb-8">
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
            <div key={i} className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">{'🎧'}</div>
              <div className="p-4">
                <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition">{name}</p>
                <p className="text-xs text-gray-400 mt-1">Playlist</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section>
        <h2 className="text-2xl font-bold mb-6">✨ New Releases</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 group cursor-pointer">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-violet-500/60 to-pink-500/40 flex items-center justify-center text-6xl mb-3 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300">🎧</div>
              <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition">New Song {i + 1}</p>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
