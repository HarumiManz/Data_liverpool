"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pay() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
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
  };

  return (
    <div className=" bg-white">
      <header className="bg-white shadow-xl rounded-md p-5 h-full">
        <div className="w-full h-full grid place-items-center">
          <h1 className="text-2xl text-center justify-center font-bold">
            Grafica de pastel
          </h1>
          <Pie data={data} />
        </div>
      </header>
    </div>
  );
}
