import { Music, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  musicEnabled: boolean;
  onMusicToggle: (enabled: boolean) => void;
  currentGame: string;
}

export default function Header({ musicEnabled, onMusicToggle, currentGame }: HeaderProps) {
  // Progress indicator: show hearts for each game
  const getProgressHearts = () => {
    const gameIndex = ["landing", "game1", "game2", "game3", "final"].indexOf(currentGame);
    return Array.from({ length: 3 }).map((_, i) => (
      <span key={i} className={`text-2xl ${i < gameIndex ? "text-pink-500" : "text-gray-300"}`}>
        ❤️
      </span>
    ));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/image9.png" alt="Logo" className="h-12 object-contain" />
        </div>

        {/* Progress Indicator - Center */}
        {currentGame !== "landing" && currentGame !== "final" && (
          <div className="flex gap-2 items-center">
            {getProgressHearts()}
          </div>
        )}

        {/* Music Toggle - Right */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onMusicToggle(!musicEnabled)}
          className="rounded-full hover:bg-pink-100"
        >
          {musicEnabled ? (
            <Music className="w-5 h-5 text-pink-500" />
          ) : (
            <Music2 className="w-5 h-5 text-gray-400" />
          )}
        </Button>
      </div>
    </header>
  );
}
