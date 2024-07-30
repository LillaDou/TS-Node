

export interface Power {
    id: number, 
    desc: string,
}


const powers: Power[] = [
    {
        id: 1,
        desc: 'Money',
    },
    {
        id: 2,
        desc: 'Drugs',
    },
];

//Exportación por defecto del arreglo de powers[]
export default powers;