"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarraDoble() {
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
        const response = await fetch('http://127.0.0.1:8082/getdoblebarra'); // Llama al endpoint '/getdoblebarra'
        if (response.ok) {
          const result = await response.json();
          if (result && result.data) {
            setChartData({
              labels: result.data.map((item: any) => item.area),
              datasets: [
                {
                  label: "Masculino",
                  data: result.data.map((item:any)=> item.genero_distribution[1].count),
                  backgroundColor: "#A20068"
                },
                {
                  label: "Femenino",
                  data: result.data.map((item:any)=> item.genero_distribution[0].count),
                  backgroundColor: "#E8C9DE"
                },
              ],
            });
          } else {
            throw new Error('Los datos obtenidos no tienen la estructura esperada');
          }
        } else {
          throw new Error('Error al obtener datos');
        }
      } catch (error) {
        console.error('Hubo un error al obtener datos:', error);
      }
    }

    fetchData();
  }, []);

  const options = {
    plugins: {
      title: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <>
      <div className=" bg-white ">
        <header className="bg-white shadow-xl rounded-md p-5">
          <div>
            <h1 className="text-2xl text-center justify-center font-bold">
              Distribución de género por área
            </h1>
            {chartData && <Bar data={chartData} options={options} />}
          </div>
        </header>
      </div>
    </>
  );
}