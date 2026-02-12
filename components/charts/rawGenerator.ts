export function generateRawData() {
    let data: any[] = [];

    const randomCountBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const seriesPool = ['A', 'B', 'C', 'D', 'E'];

    const numberOfSeries = randomCountBetween(2, 6);
    const activeSeries = seriesPool.slice(0, numberOfSeries);

    const monthCount = randomCountBetween(6, 12);

    for (let i = 0; i < monthCount; i++) {
        const dynamicValues: Record<string, number> = {};
        
        activeSeries.forEach(serie => {
            dynamicValues[serie] = randomCountBetween(100, 1000);
        });

        data.push({
            label: months[i],
            value: dynamicValues
        });
    }

    return data;
}