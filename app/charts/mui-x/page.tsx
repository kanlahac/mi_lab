"use client";

import Chart from "@/components/charts/chart";
import { Typography } from "@mui/material";

export default function Muix() {
    return (
        <div>
            <Typography textAlign={"center"} variant="h3" padding={4}>
                Raw data generator
            </Typography>

            <Chart library="mui-x" type="bars" />
            <Chart library="mui-x" type="lines" />
            <Chart library="mui-x" type="pie" />
            <Chart library="mui-x" type="radar" />
        </div>
    );
}
