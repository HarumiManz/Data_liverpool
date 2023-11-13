'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarraDoble() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; 
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(75, 192, 192)',
          },
          {
            label: 'Dataset 3',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            backgroundColor: 'rgb(53, 162, 235)',
          },
        ],
      };
      const options = {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
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
    <header className="bg-white shadow">
        <div>
            <Bar
            data = {data}
            options = {options}
            ></Bar>
        </div>
    </header>
  );
}