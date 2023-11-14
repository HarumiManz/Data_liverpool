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
import { faker } from "@faker-js/faker";

// Estos valores se declaran previamente para ser usados luego
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Grafica1() {
  const labels = ["Sun", "Mon", "Tue"];
  /* Se declaran las constantes "data" y "options" 
  (options puede estar vació). En "data" se declaran los
  'labels' y 'data' en valores de tipo <list>. 
  'label' es un string, los colores pueden ser valores
  predeterminados o valores RGB. El borde son valores numéricos.*/
  const data = {
    labels,
    datasets: [
      {
        label: "398",
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        backgroundColor: "#C35293",
        borderColor: "pink",
        borderWidth: 1,
      },
    ],
  };
  //const data = await getAquisitionsByYear();

  const options = {};

  /* Los valores 'data' y 'options' que se encuentran
      dentro de las llaves son los que declaramos dentro
      de la función. Los que no, son las variables del
      objeto importado 'Bar' */
  return (
    <>
      <div className=" bg-white ">
        <header className=" bg-white border-gray-100 shadow-xl rounded-md p-5">
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
