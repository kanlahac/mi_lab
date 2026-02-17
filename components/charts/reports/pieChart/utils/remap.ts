import { PieChartProps } from "../types";

export const remapData = (values: PieChartProps['values']) => {
    return values.map(item => ({
        name: item.title,
        value: item.r,
        itemStyle: {
            color: item.pallet_color
        }
    }));
}