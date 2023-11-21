"use client";

import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

ChartJS.register(PointElement, LinearScale, Tooltip, Legend);

export default function Dispersion() {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Antigüedad (x), Edad (y)",
        data: [],
        backgroundColor: "#8F006A",
      },
    ],
  });
  const options = {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.106:8082/getdispantiedad"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json();
        setChartData({
          datasets: [
            {
              ...chartData.datasets[0],
              data: data.data.map((item: any) => item),
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("2")
  console.log(chartData)

  return (
    <div className="">
      <header className="bg-white shadow-xl rounded-md p-5">
        <div>
          <h1 className="text-2xl text-center justify-center font-bold">
            Antiguedad y Edad
          </h1>
          <Scatter data={chartData} options={options}></Scatter>
        </div>
      </header>
    </div>
  );
}
