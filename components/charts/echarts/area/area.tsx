"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
    Filler,
    Legend
);

export default function Area({ rawData }: ChartProps) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' as const },
        },
        scales: {
            y: {
                stacked: true,
                beginAtZero: true,
            },
            x: {
                stacked: true,
            }
        }
    };
    
    return (
        <div style={{ width: '100%', height: '400px' }}> 
            <Line options={options} data={rawData} />
        </div>
    );
};
