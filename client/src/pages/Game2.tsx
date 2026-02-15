import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Card {
  id: number;
  imageId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface Game2Props {
  onComplete: () => void;
}

export default function Game2({ onComplete }: Game2Props) {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [timer, setTimer] = useState(0);

  // Image pairs: 3, 4, 5, 6, 7, 8 (6 pairs for hard mode)
  const imagePairs = [3, 4, 5, 6, 7, 8];

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (!won) {
      const interval = setInterval(() => setTimer((t) => t + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [won]);

  const initializeGame = () => {
    const shuffledCards = imagePairs
      .flatMap((imageId) => [imageId, imageId])
      .sort(() => Math.random() - 0.5)
      .map((imageId, index) => ({
        id: index,
        imageId,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setSelectedCards([]);
    setMoves(0);
    setTimer(0);
    setWon(false);
  };

  const handleCardClick = (id: number) => {
    if (selectedCards.includes(id) || cards[id].isMatched || won) return;

    const newSelectedCards = [...selectedCards, id];
    setSelectedCards(newSelectedCards);

    if (newSelectedCards.length === 2) {
      const [first, second] = newSelectedCards;
      setMoves((m) => m + 1);

      if (cards[first].imageId === cards[second].imageId) {
        // Match found
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first || card.id === second
              ? { ...card, isMatched: true }
              : card
          )
        );
        setSelectedCards([]);

        // Check if all matched
        const allMatched = cards.every(
          (card) =>
            card.isMatched ||
            card.id === first ||
            card.id === second
        );
        if (allMatched) {
          setWon(true);
        }
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setSelectedCards([]);
        }, 800);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
      {/* Title and Stats */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Memory Match
        </h2>
        <div className="flex justify-center gap-8 text-lg">
          <div className="text-gray-700">
            <span className="font-bold text-pink-600">{moves}</span> Moves
          </div>
          <div className="text-gray-700">
            <span className="font-bold text-pink-600">{formatTime(timer)}</span> Time
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 mb-8 max-w-3xl mx-auto">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-lg overflow-hidden cursor-pointer transform transition-all ${
              selectedCards.includes(card.id) || card.isMatched
                ? "scale-100"
                : "hover:scale-105"
            } ${card.isMatched ? "opacity-75" : ""}`}
            disabled={card.isMatched}
          >
            {selectedCards.includes(card.id) || card.isMatched ? (
              <img
                src={`/assets/image${card.imageId}.png`}
                alt="Card"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <div className="text-3xl">❤️</div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Win state */}
      {won && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-8 text-center max-w-md">
            <h3 className="text-4xl font-bold text-pink-600 mb-2">YRRRRR! 🎉</h3>
            <p className="text-gray-700 mb-2">You matched all the pairs!</p>
            <p className="text-sm text-gray-600 mb-6">
              Completed in {moves} moves and {formatTime(timer)}
            </p>
            <Button
              onClick={onComplete}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            >
              Final Game →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
