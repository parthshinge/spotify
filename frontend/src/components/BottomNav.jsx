import React from 'react';

export default function BottomNav(){
  return (
    <div className="lg:hidden fixed bottom-20 left-4 right-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex items-center justify-around z-40 shadow-xl">
      <button className="flex-1 flex justify-center text-2xl hover:scale-110 transition">🏠</button>
      <button className="flex-1 flex justify-center text-2xl hover:scale-110 transition">❤️</button>
      <button className="flex-1 flex justify-center text-2xl hover:scale-110 transition">📚</button>
      <button className="flex-1 flex justify-center text-2xl hover:scale-110 transition">👤</button>
    </div>
  )
}
