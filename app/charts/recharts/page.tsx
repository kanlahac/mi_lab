"use client";

import Chart from "@/components/charts/chart";
import { Typography } from "@mui/material";

export default function Recharts() {
    return (
        <div>
            <Typography textAlign={"center"} variant="h3" padding={4}>
                Recharts
            </Typography>

            <Chart library="recharts" type="lines" />
            <Chart library="recharts" type="bars" />
            <Chart library="recharts" type="area" />
            <Chart library="recharts" type="pie" />
        </div>
    );
}
