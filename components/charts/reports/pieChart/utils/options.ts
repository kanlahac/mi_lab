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

        legend: { 
            show: false 
        },
    
        series: [
            {
                type: 'pie',
                radius: ['60%', '90%'],
                center: ['50%', '50%'],
                padAngle: 4,
                data: data,
                label: {
                    show: false,
                },
        
                labelLine: {
                    show: false 
                },
                itemStyle: {
                    borderRadius: 10,                  
                    shadowBlur: 5,            
                    shadowColor: 'rgba(0,0,0,0.3)'
                },
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

