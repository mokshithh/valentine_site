import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";
import Landing from "./pages/Landing";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import FinalPage from "./pages/FinalPage";
import Header from "./components/Header";
import BackgroundHearts from "./components/BackgroundHearts";

type GameState = "landing" | "game1" | "game2" | "game3" | "final";

function App() {
  const [currentGame, setCurrentGame] = useState<GameState>("landing");
  const [musicEnabled, setMusicEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (musicEnabled) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, user interaction required
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicEnabled]);

  const handleGameProgress = (nextGame: GameState) => {
    setCurrentGame(nextGame);
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <audio
          ref={audioRef}
          src="/assets/music.mp3"
          loop
          style={{ display: "none" }}
        />
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative">
          <BackgroundHearts />
          <Header musicEnabled={musicEnabled} onMusicToggle={setMusicEnabled} currentGame={currentGame} />
          
          <main className="pt-24">
            {currentGame === "landing" && (
              <Landing onStart={() => handleGameProgress("game1")} />
            )}
            {currentGame === "game1" && (
              <Game1 onComplete={() => handleGameProgress("game2")} />
            )}
            {currentGame === "game2" && (
              <Game2 onComplete={() => handleGameProgress("game3")} />
            )}
            {currentGame === "game3" && (
              <Game3 onComplete={() => handleGameProgress("final")} />
            )}
            {currentGame === "final" && (
              <FinalPage />
            )}
          </main>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
