import React from 'react';

function SmallCard({ emoji, title }) {
  return (
    <div className="flex-1 rounded-2xl p-4 bg-white/3 backdrop-blur-lg border border-white/5 flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-xl bg-neutral-800 flex items-center justify-center text-3xl">{emoji}</div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}

export default function DiscoverCards() {
  return (
    <div className="space-y-6">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center text-white font-bold">P</div>
          <div>
            <h2 className="text-3xl font-bold">Discover</h2>
            <p className="text-sm text-gray-300">Curated picks for you</p>
          </div>
        </div>

        <div className="text-gray-300">⋯</div>
      </div>

      {/* Avatars row */}
      <div className="flex items-center gap-3 overflow-x-auto py-2">
        {['You','Jenny','Sam','Ava','Rita'].map((n)=> (
          <div key={n} className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-sm">{n[0]}</div>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <input className="w-full rounded-full bg-white/5 px-4 py-3 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#a855f7]" placeholder="Search music" />
        <div className="absolute right-4 top-3 text-gray-300">🔍</div>
      </div>

      {/* Made for you */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 rounded-3xl p-6 bg-gradient-to-br from-[#a855f7]/30 to-[#ec4899]/20 backdrop-blur-lg border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-lg bg-neutral-800 flex items-center justify-center text-4xl">🎵</div>
            <div>
              <div className="text-xl font-bold">Long Ride</div>
              <div className="text-sm text-gray-300">Perfect for long drives</div>
            </div>
          </div>
        </div>

        <SmallCard emoji={'💕'} title={'Love'} />
        <SmallCard emoji={'😎'} title={'Chill'} />
      </div>

      {/* Discover Weekly */}
      <div className="rounded-2xl p-4 bg-white/3 backdrop-blur-lg border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-lg bg-neutral-800 flex items-center justify-center text-3xl">📻</div>
          <div>
            <div className="font-bold">Discover Weekly</div>
            <div className="text-sm text-gray-300">your weekly mix</div>
          </div>
        </div>
        <div className="text-[#a855f7]">→</div>
      </div>

      {/* Today hits */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Today hits</h3>
          <button className="text-sm text-[#a855f7]">see all</button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({length:8}).map((_,i)=> (
            <div key={i} className="w-40 rounded-xl p-3 bg-white/5 backdrop-blur-lg border border-white/5">
              <div className="w-full h-28 rounded-md bg-neutral-800 flex items-center justify-center text-3xl mb-2">🎧</div>
              <div className="text-sm font-semibold">Hit {i+1}</div>
              <div className="text-xs text-gray-300">Artist</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
