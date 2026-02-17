"use client";

import ReactECharts from "echarts-for-react";
import { generateOptions, loadingOptions } from "./utils/options";
import { useEffect, useRef, useState } from "react";
import { PieChartProps } from "./types";
import { remapData } from "./utils/remap";
import CustomLegend from "./layouts/customLegend";
import { Box } from "@mui/material";
import { EChartsType } from "echarts";

export default function PieChart({ values }: PieChartProps) {
    const data = remapData(values);
    const options = generateOptions(data);

    const chartRef = useRef<ReactECharts>(null);
    const [loading, setLoading] = useState(true);

    const echartInstance: EChartsType | undefined = chartRef.current?.getEchartsInstance();

    useEffect(() => {
        if (!chartRef.current) return;

        echartInstance?.resize();
    }, []);

    useEffect(() => {

        if (loading) {
            echartInstance?.showLoading(loadingOptions);
        } else {
            echartInstance?.hideLoading();
        }
    }, [loading]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleLegendClick = (name: string) => {
        echartInstance?.dispatchAction({ 
            type: 'legendToggleSelect', 
            name: name
        });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'vertical', alignItems: 'center' }}>

            <ReactECharts  
                ref={chartRef}
                option={options} 
                style={{ minHeight: '400px', width: '100%' }}
                notMerge={true}
                lazyUpdate={true}
            />

            <CustomLegend 
                data={values} 
                onLegendClick={handleLegendClick} 
            />

        </Box>
    );
}