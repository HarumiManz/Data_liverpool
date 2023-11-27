"use client";
import React, { useEffect, useState } from "react";

export default function Tabla() {
  const [datos, setDatos] = useState<any[]>([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch("http://localhost:8082/getFirstFiveDocuments");
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
      <div className="pb-10 px-20 bg-white">
      <h1 className="text-3xl font-bold tracking-tight text-pink-800">
          ¡Un vistazo al futuro de tu equipo!
        </h1>
        <h1 className="pt-5 font-light text-gray-700 md:text-lg">
          Visualiza una muestra de tu nuevo archivo con los resultados de la predicción. 
        </h1>
      </div>
      <div className="pb-20 px-20 bg-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-pink-900 uppercase bg-pink-100 dark:bg-pink-700 dark:text-gray-600">
              <tr>
                {/* Encabezados de la tabla */}
                
                <th scope="col" className="px-6 py-3">
                  Género
                </th>
                <th scope="col" className="px-6 py-3">
                  Edad
                </th>
                <th scope="col" className="px-6 py-3">
                  Antiguedad
                </th>
                <th scope="col" className="px-6 py-3">
                  Area
                </th>
                <th scope="col" className="px-6 py-3">
                  Tienda
                </th>
                <th scope="col" className="px-6 py-3">
                  Ubicación  
                </th>
                <th scope="col" className="px-6 py-3">
                  Generación
                </th>
              </tr>
            </thead>
            <tbody>
              {datos.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      : "border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                  }
                >
                  <td className="px-6 py-4">{item.genero}</td>
                  <td className="px-6 py-4">{item.edad}</td>
                  <td className="px-6 py-4">{item.antiguedad}</td>
                  <td className="px-6 py-4">{item.area}</td>
                  <td className="px-6 py-4">{item.tienda}</td>
                  <td className="px-6 py-4">{item.ubicacion}</td>
                  <td className="px-6 py-4">{item.generacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
