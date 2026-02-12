export function generateRawData() {
    const randomCountBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const seriesPool = ['A', 'B', 'C', 'D', 'E'];
    const numberOfSeries = randomCountBetween(3, 5);
    const activeSeries = seriesPool.slice(0, numberOfSeries);

    const data = activeSeries.map((serie, index) => ({
        id: index,
        value: randomCountBetween(100, 500),
        label: serie,
    }));

    return data;
}
