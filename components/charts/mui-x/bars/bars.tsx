"use client";

import { BarChart } from "@mui/x-charts";
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";


export default function Bars({ rawData }: ChartProps) {
    
    const { data, activeSeries } = rawData;

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [layout, setLayout] = useState<"horizontal" | "vertical">("vertical");
    const [grid, setGrid] = useState<boolean>(true);
    const [customColors, setCustomColors] = useState<string[]>(generateColors(activeSeries.length));

    const handleChangeColors = () => {
        const newColors = generateColors(activeSeries.length);
        setCustomColors(newColors);
    }

    const swichLayoutButton = () => (
        <Button 
            variant="outlined"
            onClick={() => setLayout(prev => prev === "vertical" ? "horizontal" : "vertical")}
        >
            Switch to {layout === "vertical" ? "horizontal" : "vertical"}  
        </Button>
    );

    const showGridButton = () => (
        <Button 
            variant="outlined"
            onClick={() => setGrid(prev => !prev)}
        >
            Toggle Grid {grid ? "Off" : "On"}
        </Button>
    );

    const changeColorsButton = () => (
        <Button 
            variant="outlined"
            onClick={handleChangeColors}
        >
            Change Colors
        </Button>   
    );

    if (layout === "vertical") {
        return (
            <>
                <BarChart
                    grid={{ vertical: grid, horizontal: grid }}
                    colors={customColors}
                    dataset={data}
                    xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                    series={activeSeries.map((serieId: any) => ({
                        dataKey: serieId,
                        label: serieId,
                    }))}
                    height={500}
                    borderRadius={10}
                    margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    {swichLayoutButton()}
                    {showGridButton()}
                    {changeColorsButton()}
                </Box>
            </>
        );
    }
    else {
        return (
            <>
                <BarChart
                    grid={{ vertical: grid, horizontal: grid }}
                    colors={customColors}
                    dataset={data}
                    yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                    series={activeSeries.map((serieId: any) => ({
                        dataKey: serieId,
                        label: `Serie ${serieId}`,
                    }))}
                    height={500}
                    layout="horizontal"
                    borderRadius={10}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    {swichLayoutButton()}
                    {showGridButton()}
                    {changeColorsButton()}
                </Box>           
            </>
        );
    }
};
