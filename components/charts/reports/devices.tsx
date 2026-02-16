"use client";

import ReactECharts from 'echarts-for-react';
import { generateReportRawData } from '../echarts/bars/rawGenerator';
import { Box, Paper } from '@mui/material';
import dayjs from 'dayjs';

export default function Bars() {
    const rawData = generateReportRawData();

    const option = {
        color: ['#0da498', '#5494f3', '#93a2b7'],
        richInheritPlainLabel: false, 
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            backgroundColor: '#323b3b',
            textStyle: {
                color: '#fff',                
                fontSize: 14,
                fontWeight: 'normal',
            },
            padding: 20,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowOffsetX: 0,
            shadowOffsetY: 2,
            borderColor: '#555',                     
            borderWidth: 1,                          
            borderRadius: 8,
            formatter: (params: any) => {

                let html = `<div style="padding: 5px;">`;
                html += `<b style="color: #fff; margin-bottom: 5px; display: block;">${params[0].name.replace(" ", "</br>")}</b>`;
                
                params.forEach((item: any) => {
                    const unit = item.data.unit || 'uds'; 

                    html += `
                        <div style="display: flex; justify-content: left; align-items: center; margin-top: 7px">
                            <span>${item.marker}</span>
                            <span>
                                ${
                                    unit === "km" 
                                        ? item.value
                                        : dayjs(item.value).subtract(item.value, 'minute').format("hh:mm")
                                } 
                                ${unit}
                            </span>
                        </div>`;
                });
                
                html += `</div>`;

                return html;
                
            },
        },
        legend: {
            data: rawData.data.map(s => s.name), // permite seleccionar cada dato
            top: 0,
            icon: 'circle',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                fontWeight: 'bold',
                backgroundColor: '#f9fafb',
                padding: [5, 15, 1, 15],
                borderRadius: 5,
                borderColor: '#eaeef3',
                borderWidth: 0.5,
                height: 20,
                lineHeight: 20,
                itemDistance: -18,
            }
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: rawData.months,
            axisTick: { alignWithLabel: true },
        },
        yAxis: {
            type: 'value',
            splitLine: {    // modificar el grid
                show: true,
                lineStyle: {
                    type: [5, 10], // se puede cambiar a 'dashed'
                    width: 1,       
                    dashOffset: 0 
                }
            }
        },
        dataZoom: [
            { type: 'slider', start: 0, end: 100 },
            { type: 'inside' }
        ],
        toolbox: {

        },
        series: rawData.data.map((s: any) => ({
            name: s.name,
            type: 'bar',
            data: s.data,
            // emphasis: {
            //     focus: 'series'
            // },
            barWidth: '20px',
            itemStyle: {
                borderRadius: [15, 15, 0, 0],
                
            },
        }))
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Paper sx={{ flexGrow: 1, marginBottom: 20 }}>
                    {/* <img 
                        src="/images/charts/chart-bar-mi.png" 
                        alt="" 
                        className="w-full"
                    /> */}
                    <Box
                        component="img"
                        src="/images/charts/chart-bar-mi.png"
                        alt="Chart Preview"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                        }}
                    />
                </Paper>

                <ReactECharts 
                    option={option} 
                    style={{ height: '500px', width: '100%' }}
                    notMerge={true} 
                    lazyUpdate={true}
                />
            </Box>
            
        </>  
    );
};


