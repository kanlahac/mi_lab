export function generateRawData() {
    const randomVal = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const series = ['A', 'B', 'C', 'D', 'E'];

    const data = months.map(cat => {
        const row: { category: string; [key: string]: number | string } = { category: cat };
        
        series.forEach(key => {
            row[key] = randomVal(200, 1500);
        });

        return row;
    });

    return { data, series };
}