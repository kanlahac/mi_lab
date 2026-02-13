"use client";

import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ChartProps } from "./chart.types";


type LayoutProps = 
    | { library: "mui-x"; type: "bars" | "lines" | "pie" | "radar" }
    | { library: "recharts"; type: "bars" | "lines" | "pie" | "area" }
    | { library: "chartjs"; type: "bars" | "area" | "pie" | "lines" }
    | { library: "echarts"; type: "bars" | "area" | "pie" | "lines" };

export default function Chart({ library, type }: LayoutProps) {

    const chartImport = `@/components/charts/${library}/${type}/${type}.tsx`;
    const rawGeneratorImport = `@/components/charts/${library}/${type}/rawGenerator.ts`;

    const ChartComponent = dynamic<ChartProps>(() => import(chartImport), {
        ssr: false
    });

    const [rawData, setRawData] = React.useState<any>(null);

    const handleGenerate = useCallback(async () => {

        const rawGeneratorModule = await import(rawGeneratorImport);
        const data = rawGeneratorModule.generateRawData();

        setRawData(data);
        
    }, [library, type]);

    useEffect(() => {
        handleGenerate();
    }, []);

    return (
        <>
            <Divider textAlign="center" sx={{ width: '100%', my: 5 }}>
                { type.toUpperCase() }
            </Divider>

            <Box sx={{ display: 'flex', gap: 2, p: 3 }}>

                <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Typography variant="h5">
                        Raw data
                    </Typography>

                    <SyntaxHighlighter language="jsx" style={vscDarkPlus} customStyle={{ flex: 1, marginBottom: '16px', maxHeight: '500px', overflowY: 'auto' }}>
                        {rawData ? JSON.stringify(rawData.data || rawData || rawData.datasets, null, 2) : "Press generate data..."}
                    </SyntaxHighlighter>

                    <Button variant="contained" onClick={handleGenerate}>Generate data</Button>
                </Paper>

                <Box sx={{ flex: 4, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {rawData && (
                        <ChartComponent rawData={rawData} />
                    )}
                </Box>

            </Box>
        </>
        
    );
}
