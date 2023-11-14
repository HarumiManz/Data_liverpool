"use client";

import {
  Chart as ChartJS,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(PointElement, LinearScale, Tooltip, Legend);

export default function Grafica3() {
  const data = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: faker.number.int({ min: -100, max: 100 }),
          y: faker.number.int({ min: -100, max: 100 }),
        })),
        backgroundColor: "#8F006A",
      },
    ],
  };
  const options = {};

  return (
    <div className="">
      <header className="bg-white shadow-xl rounded-md p-5">
        <div>
          <h1 className="text-2xl text-center justify-center font-bold">
            Grafica de dispersión 
          </h1>
          <Scatter data={data} options={options}></Scatter>
        </div>
      </header>
    </div>
  );
}
