"use client";

import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import { Button, Box } from '@mui/material';


export default function Bars({ rawData }: ChartProps) {

    const { data, series } = rawData;

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [customColors, setCustomColors] = useState<string[]>(generateColors(series.length));

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
    
    return (
        <>
            <ResponsiveContainer width="90%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Legend />
                    {series.map((serie: any, index: any) => (
                        <Bar 
                            key={serie} 
                            dataKey={serie} 
                            fill={customColors[index]} 
                            radius={[4, 4, 0, 0]}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {changeColorsButton()}
            </Box>
        </>
    );
};
