import { useNavigate } from "react-router-dom";

export function PlayerCard({ player }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/players/${player.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {player.last_name}
      </h1>
      <h2 className="text-white font-bold uppercase rounded-lg">
        {player.first_name}
      </h2>
      <h2 className="text-white font-bold uppercase rounded-lg">
        {player.position}
      </h2>
      
    </div>
  );
}
