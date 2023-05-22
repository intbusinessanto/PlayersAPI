import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerForm from './PlayerForm';


const PlayerList = () => {
    const [players, setPlayers] = useState([]);
  
    // Obtener la lista de jugadores al cargar el componente
    
    useEffect(() => {
      fetchPlayers();
    }, []);
  
    // Función para obtener la lista de jugadores
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('/nbaplayers/players/');
        setPlayers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    // Función para eliminar un jugador
    const handleDelete = async (id) => {
      try {
        await axios.delete(`/nbaplayers/players/${id}`);
        // Realiza alguna acción después de la eliminación exitosa
        fetchPlayers(); // Vuelve a obtener la lista de jugadores actualizada
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <PlayerForm fetchPlayers={fetchPlayers} />
        {players.map((player) => (
          <div key={player.id}>
            <p>{player.first_name} {player.last_name}</p>
            {/* Mostrar otros detalles del jugador */}
            <button onClick={() => handleDelete(player.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default PlayerList;
  