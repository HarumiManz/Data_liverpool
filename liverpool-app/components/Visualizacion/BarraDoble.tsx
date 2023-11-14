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
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarraDoble() {
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
        backgroundColor: "#A20068",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        backgroundColor: "#E8C9DE",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
        backgroundColor: "#99007E",
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
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
              Grafica de barras
            </h1>
            <Bar data={data} options={options}></Bar>
          </div>
        </header>
      </div>
    </>
  );
}
