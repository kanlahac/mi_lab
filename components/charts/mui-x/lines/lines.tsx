"use client";

import { LineChart } from "@mui/x-charts";
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";


export default function Lines({ rawData }: ChartProps) {

    const { data, activeSeries } = rawData;

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [grid, setGrid] = useState<boolean>(true);
    const [area, setArea] = useState<boolean>(false);
    const [customColors, setCustomColors] = useState<string[]>(generateColors(activeSeries.length));

    const handleChangeColors = () => {
        const newColors = generateColors(activeSeries.length);
        setCustomColors(newColors);
    }

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

    const changeAreaButton = () => (
        <Button 
            variant="outlined"
            onClick={() => setArea(prev => !prev)}
        >
            Toggle Area {area ? "Off" : "On"}
        </Button>   
    );
    
    return (
        <>
            <LineChart
                grid={{ vertical: grid, horizontal: grid }}
                colors={customColors}
                dataset={data}
                xAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                series={activeSeries.map((serie: any) => ({
                    dataKey: serie,
                    label: serie,
                    curve: "linear",
                    area: area,
                    showMark: true, 
                }))}
                height={500}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {showGridButton()}
                {changeColorsButton()}
                {changeAreaButton()}
            </Box>
        </>
    );
};
