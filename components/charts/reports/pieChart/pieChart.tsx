// "use client";

// import ReactECharts from "echarts-for-react";
// import { generateOptions, loadingOptions } from "./utils/options";
// import { useEffect, useRef, useState } from "react";
// import { PieChartProps } from "./types";
// import { remapData } from "./utils/remap";
// import CustomLegend from "./layouts/customLegend";
// import { Box } from "@mui/material";
// import { EChartsType } from "echarts";
// // import useTheme from "@mui/material/styles/useTheme";

// export default function PieChart({ values }: PieChartProps) {
//     const data = remapData(values);
//     const options = generateOptions(data);

//     const parentRef = useRef<HTMLDivElement>(null);
//     const chartRef = useRef<ReactECharts>(null);

//     const [parentWidth, setParentWidth] = useState<number>(0);
//     const [loading, setLoading] = useState(true);
    
//     // const theme = useTheme();

//     let echartInstance: EChartsType | undefined = undefined;

//     useEffect(() => {
//         if (!parentRef.current) return;
    
//         const resizeObserver = new ResizeObserver((entries) => {
//             const entry = entries[0];

//             if (!entry) return;

//             const width = entry.contentRect.width;
            
//             window.requestAnimationFrame(() => {
//                 setParentWidth(width);

//                 echartInstance = chartRef.current?.getEchartsInstance();

//                 if (echartInstance) {
//                     echartInstance.resize({
//                         width: width,            
//                     });
//                 }
//             });
//         });
    
//         resizeObserver.observe(parentRef.current);
    
//         return () => resizeObserver.disconnect();
//     }, []); 

//     useEffect(() => {
//         if (parentWidth > 0) {
//             console.log(`Ancho real actualizado en el estado: ${parentWidth}px`);
//         }
//     }, [parentWidth]);

//     useEffect(() => {

//         if (loading) {
//             echartInstance?.showLoading(loadingOptions);
//         } else {
//             echartInstance?.hideLoading();
//         }
//     }, [loading]);

//     useEffect(() => {
//         const timer = setTimeout(() => setLoading(false), 2000);
//         return () => clearTimeout(timer);
//     }, []);

//     const handleLegendClick = (name: string) => {
//         echartInstance?.dispatchAction({ 
//             type: 'legendToggleSelect', 
//             name: name
//         });
//     };

//     return (
//         <Box 
//             ref={parentRef}
//             sx={{ 
//                 display: 'flex', 
//                 flexDirection: 'vertical', 
//                 flexWrap: 'wrap', 
//                 justifyContent: 'center',
//                 alignItems: 'center', 
//                 width: '100%', 
//             }}
//         >

//             <Box sx={{ flex: 1, width: "100%" }}>
//                 <ReactECharts  
//                     ref={chartRef}
//                     option={options} 
//                     notMerge={true}
//                     lazyUpdate={true}
//                 />
//             </Box>
            
//             <Box sx={{ flex: 0 }}>
//                 <CustomLegend 
//                     data={values} 
//                     onLegendClick={handleLegendClick} 
//                 />
//             </Box>

//         </Box>
//     );
// }

"use client";

import ReactECharts from "echarts-for-react";
import { generateOptions, loadingOptions } from "./utils/options";
import { useEffect, useRef, useState } from "react";
import { PieChartProps } from "./types";
import { remapData } from "./utils/remap";
import CustomLegend from "./layouts/customLegend";
import { Box } from "@mui/material";

export default function PieChart({ values }: PieChartProps) {
    const data = remapData(values);
    const options = generateOptions(data);

    const parentRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<ReactECharts>(null);

    const [parentWidth, setParentWidth] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    // Resize Observer
    useEffect(() => {
        if (!parentRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;

            const { width } = entry.contentRect;

            window.requestAnimationFrame(() => {
                setParentWidth(width);
                // Obtenemos la instancia JUSTO AQUÍ dentro
                const instance = chartRef.current?.getEchartsInstance();
                if (instance) {
                    instance.resize();
                }
            });
        });

        resizeObserver.observe(parentRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    // Loading
    useEffect(() => {
        const instance = chartRef.current?.getEchartsInstance();
        if (loading) {
            instance?.showLoading(loadingOptions);
        } else {
            instance?.hideLoading();
        }
    }, [loading]);

    // Timer
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);


    const handleLegendClick = (name: string) => {
        const instance = chartRef.current?.getEchartsInstance();

        instance?.dispatchAction({ 
            type: 'legendToggleSelect', 
            name: name
        });
    };

    const isNarrow = parentWidth > 0 && parentWidth < 450;

    return (
        <Box 
            ref={parentRef}
            sx={{ 
                display: 'flex', 
                flexDirection: isNarrow ? 'column' : 'row', 
                justifyContent: 'center',
                alignItems: 'center', 
                width: '100%',
                gap: 2
            }}
        >
            <Box 
                sx={{ 
                    flex: 1, 
                    width: '100%', 
                    minWidth: 0,
                    height: parentWidth,
                }}
            >
                <ReactECharts  
                    ref={chartRef}
                    option={options} 
                    style={{ height: '100%', width: '100%' }}
                    notMerge={true}
                    lazyUpdate={true}
                />
            </Box>
            
            <Box sx={{ flexShrink: 0 }}>
                <CustomLegend 
                    data={values} 
                    isNarrow={isNarrow}
                    onLegendClick={handleLegendClick} 
                />
            </Box>
        </Box>
    );
}