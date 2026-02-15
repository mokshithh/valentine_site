import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Game1Props {
  onComplete: () => void;
}

export default function Game1({ onComplete }: Game1Props) {
  const [tiles, setTiles] = useState<Array<{ id: number; isUnique: boolean }>>([]);
  const [won, setWon] = useState(false);
  const [shakeId, setShakeId] = useState<number | null>(null);
  const [hintUsed, setHintUsed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Determine grid size based on screen size
  const getGridSize = () => {
    if (typeof window === "undefined") return { cols: 10, total: 100 };
    // Mobile: 8 cols x ~8 rows = ~64 tiles (50-80 range)
    // Desktop: 10 cols x ~12 rows = 120 tiles (80-120 range)
    return window.innerWidth < 768 
      ? { cols: 8, total: 64 } 
      : { cols: 10, total: 120 };
  };

  useEffect(() => {
    const { total } = getGridSize();
    // Place unique tile in a subtle spot (not too obvious)
    // Avoid corners and center - use middle-ish areas
    const subtlePositions = [];
    for (let i = 0; i < total; i++) {
      const row = Math.floor(i / getGridSize().cols);
      const col = i % getGridSize().cols;
      // Avoid first/last row and first/last col
      if (row > 1 && row < getGridSize().cols - 2 && col > 1 && col < getGridSize().cols - 2) {
        subtlePositions.push(i);
      }
    }
    const uniqueIndex = subtlePositions.length > 0 
      ? subtlePositions[Math.floor(Math.random() * subtlePositions.length)]
      : Math.floor(Math.random() * total);
    
    const newTiles = Array.from({ length: total }).map((_, i) => ({
      id: i,
      isUnique: i === uniqueIndex,
    }));
    setTiles(newTiles);
  }, []);

  const handleTileClick = (id: number) => {
    const tile = tiles.find((t) => t.id === id);
    if (!tile) return;

    if (tile.isUnique) {
      setWon(true);
      triggerConfetti();
      playSound("success");
    } else {
      setShakeId(id);
      playSound("wrong");
      setTimeout(() => setShakeId(null), 500);
    }
  };

  const handleHint = () => {
    if (hintUsed) return;
    setHintUsed(true);
    setShowHint(true);
    setTimeout(() => setShowHint(false), 300);
  };

  const triggerConfetti = () => {
    // Simple confetti effect using CSS animations
    const confettiPieces = Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="fixed pointer-events-none"
        style={{
          left: `${Math.random() * 100}%`,
          top: "-10px",
          animation: `fall ${2 + Math.random()}s linear forwards`,
          zIndex: 1000,
        }}
      >
        {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "💕" : "✨"}
      </div>
    ));
  };

  const playSound = (type: string) => {
    console.log(`Playing ${type} sound`);
  };

  const { cols, total } = getGridSize();

  return (
    <div className="min-h-screen px-2 md:px-4 py-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-2">
          Find the Unique One
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Can you spot the cat with the rose? 🌹
        </p>
      </div>

      {/* Hint Button */}
      <div className="flex justify-center mb-4 md:mb-6">
        <Button
          onClick={handleHint}
          disabled={hintUsed}
          variant="outline"
          className="border-pink-300 text-pink-600 hover:bg-pink-50 text-sm md:text-base"
        >
          💡 Hint {hintUsed ? "(Used)" : ""}
        </Button>
      </div>

      {/* Grid of tiles - dense and responsive */}
      <div
        className="grid gap-1 md:gap-2 mb-8 max-w-full mx-auto"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {tiles.map((tile) => (
          <button
            key={tile.id}
            onClick={() => handleTileClick(tile.id)}
            className={`aspect-square rounded-sm md:rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 ${
              shakeId === tile.id ? "animate-shake" : ""
            } ${showHint && tile.isUnique ? "ring-4 ring-yellow-400" : ""}`}
          >
            <img
              src={tile.isUnique ? "/assets/image2.png" : "/assets/image1.png"}
              alt="Tile"
              className={`w-full h-full object-cover ${
                tile.isUnique ? "opacity-95 blur-[0.5px]" : ""
              }`}
            />
          </button>
        ))}
      </div>

      {/* Win state */}
      {won && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center max-w-md">
            <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">YRRR! 🎉</h3>
            <p className="text-gray-700 mb-6 text-sm md:text-base">You found the unique cat!</p>
            <Button
              onClick={onComplete}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base"
            >
              Next Challenge →
            </Button>
          </div>
        </div>
      )}

      {/* Wrong click feedback */}
      {shakeId !== null && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 text-2xl md:text-3xl font-bold text-pink-600 pointer-events-none animate-bounce">
          No lol 😅
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
