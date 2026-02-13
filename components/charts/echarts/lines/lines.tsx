"use client";

import ReactECharts from "echarts-for-react";
import { ChartProps } from "../../chart.types";


export default function Lines({ rawData }: ChartProps) {

    const option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: rawData.data.map((item: any) => item.name),
            bottom: 0
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: rawData.months
        },
        yAxis: {
            type: 'value'
        },
        series: rawData.data.map((item: any) => ({
            name: item.name,
            type: 'line',
            data: item.data,
            smooth: true,
            symbol: 'circle',
            symbolSize: 8
        }))
    };

    return (
        <ReactECharts 
            option={option} 
            style={{ height: '400px', width: '100%' }} 
        />
    );
};
