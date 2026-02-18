"use client";

import { Box, Divider, Typography } from "@mui/material";
import Devices from "@/components/charts/reports/devices";
import PieChart from "@/components/charts/reports/pieChart/pieChart";


const  values = [
    {
        "title": "En movimiento:\n60 h 45 m",
        "v": "8%",
        "r": 8.0,
        "pallet_color": "#0da498"
    },
    {
        "title": "Ralentí:\n75 h 16 m",
        "v": "10%",
        "r": 10.0,
        "pallet_color": "#5494f3"
    },
    {
        "title": "Motor apagado:\n607 h 57 m",
        "v": "82%",
        "r": 82.0,
        "pallet_color": "#f87171"
    }
];

export default function Reports() {
    return (
        <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Typography textAlign={"center"} variant="h3" padding={4}>
                Testing Reports
            </Typography>

            <Divider sx={{ marginTop: 10, marginBottom: 10 }}>BARS</ Divider>
            <Devices />

            <Divider sx={{ marginTop: 10, marginBottom: 10 }}>PIE</ Divider> */}
            <Box sx={{ width: 600 }}>
                <PieChart values={values} />
            </Box>
            
        </div>
    );
}
