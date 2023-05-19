import { useEffect, useState } from "react";
import { getAllPlayers } from "../api/players.api";
import { PlayerCard } from "./PlayerCard";

export function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {

    async function loadPlayers() {
      const res = await getAllPlayers();
      setPlayers(res.data);
    }
    loadPlayers();
    
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}
