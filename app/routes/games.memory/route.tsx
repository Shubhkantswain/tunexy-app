import React, { useEffect, useState } from 'react';
import { Lock, ArrowLeft, RotateCcw, Trophy } from 'lucide-react';

const emojis = ['🐶', '🍕', '🌟', '🚀', '🎵', '🍎', '🎲', '⚽', '🎮', '📚', '🌈', '🦄', '🐼', '🔥', '💎', '🧠'];

interface CardType {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const TOTAL_LEVELS = 21;
const UNLOCKED_LEVELS = 17;

const shuffleArray = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const generateCards = (level: number): CardType[] => {
  const totalCards = 2 * level + 2;
  const totalPairs = totalCards / 2;
  const selectedEmojis = shuffleArray(emojis).slice(0, totalPairs);
  const cards = shuffleArray([...selectedEmojis, ...selectedEmojis]);

  return cards.map((emoji, idx) => ({
    id: idx,
    emoji,
    flipped: false,
    matched: false,
  }));
};

const ModernMemoryGame: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (selectedLevel !== null) {
      setCards(generateCards(selectedLevel));
      setMoves(0);
      setIsCompleted(false);
    }
  }, [selectedLevel]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setIsCompleted(true);
    }
  }, [cards]);

  const handleLevelClick = (level: number) => {
    setSelectedLevel(level);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].flipped || cards[id].matched) return;

    const newCards = [...cards];
    newCards[id].flipped = true;
    const newFlipped = [...flippedCards, id];

    setCards(newCards);
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const [firstId, secondId] = newFlipped;
      const first = newCards[firstId];
      const second = newCards[secondId];

      setTimeout(() => {
        if (first.emoji === second.emoji) {
          first.matched = true;
          second.matched = true;
        } else {
          first.flipped = false;
          second.flipped = false;
        }
        setCards([...newCards]);
        setFlippedCards([]);
      }, 800);
    }
  };

  const resetGame = () => {
    if (selectedLevel !== null) {
      setCards(generateCards(selectedLevel));
      setMoves(0);
      setIsCompleted(false);
      setFlippedCards([]);
    }
  };

  const getGridColumns = (cardCount: number) => {
    if (cardCount <= 4) return 2;
    if (cardCount <= 9) return 3;
    if (cardCount <= 16) return 4;
    if (cardCount <= 25) return 5;
    return 6;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {selectedLevel === null ? (
          // Level Selection Screen
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Memory Quest
              </h1>
              <p className="text-white/70 text-lg">Choose your challenge level</p>
            </div>

            <div className="grid grid-cols-7 gap-4 max-w-2xl mx-auto mb-8">
              {[...Array(TOTAL_LEVELS)].map((_, index) => {
                const level = index + 1;
                const isLocked = level > UNLOCKED_LEVELS;

                return (
                  <div key={level} className="relative group">
                    {isLocked ? (
                      <div className="w-14 h-14 bg-gray-600/30 backdrop-blur-sm border border-gray-500/30 text-white/40 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300">
                        <Lock className="h-5 w-5" />
                      </div>
                    ) : (
                      <button
                        onClick={() => handleLevelClick(level)}
                        className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20"
                      >
                        {level}
                      </button>
                    )}
                    {!isLocked && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-emerald-400 rounded-full shadow-lg" />
                <span className="text-white/70 text-sm">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-500 rounded-full shadow-lg" />
                <span className="text-white/70 text-sm">Locked</span>
              </div>
            </div>
          </div>
        ) : (
          // Game Screen
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            {/* Game Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setSelectedLevel(null)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-white transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-1">Level {selectedLevel}</h2>
                <div className="flex items-center space-x-4 text-white/70">
                  <span>Moves: {moves}</span>
                  <span>•</span>
                  <span>Cards: {cards.length}</span>
                </div>
              </div>

              <button
                onClick={resetGame}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-white transition-all duration-300"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Reset</span>
              </button>
            </div>

            {/* Game Completion Banner */}
            {isCompleted && (
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-4 mb-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                  <span className="text-xl font-bold text-white">Congratulations!</span>
                </div>
                <p className="text-white/80">Level completed in {moves} moves!</p>
              </div>
            )}

            {/* Game Grid */}
            <div 
              className="grid gap-3 justify-center mb-6"
              style={{
                gridTemplateColumns: `repeat(${getGridColumns(cards.length)}, minmax(0, 1fr))`,
                maxWidth: '500px',
                margin: '0 auto'
              }}
            >
              {cards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  disabled={isCompleted}
                  className={`
                    aspect-square text-3xl font-bold rounded-2xl flex items-center justify-center 
                    transition-all duration-500 transform hover:scale-105 shadow-lg
                    ${card.flipped || card.matched 
                      ? 'bg-white text-gray-800 shadow-xl rotate-0' 
                      : 'bg-gradient-to-br from-indigo-500/30 to-purple-600/30 backdrop-blur-sm border border-white/20 text-transparent hover:from-indigo-400/40 hover:to-purple-500/40 rotateY-180'
                    }
                    ${card.matched ? 'ring-2 ring-green-400/50' : ''}
                    ${isCompleted ? 'cursor-default' : 'cursor-pointer'}
                  `}
                  style={{
                    minWidth: '60px',
                    minHeight: '60px'
                  }}
                >
                  <span className={`transition-all duration-300 ${card.flipped || card.matched ? 'scale-100' : 'scale-0'}`}>
                    {card.emoji}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000 ease-out"
                style={{
                  width: `${cards.length > 0 ? (cards.filter(card => card.matched).length / cards.length) * 100 : 0}%`
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernMemoryGame;