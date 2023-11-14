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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Grafica5() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "#6B0052",
        backgroundColor: "#6B0052",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        borderColor: "#C35293",
        backgroundColor: "#C35293",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="bg-white">
      <header className="bg-white shadow-xl rounded-md p-5 border-gray-400 mb-10">
        <div>
          <h1 className="text-2xl text-center justify-center font-bold">
            Grafica de lineas
          </h1>
          <Line options={options} data={data}></Line>
        </div>
      </header>
    </div>
  );
}
