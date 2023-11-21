"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Lineal() {
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://192.168.68.106:8082/getlinea");
        if (response.ok) {
          const result = await response.json();
          if (result && result.data) {
            setChartData({
              labels: result.data.map((item: any) => item.tienda),
              datasets: [
                {
                  label: "Antiguedad",
                  data: result.data.map((item: any) => item.antiguedadPromedio),
                  backgroundColor: "#6B0052",
                  borderColor: "#6B0052",
                  borderWidth: 3,
                },
                {
                  label: "Cambios de puesto",
                  data: result.data.map(
                    (item: any) => item.cambiosPuestoPromedio),
                  backgroundColor: "#C35293",
                  borderColor: "#C35293",
                  borderWidth: 3,
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-white">
      <header className="bg-white shadow-xl rounded-md p-5 border-gray-400 mb-10">
        <div>
          <h1 className="text-2xl text-center justify-center font-bold">
            Cambios de puesto, antiguedad por Tienda
          </h1>
          <Line options={options} data={chartData}></Line>
        </div>
      </header>
    </div>
  );
}
