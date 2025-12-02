import { createContext, useContext, useEffect, useRef, useState } from "react";

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const audioRef = useRef(new Audio());

  // Handle song changes
  useEffect(() => {
    if (!currentSong) return;

    const audio = audioRef.current;
    audio.src = currentSong.audio_file;
    audio.volume = volume;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      handleNextSong();
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    audio.play();
    setIsPlaying(true);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong]);

  const togglePlayPause = () => {
    if (!currentSong) return;

    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const playSong = (song, index, list) => {
    setPlaylist(list || []);
    setCurrentIndex(index);
    setCurrentSong(song);
  };

  const seek = (value) => {
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const changeVolume = (value) => {
    audioRef.current.volume = value;
    setVolume(value);
  };

  const handleNextSong = () => {
    if (currentIndex === null || currentIndex >= playlist.length - 1) return;
    playSong(playlist[currentIndex + 1], currentIndex + 1, playlist);
  };

  const handlePrevSong = () => {
    if (currentIndex <= 0) return;
    playSong(playlist[currentIndex - 1], currentIndex - 1, playlist);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        togglePlayPause,
        playSong,
        currentTime,
        duration,
        seek,
        volume,
        changeVolume,
        nextSong: handleNextSong,
        prevSong: handlePrevSong,
        playlist,
        currentIndex,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
