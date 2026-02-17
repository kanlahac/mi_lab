import { EChartsType } from "echarts";

export interface PieChartProps {
    /**
   * Valores del gráfico.
   */
    values: {
        title: string;
        v: string;
        r: number;
        pallet_color: string;
    }[];
}

export interface PieChartData {
    name: string;
    value: number;
    itemStyle: {
        color: string;
    };
}

export interface CustomLegendProps {
    data: any[];
    onLegendClick: (name: string) => void;
}