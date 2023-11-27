"use client";
import React, { useEffect, useState } from "react";

export default function Activos() {
  const [datos, setDatos] = useState({ activos: 0, renunciados: 0 });

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("http://localhost:8082/activos");
        if (response.ok) {
          const data = await response.json();
          setDatos(data.data);
        } else {
          throw new Error("Respuesta no exitosa");
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <>
      <h1 className="my-3 text-center text-xl font-bold text-pink-900">
        Conteo de Estatus
      </h1>
      <div className="my-5 text-center rounded-lg bg-white p-5 m-5">
        <h1 className="text-2xl">Activos:</h1>
        <p className=" font-bold text-xl">{datos.activos}</p>
      </div>
      <div className="my-5 text-center rounded-lg bg-white p-5 m-5">
        <h1 className="text-2xl">Renuncias:</h1>
        <p className="font-bold text-xl">{datos.renunciados}</p>
      </div>
    </>
  );
}
