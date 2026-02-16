"use client";

import ReactECharts from 'echarts-for-react';
import { ChartProps } from "../../chart.types";

export default function Pie({ rawData }: ChartProps) {

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const option = {
        color: generateColors(rawData.length),
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            bottom: 'center', 
            right: '25%',
            data: rawData.map((d: any) => d.name),
            itemGap: 20,
            icon: 'circle',
            itemWidth: 22,
            itemHeight: 22,
            textStyle: {
                color: '#d1d1d1',
                fontSize: 14,
                fontWeight: 'ultrabold',
            },
        },
        series: [
            {
                name: 'Data',
                type: 'pie',
                radius: '80%',
                data: rawData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    color: '#fff',
                    fontSize: 18,
                },
            }
        ]
    };


    return (
        <ReactECharts 
            option={option} 
            style={{ height: '400px', width: '100%' }}
        />
    );
};
