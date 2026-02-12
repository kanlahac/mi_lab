export function generateRawData() {
    const randomBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    
    const metrics = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const names = ['A', 'B', 'C'];

    const series = names.map(name => ({
        label: name,
        data: metrics.map(() => randomBetween(50, 120))
    }));

    return {
        metrics,
        series,
        max: 120
    };
}
