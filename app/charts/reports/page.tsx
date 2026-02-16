"use client";

import { Divider, Typography } from "@mui/material";
import Devices from "@/components/charts/reports/devices";

export default function Reports() {
    return (
        <div>
            <Typography textAlign={"center"} variant="h3" padding={4}>
                Testing Reports
            </Typography>

            <Divider sx={{ marginTop: 10, marginBottom: 10 }}>BARS</ Divider>
            <Devices />
        </div>
    );
}
