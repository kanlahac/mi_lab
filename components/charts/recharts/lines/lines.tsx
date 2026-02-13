"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import { Button, Box } from '@mui/material';


export default function Lines({ rawData }: ChartProps) {

    const { data, activeSeries } = rawData;

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [customColors, setCustomColors] = useState<string[]>(generateColors(activeSeries.length));

    const handleChangeColors = () => {
        const newColors = generateColors(activeSeries.length);
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
            <ResponsiveContainer width="90%" style={{"padding": "20px"}} height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    {activeSeries.map((serie: any, index: any) => (
                        <Line 
                            key={serie} 
                            type="monotone" 
                            dataKey={serie} 
                            stroke={customColors[index]}
                        />
                    ))}

                </LineChart>
            </ResponsiveContainer>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {changeColorsButton()}
            </Box>
        </>
    );
};
