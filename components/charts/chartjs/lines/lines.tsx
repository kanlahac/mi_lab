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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartProps } from "../../chart.types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Lines({ rawData }: ChartProps) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' as const },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#f0f0f0' + '30' },
            },
            x: {
                grid: { color: '#f0f0f0' + '30' },  
            }
        }
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Line options={options} data={rawData} />
        </div>
    );
};
