'use client';

  import {
    Chart as ChartJS,
    PointElement,
    LinearScale,
    Tooltip,
    Legend
  } from 'chart.js';
  import { Scatter } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';

  ChartJS.register(
    PointElement,
    LinearScale,
    Tooltip,
    Legend
  )

  export default function Dispersion() {
    const data = {
      datasets: [
        {
            label: 'A dataset',
            data: Array.from({ length: 100 }, () => ({
              x: faker.number.int({ min: -100, max: 100 }),
              y: faker.number.int({ min: -100, max: 100 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
        }
      ]
    }
    const options = {}

    return (
        <header className="bg-white shadow">
            <div>
                <Scatter
                data = {data}
                options = {options}
                ></Scatter>
            </div>
        </header>
    );
  }