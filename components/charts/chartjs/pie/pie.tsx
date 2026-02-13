"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie as PieChartjs } from 'react-chartjs-2';
import { ChartProps } from "../../chart.types";

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend
);


export default function Pie({ rawData }: ChartProps) {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
            },
        },
    };
    
    return (
        <div style={{ width: '100%', height: '400px' }}> 
            <PieChartjs data={rawData} options={options} />
        </div>
    );
};
