import Link from 'next/link'
import React from 'react'
import games from '@/data/Games.json'
import Image from 'next/image'
import Section from './Section'

const Games = () => {
  return (
    <div className="pt-12 p-4 h-svh">
      <h1 className="text-2xl font-bold">Список игр</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {games.map((game) => (
          <Link key={game.id} href={`/game/${game.id}`} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{game.title}</h2>
                <img src={`/data/games/${game.id}/cover.png`} alt={game.id}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const GamesSection = () => Section(<Games/>, 'games', 'Games')

export default GamesSection 