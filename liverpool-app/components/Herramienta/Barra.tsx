"use client";

/* Para generar una gráfica de barra regular, 
se importan sus caracteristicas (puede que existan más) */
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
// También se importa el tipo de gráfica
import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

// Estos valores se declaran previamente para ser usados luego
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Barra() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "#E8C9DE",
        borderColor: "#E8C9DE",
        borderWidth: 1,
      },
    ],
  });

  const options = {};

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://192.168.68.109:8082/getpuesto");
        if (response.ok) {
          const result = await response.json();
          if (result && result.data) {
            setChartData({
              labels: result.data.map((item: any) => item.generacion),
              datasets: [
                {
                  label: "Generaciones",
                  data: result.data.map(
                    (item: any) => item.promedio_cambios_de_puesto
                  ),
                  backgroundColor: "#AF007E",
                  borderColor: "#AF007E",
                  borderWidth: 1,
                },
              ],
            });
          } else {
            throw new Error(
              "Los datos obtenidos no tienen la estructura esperada"
            );
          }
        } else {
          throw new Error("Error al obtener datos");
        }
      } catch (error) {
        console.error("Hubo un error al obtener datos:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <>
        <div className=" bg-white ">
          <header className=" bg-white border-gray-100 shadow-xl rounded-md p-5">
            <div>
              <h1 className="text-2xl text-center justify-center font-bold">
                Cambios de puesto por Generación
              </h1>
              <Bar data={chartData} options={options}></Bar>
            </div>
          </header>
        </div>
      </>
    </>
  );
}
