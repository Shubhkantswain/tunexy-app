import { useNavigate } from '@remix-run/react';
import React from 'react';

const games = [
  {
    name: 'Fortnite',
    price: 'Free',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg',
  },
  {
    name: 'Rocket League®',
    price: 'Free',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Rocket_League_cover.jpg/220px-Rocket_League_cover.jpg',
  },
  {
    name: 'Splitgate 2',
    price: 'Free',
    img: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Splitgate_cover_art.jpg',
  },
  {
    name: 'Fall Guys',
    price: 'Free',
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Fall_Guys_cover.jpg',
  },
];

const GameList = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden p-4">
      {/* Fireflies */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="firefly" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm space-y-4 bg-black/30  rounded-xl p-6 border border-white/10">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-lg font-semibold">Most Popular Free-to-Play</h2>
          <span className="text-sm text-gray-400 hover:underline cursor-pointer">{'>'}</span>
        </div>

        {games.map((game, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => navigate("/games/memory")}
          >
            <img
              src={'https://img.freepik.com/fotos-premium/corazones-rojos-sobre-fondo-plastico-azul-dia-san-valentin_33827-36.jpg'}
              alt={game.name}
              className="w-12 h-16 rounded object-cover"
            />
            <div>
              <h3 className="text-base font-medium">{game.name}</h3>
              <p className="text-sm text-gray-400">{game.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default GameList;
