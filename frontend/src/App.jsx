import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen pb-16">
      <Navbar />
      <SongList />
      <PlayerBar />
    </div>
  );
}
