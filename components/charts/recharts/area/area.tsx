"use client";

import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, CartesianGrid, Area as RechartsArea } from 'recharts';
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import { Button, Box } from '@mui/material';


export default function Area({ rawData }: ChartProps) {

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
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    
                    <XAxis 
                        dataKey="label" 
                        tick={{ fill: '#666' }} 
                        axisLine={{ stroke: '#eee' }}
                    />
                    
                    <YAxis 
                        tick={{ fill: '#666' }} 
                        axisLine={{ stroke: '#eee' }}
                    />
                    
                    <Tooltip 
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                    />
                    
                    <Legend iconType="circle" />

                    {series.map((serie:any, index:any) => (
                        <RechartsArea
                            key={serie}
                            type="monotone"
                            dataKey={serie}
                            stackId="1"
                            stroke={customColors[index]}
                            fill={customColors[index]}
                            fillOpacity={0.6}
                        />
                    ))}
                </AreaChart>
            </ResponsiveContainer>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {changeColorsButton()}
            </Box>
        </>
    );
};
