"use client";

import Chart from "@/components/charts/chart";
import { Typography } from "@mui/material";

export default function Chartjs() {
    return (
        <div>
            <Typography textAlign={"center"} variant="h3" padding={4}>
                Chart.js
            </Typography>

            <Chart library="chartjs" type="lines" />
            <Chart library="chartjs" type="bars" />
            <Chart library="chartjs" type="area" />
            <Chart library="chartjs" type="pie" />
        </div>
    );
}
