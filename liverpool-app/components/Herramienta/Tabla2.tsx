"use client";
import React, { useEffect, useState } from "react";
import { Activos } from ".";

export default function Tabla2() {
  const [datos, setDatos] = useState<any[]>([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(
          "http://localhost:8082/getFirstFiveDocuments"
        );
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
          Un vistazo a tu predicción 
        </h1>
        <h1 className="pt-5 font-light text-gray-700 md:text-lg">
          Análiza cuanto de tu personal podria ser propenso a irse. 
        </h1>
      </div>
      <div className="pb-20 px-20 bg-white flex flex-row gap-4">
        <div className="basis-1/3 rounded-lg bg-pink-50 shadow-md">
          <Activos/>
        </div>
        <div className=" relative overflow-x-auto shadow-md sm:rounded-lg basis-2/3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-pink-900 uppercase bg-pink-100 dark:bg-pink-700 dark:text-gray-600">
              <tr>
              <th scope="col" className="px-6 py-3">
                  Estatus
                </th>
                <th scope="col" className="px-6 py-3">
                  Porcentaje
                </th>
                <th scope="col" className="px-6 py-3">
                  Tienda
                </th>
                <th scope="col" className="px-6 py-3">
                  Area
                </th>
                <th scope="col" className="px-6 py-3">
                  Generación
                </th>
                <th scope="col" className="px-6 py-3">
                  Género
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
                  <td className="px-6 py-4">{item.Estatus}</td>
                  <td className="px-6 py-4">{item.ubicacion}</td>
                  <td className="px-6 py-4">{item.tienda}</td>
                  <td className="px-6 py-4">{item.area}</td>
                  <td className="px-6 py-4">{item.generacion}</td>
                  <td className="px-6 py-4">{item.genero}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
