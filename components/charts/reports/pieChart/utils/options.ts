import { PieChartData } from "../types";

export const generateOptions = (data: PieChartData[]) => {
    return {
        tooltip: {
            trigger: 'item',
            formatter: '{d}%',
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
        },

        legend: { show: false },
    
        // legend: {
        //     data: data.map((item: PieChartData) => item.name),
        //     top: 50,
        //     right: '15%',
        //     orient: 'vertical',
        //     icon: 'circle',
        //     itemWidth: 10,
        //     itemHeight: 10,
        //     itemGap: 20,
        //     textStyle: {
        //         fontWeight: 'bold',
        //         backgroundColor: '#f9fafb',
        //         padding: [5, 15, 1, 15],
        //         borderRadius: 5,
        //         borderColor: '#eaeef3',
        //         borderWidth: 0.5,
        //         height: 20,
        //         lineHeight: 20,
        //         itemDistance: -18,
        //     }
        // },
    
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                data: data,
            }
        ]
    }
    
}

export const loadingOptions = {
    text: 'Cargando datos...',
    color: '#3498db',
    textColor: '#fff',
    maskColor: '#323b3b',
    zlevel: 0,
}

