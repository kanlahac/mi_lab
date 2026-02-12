"use client";

import { RadarChart } from "@mui/x-charts";
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";


export default function Radar({ rawData }: ChartProps) {

    const { metrics, series, max } = rawData;

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [customColors, setCustomColors] = useState<string[]>(generateColors(series.length));
    const [hideMark, setHideMark] = useState<boolean>(false);
    const [fillArea, setFillArea] = useState<boolean>(true);
    const [shape, setShape] = useState<"circular" | "sharp">("sharp");

    const handleChangeColors = () => {
        const newColors = generateColors(series.length);
        setCustomColors(newColors);
    }

    const changeColorsButton = () => (
        <Button 
            variant="outlined"
            onClick={handleChangeColors}
        >
            Change Colors
        </Button>   
    );

    const changeFillAreaButton = () => (
        <Button 
            variant="outlined"
            onClick={() => setFillArea(!fillArea)}
        >
            Change Fill Area {fillArea ? "Off" : "On"}
        </Button>   
    );

    const changeHideMarkButton = () => (
        <Button 
            variant="outlined"
            onClick={() => setHideMark(!hideMark)}
        >
            Change Hide Mark {hideMark ? "Off" : "On"}
        </Button>   
    );

    const changeShapeButton = () => (
        <Button 
            variant="outlined"
            onClick={() => setShape(shape === "circular" ? "sharp" : "circular")}
        >
            Change Shape {shape === "circular" ? "To sharp" : "To Circular"}
        </Button>   
    );
    
    return (
        <>
            <RadarChart
                height={500}
                shape={shape}
                series={series.map((serie: any) => ({
                    data: serie.data,
                    label: serie.label,
                    fillArea: fillArea,           
                    hideMark: hideMark, 
                }))}
                radar={{
                    max: max,
                    metrics: metrics,
                }}
                colors={customColors}
                sx={{
                    '& .MuiRadarChart-area': {
                        fillOpacity: fillArea ? 0.3 : 0,
                    },
                }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {changeColorsButton()}
                {changeFillAreaButton()}
                {changeHideMarkButton()}
                {changeShapeButton()}
            </Box> 
        </>
    );
};
