import Link from 'next/link'
import React from 'react'
import games from '@/data/Games.json'

const Games = () => {
  return (
    <div id="games" className="pt-12 p-4 h-svh">
      <h1 className="text-2xl font-bold">Список игр</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {games.map((game) => (
          <Link key={game.id} href={`/game/${game.id}`} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{game.title}</h2>
              <img src={game.screenshots[0]} alt={game.title} className="w-full h-40 object-cover mt-2 rounded" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Games