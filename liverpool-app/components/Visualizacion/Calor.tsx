//Aunque marque error, sí corre
'use client';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  TreemapController, 
  TreemapElement,
  Title,
  Tooltip,
  Legend
);

function colorFromRaw(ctx: any) {
	if(ctx.type !== 'data') {
		return 'transparent';
	}
	const value = ctx.raw._data?.costo;
	let alpha = (0.01 + Math.log(value) / 5 );
	return `rgba(248, 22, 124, ${alpha})`;
}

export default function Calor() {
    const data = {
        datasets: [
          {
            label: 'My treemap dataset',
            data: [
                {valor: 1, costo: 6},
                {valor: 23, costo: 23},
                {valor: 14, costo: 4},
                {valor: 8, costo: 12},
            ],
            key: 'valor',
            borderColor: 'rgba(255, 26, 144, 1)',
            borderWidth: 1,
            spacing: 0,
            backgroundColor: (ctx:any) => colorFromRaw(ctx),
            labels: {
                align: 'left',
                display: true,
                formatter(ctx: any) {
                  if (ctx.type !== 'data') {
                    return;
                  }
                  return ['Value is ' + ctx.raw._data?.costo];
                },
                color: ['white', 'whiteSmoke'],
                font: [{size: 12}],
                position: 'top'
              }
          },
        ],
    }
      
    const options = {}

  return (
    <header className="bg-white shadow">
        <div>
            <Chart
            type = 'treemap'
            data = {data}
            options = {options}
            ></Chart>
        </div>
    </header>
  );
}