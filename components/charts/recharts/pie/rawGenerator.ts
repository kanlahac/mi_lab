export function generateRawData() {
    const randomVal = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const seriesPool = ['A', 'B', 'C', 'D', 'E'];
    
    const data = seriesPool.map(serie => ({
        name: serie,
        value: randomVal(500, 2500)
    }));

    return { data };
}