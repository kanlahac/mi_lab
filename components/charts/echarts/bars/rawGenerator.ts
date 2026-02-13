export function generateRawData() {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const series = ['A', 'B', 'C', 'D', 'E'];    

    const randomVal = () => Math.floor(Math.random() * 1200) + 100;

    return {
        months,
        data: series.slice(0, 3).map(name => ({
            name: name,
            data: months.map(() => randomVal())
        }))
    };
}