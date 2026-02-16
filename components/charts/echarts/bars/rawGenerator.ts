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

export function generateReportRawData() {
    const months: string[] = [];
    const series = ['Distancia', 'Tiempo de viaje', 'Tiempo inactivo'];    

    const randomVal = () => Math.floor(Math.random() * 1200) + 100;

    for (let i = 0; i < 12; i++) {
        months.push(generateCode());
    }

    return {
        months,
        data: series.map(name => ({
            name: name,
            data: months.map(() => {
                if (name === "Distancia"){
                    return{
                        value: randomVal(),
                        unit: "km"
                    }
                } else{
                    return{
                        value: randomVal(),
                        unit: "hh:mm"
                    }
                }
            })
        }))
    };
}

function generateCode(): string {
    const parteNumerica = Math.floor(100000 + Math.random() * 900000).toString();
    const sufijo = Math.floor(100 + Math.random() * 900).toString();

    return `${parteNumerica} EQX${sufijo}`;
}