"use client";

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
import { ChartProps } from "../../chart.types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function Bars({ rawData }: ChartProps) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' as const },
            title: { display: true, text: 'Chart.js Bar Chart' },
        },
    };
    
    return (
        <div style={{ width: '100%', height: '400px' }}> 
            <Bar options={options} data={rawData} />
        </div>
    );
};
