const generateColors = (count: number): string[] => {
    return Array.from({ length: count }, () => 
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    );
};

export function generateRawData() {
    const randomVal = () => Math.floor(Math.random() * 1000);
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const series = ['A', 'B', 'C'];  
    const colors = generateColors(series.length);  

    return {
        labels: months,
        datasets: series.map((name, index) => ({
            label: name,
            data: months.map(() => randomVal()),
            borderColor: colors[index],
            backgroundColor: colors[index],
            tension: 0.1,
            pointRadius: 4,
            pointHoverRadius: 10,
        }))
    };
}