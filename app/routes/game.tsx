import React from "react";

const games = [
  { title: "Fortnite", img: "/games/fortnite.jpg", price: "Free" },
  { title: "Rocket League", img: "/games/rocketleague.jpg", price: "Free" },
  { title: "Genshin Impact", img: "/games/genshin.jpg", price: "Free" },
  { title: "Zenless Zone Zero", img: "/games/zenless.jpg", price: "Free" },
  { title: "Wuthering Waves", img: "/games/wuthering.jpg", price: "Free" },
  { title: "Honkai: Star Rail", img: "/games/honkai.jpg", price: "Free" },
  { title: "VALORANT", img: "/games/valorant.jpg", price: "Free" },
  { title: "Fall Guys", img: "/games/fallguys.jpg", price: "Free" },
  { title: "Marvel Rivals", img: "/games/marvel.jpg", price: "Free" },
  { title: "The Sims™ 4", img: "/games/sims4.jpg", price: "Free" },
];

const GameGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Free to Play</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-md overflow-hidden w-full max-w-[200px] hover:scale-105 transition-transform"
            >
              <img
                src={game.img}
                alt={game.title}
                className="w-full h-[260px] object-cover"
              />
              <div className="p-3">
                <p className="text-sm text-gray-300">Base Game</p>
                <h3 className="text-md font-semibold">{game.title}</h3>
                <p className="text-sm text-gray-400">{game.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameGrid;
