import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import PlayerBar from "./components/PlayerBar";

const artists = [
  {
    id: "1",
    name: "The Midnight",
    avatar:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
    description: "Synthwave duo creating nostalgic 80s-inspired electronic music",
  },
  {
    id: "2",
    name: "Arctic Monkeys",
    avatar:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=600&fit=crop",
    description: "British rock band known for their indie and alternative rock sound",
  },
  {
    id: "3",
    name: "Billie Eilish",
    avatar:
      "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=1200&h=600&fit=crop",
    description: "Pop sensation known for her unique vocal style and dark aesthetics",
  },
  {
    id: "4",
    name: "Tame Impala",
    avatar:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop",
    description: "Psychedelic music project blending rock, pop, and electronic elements",
  },
  {
    id: "5",
    name: "Daft Punk",
    avatar:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&h=600&fit=crop",
    description: "Legendary French electronic music duo pioneers of house and techno",
  },
  {
    id: "6",
    name: "Fleetwood Mac",
    avatar:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
    cover:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&h=600&fit=crop",
    description: "Iconic rock band with timeless classics from the 70s and beyond",
  },
];

const songs = [
  { id: "1", title: "Sunset", artist: "The Midnight", album: "Endless Summer", duration: "4:32", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "2", title: "Vampires", artist: "The Midnight", album: "Nocturnal", duration: "3:58", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "3", title: "Los Angeles", artist: "The Midnight", album: "Endless Summer", duration: "4:15", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "4", title: "Synthetic", artist: "The Midnight", album: "Days of Thunder", duration: "4:47", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "5", title: "Gloria", artist: "The Midnight", album: "Kids", duration: "4:04", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "6", title: "Days of Thunder", artist: "The Midnight", album: "Days of Thunder", duration: "5:12", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "7", title: "Crystalline", artist: "The Midnight", album: "Monsters", duration: "3:42", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "8", title: "America Online", artist: "The Midnight", album: "Monsters", duration: "4:28", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "9", title: "Brooklyn", artist: "The Midnight", album: "Nocturnal", duration: "3:55", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
  { id: "10", title: "River of Darkness", artist: "The Midnight", album: "Monsters", duration: "4:18", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
];

export default function App() {
  const [activeArtist, setActiveArtist] = useState(artists[0].id);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedArtist = artists.find((a) => a.id === activeArtist) || artists[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b343c] via-[#050505] to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-8 flex gap-6">
        <Sidebar artists={artists} activeArtist={activeArtist} onSelectArtist={setActiveArtist} />

        <MainContent artist={selectedArtist} songs={songs} onPlaySong={(s) => { setCurrentSong(s); setIsPlaying(true); }} />
      </div>

      <PlayerBar currentSong={currentSong} isPlaying={isPlaying} onPlayPause={() => setIsPlaying((v) => !v)} />
    </div>
  );
}
