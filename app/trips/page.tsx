import Header from "../Components/Header";
import TripCar from "../Components/TripCard";
import dataTrips from "../Data/Trips";
export default function Trips(){
    return(
        <div>
            <Header></Header>
            <main className="p-7 lg:pl-[46rem]">
                <h1 className="text-[1.3rem] ">Motoristas para <span className="text-roxoText"> colar:</span></h1>
            </main>
            <div className="flex justify-center flex-col items-center gap-10">
            {dataTrips.map((viagem, index) => (
                <TripCar
                    key={index}
                    nome={viagem.nome}
                    curso={viagem.curso}
                    partida={viagem.partida}
                    valor={viagem.valor}
                />
            ))}
            </div>
        </div>
    )
}