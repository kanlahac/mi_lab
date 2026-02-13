export function generateRawData() {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const series = ['A', 'B', 'C'];  

    const randomVal = () => Math.floor(Math.random() * 1000);

    return {
        months,
        data: series.map(name => ({
            name: name,
            data: months.map(() => randomVal())
        }))
    };
}