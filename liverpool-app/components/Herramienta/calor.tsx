//Aunque marque error, sí corre
"use client";
//npm install chartjs-chart-treemap

import { Chart as ChartJS, Title, Tooltip, Legend } from "chart.js";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { Chart } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(TreemapController, TreemapElement, Title, Tooltip, Legend);

function colorFromRaw(ctx: any) {
  if (ctx.type !== "data") {
    return "transparent";
  }
  const value = ctx.raw._data?.media_antiguedad;
  let alpha = Math.log(value) / 3;
  return `rgba(195, 82, 147, ${alpha})`;
}

export default function Calor() {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Mapa de calor",
        tree: [],
        key: "",
        borderColor: "rgba(255, 26, 144, 1)",
        borderWidth: 1,
        spacing: 0,
        backgroundColor: (ctx: any) => colorFromRaw(ctx),
        labels: {},
      },
    ],
  });

  const options = {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8082/getcalorarea"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json();
        setChartData({
          datasets: [
            {
              ...chartData.datasets[0],
              tree: data.data.map((item: any) => item),
              key: "cantidad_area",
              backgroundColor: (ctx: any) => colorFromRaw(ctx),
              labels: {
                align: "left",
                display: true,
                formatter(ctx: any) {
                  if (ctx.type !== "data") {
                    return;
                  }
                  return [ctx.raw._data?.media_antiguedad, ctx.raw._data?.area];
                },
                color: ["black", "grey"],
                font: [{ size: 14, weight: "bold"}, { size: 10 }],
                position: "top",
              },
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
    <div>
      <header className="bg-white border-gray-100 shadow-xl rounded-md p-5">
        <div>
          <h1 className="text-2xl text-center justify-center font-bold">
            Gráfica de Calor
          </h1>
          <Chart type="treemap" data={chartData} options={options}></Chart>
        </div>
      </header>
    </div>
  );
}
