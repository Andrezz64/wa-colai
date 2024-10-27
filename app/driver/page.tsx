"use client";
import Header from "../Components/Header";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import CardTrip from "@/components/cardTrip";
// Componente para input de dinheiro
const MoneyInput = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // Remove caracteres não numéricos
    const numericValue = Number(inputValue) / 100; // Converte para número e divide por 100
    onChange(numericValue);
  };

  const formatValue = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <input
      type="text"
      value={formatValue(value)}
      onChange={handleChange}
      placeholder="R$ 0,00"
      className="input" // Adicione suas classes Tailwind aqui
    />
  );
};

export default function Pegar() {
  interface Form {
    partida: string;
    destino: string;
    data: string;
    valor: number; // Adicione o campo valor
  }

  const [request, setRequest] = useState<Form>({
    partida: "",
    destino: "",
    data: "",
    valor: 0,
  });

  const [isOnline, setIsOnline] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMoneyChange = (value: number) => {
    setRequest((prev) => ({
      ...prev,
      valor: value,
    }));
  };

  const handleSwitchChange = () => {
    setIsOnline((prev) => !prev);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(request);
  };

  const trips = [
    { nome: "João Silva", curso: "Engenharia", partida: request.partida || "Rua Manoel Carreiro de Mello, 1448", valor: 7 },
    { nome: "Maria Oliveira", curso: "Medicina", partida: request.partida || "Rua Coronel Senra, 370", valor: 15 },
  ];

  return (
    <div>
      <Header />
      <main className="flex flex-col gap-5">
        <h1 className="text-center text-[25px] pl-[4rem] pr-[4rem]">
          <span className="text-roxoText">Cola</span> ai, bora dividir o caminho?
        </h1>
        <div className="w-full flex justify-center items-center gap-5">
          <h2>Oferecer Carona:</h2>
          <Switch 
            id="airplane-mode" 
            checked={isOnline}
            onCheckedChange={handleSwitchChange}
            className="switch"
          />
          <span className={`${isOnline ? 'text-green-600' : 'text-red-600'}`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
            <section className="flex flex-col min-w-[20rem]">
              <label htmlFor="partida">Partida</label>
              <input
                className="input"
                type="text"
                name="partida"
                value={request.partida}
                onChange={handleChange}
                required
              />
            </section>
            <section className="flex flex-col min-w-[20rem]">
              <label htmlFor="destino">Destino</label>
              <input
                className="input"
                type="text"
                name="destino"
                value={request.destino}
                onChange={handleChange}
                required
                id="destino"
              />
            </section>   
            <div className="flex flex-col min-w-[20rem] mb-5">
              <label htmlFor="valor">Valor da Carona</label>
              <MoneyInput value={request.valor} onChange={handleMoneyChange} />
            </div>
            <button className="button mb-10">Lançar Carona</button>
          </form>
          <hr />
          <div className=" flex flex-col p-[2rem] gap-5 justify-center items-center">
            <h1 className="text-xl">Solicitações Recebidas</h1>
            {trips.map((trip, index) => (
              <CardTrip
                key={index}
                nome={trip.nome}
                curso={trip.curso}
                partida={trip.partida}
                valor={trip.valor}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
