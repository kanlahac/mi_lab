export function generateRawData() {
    const series = ['A', 'B', 'C', 'D', 'E'];
    const randomVal = () => Math.floor(Math.random() * 5000) + 1000;

    return series.map(name => ({
        name: name,
        value: randomVal()
    }));
}