import React from "react";
import { useState } from "react";

function UserCard(props) {
  

  const [cupos, setCupos] = useState();

  const handleClick = () => {
    setCupos(30);
    
  };

  return (
    <div className="user-card p-4 rounded-md shadow-md hover:scale-105 transition">
      <img
        src="https://picsum.photos/400"
        alt=""
        className="w-full rounded-md"
      />
      <p className="my-2">
        Paquete completo
        <br />
        Destino: {props.destination} <br />
        Duracion: {props.duration} <br />
        Cupos disponibles: {cupos}
      </p>
      <button
        className="border border-black rounded-md px-4 py-2"
        onClick={handleClick}
      >
        Ver cuantos cupos hay disponibles
      </button>
    </div>
  );
}

export default UserCard;
