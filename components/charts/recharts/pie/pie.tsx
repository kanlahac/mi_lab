"use client";

import { Pie as PieRechart, PieChart, Sector } from 'recharts';
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import { Button, Box } from '@mui/material';


export default function Pie({ rawData }: ChartProps) {

    const { data } = rawData;

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [customColors, setCustomColors] = useState<string[]>(generateColors(data.length));

    const handleChangeColors = () => {
        const newColors = generateColors(data.length);
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
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                <PieChart style={{ width: '100%', maxWidth: '450px', maxHeight: '70vh', aspectRatio: 1 }} responsive>
                    <PieRechart
                        data={data}
                        labelLine={false}
                        label={(entry) => entry.name}
                        innerRadius="80%"
                        outerRadius="100%"
                        cornerRadius="50%"
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                        shape={(props) => <Sector {...props} fill={customColors[props.index % customColors.length]} />}
                    />
                </PieChart>
            </Box>
            

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {changeColorsButton()}
            </Box>
        </>
    );
};
