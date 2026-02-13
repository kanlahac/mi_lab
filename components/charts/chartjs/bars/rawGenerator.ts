const generateColors = (count: number): string[] => {
    return Array.from({ length: count }, () => 
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    );
};

export function generateRawData() {
    const randomVal = () => Math.floor(Math.random() * 1000);
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const series = ['A', 'B', 'C', 'D', 'E'];    

    return {
        labels: months,
        datasets: series.slice(0, 3).map((name, index) => ({
            label: name,
            data: months.map(() => randomVal()),
            backgroundColor: generateColors(1)[0],
            borderColor: generateColors(1)[0],
            borderWidth: 1,
        }))
    };
}