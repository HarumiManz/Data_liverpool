"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pay() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "total",
        data: [],
        backgroundColor: [
          "#7C005C",
          "#901238",
          "#AF007E",
          "#C04E91",
          "#D997C2",
          "#E8C9DE",
        ],
        borderColor: [
          "#7C005C",
          "#901238",
          "#AF007E",
          "#C04E91",
          "#D997C2",
          "#E8C9DE",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.109:8082/get5positions"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Actualizar el estado del gráfico con los datos obtenidos
        setChartData({
          labels: data.data.map((item: any) => item._id),
          datasets: [
            {
              ...chartData.datasets[0],
              data: data.data.map((item: any) => item.total_resignations),
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-white">
      <header className="bg-white shadow-xl rounded-md p-5 h-full">
        <div className="w-full h-full grid place-items-center">
          <h1 className="text-2xl text-center justify-center font-bold">
            Top 5 áreas con más renuncias
          </h1>
          <Pie data={chartData} />
        </div>
      </header>
    </div>
  );
}
