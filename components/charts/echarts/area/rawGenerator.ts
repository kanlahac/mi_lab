const generateColors = (count: number): string[] => {
    return Array.from({ length: count }, () => 
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    );
};

export function generateRawData() {
    const randomVal = () => Math.floor(Math.random() * 800) + 100;
    
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const series = ['A', 'B', 'C', 'D', 'E'];    

    return {
        labels: months,
        datasets: series.map((name, index) => {
            const color = generateColors(1)[0];

            return {
                label: name,
                data: months.map(() => randomVal()),
                backgroundColor: color + '60',
                borderColor: color,
                borderWidth: 1,
                fill: true,
                tension: 0.4,
            };
        }),
    };
}