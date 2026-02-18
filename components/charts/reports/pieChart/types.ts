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
    isNarrow: boolean;
    onLegendClick: (name: string) => void;
}

export interface ParentSize {
    width: number;
    height: number;
}