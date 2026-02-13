export function generateRawData() {
    const randomVal = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const seriesPool = ['A', 'B', 'C', 'D', 'E'];

    const series = [...seriesPool]; 

    const data = months.map(month => {
        const row: { label: string; [key: string]: number | string } = { label: month };
        
        series.forEach(s => {
            row[s] = randomVal(100, 500);
        });

        return row;
    });

    return { data, series };
}