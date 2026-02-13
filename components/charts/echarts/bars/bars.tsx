"use client";

import ReactECharts from 'echarts-for-react';
import { ChartProps } from "../../chart.types";

export default function Bars({ rawData }: ChartProps) {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            bottom: 0
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: rawData.months,
            axisTick: { alignWithLabel: true }
        },
        yAxis: {
            type: 'value'
        },
        series: rawData.data.map((s: any) => ({
            name: s.name,
            type: 'bar',
            data: s.data,
            emphasis: {
                focus: 'series'
            },
            itemStyle: {
                borderRadius: [4, 4, 0, 0] 
            }
        }))
    };

    return (
        <ReactECharts 
            option={option} 
            style={{ height: '400px', width: '100%' }}
            notMerge={true} 
            lazyUpdate={true}
        />
    );
};
