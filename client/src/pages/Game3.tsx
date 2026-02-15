import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface Heart {
  id: number;
  x: number;
  y: number;
}

interface Game3Props {
  onComplete: () => void;
}

export default function Game3({ onComplete }: Game3Props) {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [caught, setCaught] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [won, setWon] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heartIdRef = useRef(0);

  const TARGET = 20;
  const GAME_DURATION = 15;

  useEffect(() => {
    if (caught >= TARGET) {
      setWon(true);
      return;
    }

    if (timeLeft <= 0) {
      setWon(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, caught]);

  useEffect(() => {
    if (won || timeLeft <= 0) return;

    // Spawn hearts randomly
    const spawnInterval = setInterval(() => {
      const newHeart: Heart = {
        id: heartIdRef.current++,
        x: Math.random() * (containerRef.current?.clientWidth || 300 - 40),
        y: -40,
      };
      setHearts((prev) => [...prev, newHeart]);
    }, 300);

    return () => clearInterval(spawnInterval);
  }, [won, timeLeft]);

  useEffect(() => {
    if (won || timeLeft <= 0) return;

    // Animate hearts falling
    const animationInterval = setInterval(() => {
      setHearts((prev) => {
        const updated = prev
          .map((heart) => ({
            ...heart,
            y: heart.y + 3,
          }))
          .filter((heart) => heart.y < (containerRef.current?.clientHeight || 600));
        return updated;
      });
    }, 30);

    return () => clearInterval(animationInterval);
  }, [won, timeLeft]);

  const handleHeartClick = (id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
    setCaught((c) => c + 1);
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
      {/* Title and Stats */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Catch the Hearts
        </h2>
        <div className="flex justify-center gap-8 text-lg">
          <div className="text-gray-700">
            Caught: <span className="font-bold text-pink-600">{caught}</span> / {TARGET}
          </div>
          <div className="text-gray-700">
            Time: <span className="font-bold text-pink-600">{timeLeft}s</span>
          </div>
        </div>
      </div>

      {/* Game Container */}
      <div
        ref={containerRef}
        className="relative w-full h-96 md:h-[600px] bg-gradient-to-b from-pink-50 to-purple-50 rounded-2xl overflow-hidden border-2 border-pink-300 shadow-lg"
      >
        {/* Falling hearts */}
        {hearts.map((heart) => (
          <button
            key={heart.id}
            onClick={() => handleHeartClick(heart.id)}
            className="absolute w-10 h-10 text-4xl cursor-pointer hover:scale-125 transition-transform"
            style={{
              left: `${heart.x}px`,
              top: `${heart.y}px`,
            }}
          >
            ❤️
          </button>
        ))}

        {/* Game Over / Win overlay */}
        {(won || timeLeft <= 0) && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-md">
              {caught >= TARGET ? (
                <>
                  <h3 className="text-4xl font-bold text-pink-600 mb-2">
                    You Did It! 🎉
                  </h3>
                  <p className="text-gray-700 mb-6">
                    You caught {caught} hearts in time!
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-3xl font-bold text-gray-700 mb-2">
                    Time's Up! ⏰
                  </h3>
                  <p className="text-gray-700 mb-6">
                    You caught {caught} out of {TARGET} hearts.
                  </p>
                </>
              )}
              <Button
                onClick={onComplete}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full"
              >
                {caught >= TARGET ? "Final Surprise →" : "Try Again"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
