import React from 'react';

export default function BottomNav(){
  return (
    <div className="lg:hidden fixed bottom-16 left-4 right-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-2 flex items-center justify-around z-40">
      <button className="text-white text-2xl">🏠</button>
      <button className="text-white text-2xl">❤️</button>
      <button className="text-white text-2xl">📚</button>
      <button className="text-white text-2xl">👤</button>
    </div>
  )
}
