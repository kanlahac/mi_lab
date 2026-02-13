export function generateRawData() {
    const randomCountBetween = (min: number, max: number) => 
        Math.floor(Math.random() * (max - min + 1)) + min;
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const seriesPool = ['A', 'B', 'C', 'D', 'E'];

    const numberOfSeries = randomCountBetween(2, 5);
    const activeSeries = seriesPool.slice(0, numberOfSeries);
    const monthCount = randomCountBetween(6, 12);

    const data = [];

    for (let i = 0; i < monthCount; i++) { 
        const row: { label: string; [key: string]: string | number } = { label: months[i] };
        
        activeSeries.forEach(serie => {
            row[serie] = randomCountBetween(100, 1000);
        });

        data.push(row);
    }

    return { data, activeSeries };
}