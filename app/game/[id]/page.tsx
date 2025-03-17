import UnityGamePlayer from '@/app/сomponents/UnityGamePlayer';
import games from '@/data/Games.json'
import { Game } from "@/interfaces/game";

async function getGame(id: string): Promise<Game | null> {
  return games.find((g) => g.id === id) || null;
}

export function generateStaticParams() {
  return games.map((game) => ({ id: game.id }));
}

export default async function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const game = await getGame(id);

  if (!game) {
    return <p>Игра не найдена</p>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">{game.title}</h1>
      <p className="mt-2">{game.description}</p>

      <h2 className="text-lg font-semibold mt-4">Технологии</h2>
      <ul className="list-disc pl-5">
        {game.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {/* <Test></Test> */}
        <UnityGamePlayer game={game}/>
    </div>
  );
}