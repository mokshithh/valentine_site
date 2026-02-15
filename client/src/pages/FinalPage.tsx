import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function FinalPage() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  // Floating hearts animation
  const FloatingHearts = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
            }}
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-300 fill-pink-300" />
          </div>
        ))}
      </div>
    );
  };

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAnswer("yes");
  };

  const handleNo = () => {
    // No button runs away
    handleNoHover();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <FloatingHearts />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        {answer === null && (
          <>
            <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-8">
              Will you be my Valentine?
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={handleYes}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                YES ❤️
              </Button>

              <div className="relative">
                <Button
                  onClick={handleNo}
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8 py-6 rounded-full transition-all"
                  style={{
                    transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  No 💔
                </Button>
              </div>
            </div>
          </>
        )}

        {answer === "yes" && (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="mb-8">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className="inline-block animate-bounce"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    fontSize: "2rem",
                  }}
                >
                  {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "💕" : "✨"}
                </span>
              ))}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
              yh thashwat i thought
            </h2>
          </div>
        )}

        {answer === "no" && (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              igh bruh 😅
            </h2>
            <p className="text-xl text-gray-600">
              The button will keep running away... 👀
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
