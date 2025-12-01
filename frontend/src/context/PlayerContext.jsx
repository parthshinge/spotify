import { createContext, useContext, useEffect, useRef, useState } from "react";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  // जेव्हा currentSong बदलतो तेव्हा नवा गाणं load + play
  useEffect(() => {
    if (!currentSong) return;

    audioRef.current.src = currentSong.audio_file; // API मध्ये full URL येईल
    audioRef.current.play();
    setIsPlaying(true);
  }, [currentSong]);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  const togglePlayPause = () => {
    if (!currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const value = {
    currentSong,
    isPlaying,
    playSong,
    togglePlayPause,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}

// custom hook – easy वापरायला
export function usePlayer() {
  return useContext(PlayerContext);
}
