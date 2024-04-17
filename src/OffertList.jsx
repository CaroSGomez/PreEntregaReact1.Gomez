import React from "react";
import { useState, useEffect } from "react";

function OffertList() {
  const offerts = ["Neuquen", "Cordoba", "Salta"];

  return (
    <section className="p-4 border-solid border-2 shadow-md rounded-md bg-green-200 ">
      <h2 className="text-xl font-bold text-center">Los Destinos Más Buscados: </h2>
      {offerts.map((offert,i) => {
        return <p className="text-center p-2" key={i}> - {offert} </p>;
      })}
    </section>
  );
}

export default OffertList;
