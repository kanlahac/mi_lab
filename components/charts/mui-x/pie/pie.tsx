"use client";

import { PieChart } from "@mui/x-charts";
import { ChartProps } from "../../chart.types";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";


export default function Pie({ rawData }: ChartProps) {

    const generateColors = (count: number): string[] => {
        return Array.from({ length: count }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
        );
    };

    const [customColors, setCustomColors] = useState<string[]>(generateColors(rawData.length));
    const [paddingAngle, setPaddingAngle] = useState<0 | 5 >(5);
    const [donnut, setDonnut] = useState<0 | 100 >(100);

    const handleChangeColors = () => {
        const newColors = generateColors(rawData.length);
        setCustomColors(newColors);
    }

    const handleChangePadding = () => {
        setPaddingAngle(prev => prev === 0 ? 5 : 0);
    }

    const handleChangeDonnut = () => {
        setDonnut(prev => prev === 0 ? 100 : 0);
    }

    const changeColorsButton = () => (
        <Button 
            variant="outlined"
            onClick={handleChangeColors}
        >
            Change Colors
        </Button>   
    );

    const changeDonnutButton = () => (
        <Button 
            variant="outlined"
            onClick={handleChangeDonnut}
        >
            Change Donnut {donnut === 0 ? "On" : "Off"}
        </Button>   
    );

    const changePddingButton = () => (
        <Button 
            variant="outlined"
            onClick={handleChangePadding}
        >
            Change Padding {paddingAngle === 0 ? "On" : "Off"}
        </Button>   
    );
    
    return (
        <>
            <PieChart
                colors={customColors}
                series={[
                    {
                        data: rawData,
                        highlightScope: { fade: 'global', highlight: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        cornerRadius: paddingAngle * 4,
                        paddingAngle: paddingAngle,
                        innerRadius: donnut,
                    }
                ]}
                height={500}
                width={800}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                {changeColorsButton()}
                {changePddingButton()}
                {changeDonnutButton()}
            </Box>
        </>
    );
};
