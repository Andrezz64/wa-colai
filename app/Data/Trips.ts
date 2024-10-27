export interface Trips {
    nome: string;
    curso: string;
    partida: string;
    valor: string;
}

const dataTrips: Array<Trips> = [
    {
        nome: "João Silva",
        curso: "Engenharia de Software",
        partida: "Rua olá",
        valor: "32,00"
    },
    {
        nome: "Maria Oliveira",
        curso: "Design Gráfico",
        partida: "Rua Auréçio batisa lopes, 767",
        valor: "12,76"
    },
    {
        nome: "Eduardo guarilha",
        curso: "Ciência da Computação",
        partida: "Avenida Aparecida, 298",
        valor: "20,00"
    }
    
];

export default dataTrips;
