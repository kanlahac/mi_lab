const generateColors = (count: number): string[] => {
    return Array.from({ length: count }, () => 
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
    );
};

export function generateRawData() {
    const randomVal = () => Math.floor(Math.random() * 2000) + 500;
    const series = ['A', 'B', 'C', 'D', 'E'];

    const colors = generateColors(series.length);

    return {
        labels: series,
        datasets: [
            {
                label: 'Market Share',
                data: series.map(() => randomVal()),
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    };
}