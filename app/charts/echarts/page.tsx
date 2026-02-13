"use client";

import Chart from "@/components/charts/chart";
import { Typography } from "@mui/material";

export default function Echarts() {
    return (
        <div>
            <Typography textAlign={"center"} variant="h3" padding={4}>
                Echarts
            </Typography>

            <Chart library="echarts" type="lines" />
            <Chart library="echarts" type="bars" />
            <Chart library="echarts" type="pie" />
        </div>
    );
}
