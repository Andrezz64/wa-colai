'use client'
import Image from "next/image";
import Header from "../Components/Header";
import { useState } from "react";

export default function Pegar() {
    
    interface Form {
        partida: string;
        destino: string;
        data: string;
    }

    // Inicializa o estado com um objeto que segue a interface Form
    const [request, setRequest] = useState<Form>({ partida: "", destino: "", data: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Atualiza o estado de acordo com o nome do input
        setRequest((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e:any) =>{
        e.preventDefault()
        console.log(request)
    }
    return (
        <div>
            <Header />
            <main>
                <h1 className="text-center text-[25px] pl-[4rem] pr-[4rem] mb-10">
                    <span className="text-roxoText">Colar </span>
                    na facul ou voltar pra casa ?
                </h1>
                <div>
                    <form  onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
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

                        <div className="flex items-center mt-10 gap-2 mb-10">
                            <Image
                                src="/calendar.svg"
                                alt="Logo"
                                width={20}
                                height={20}
                            />
                            <label htmlFor="data" className="mr-2">Agendar</label>
                            <input
                                className="input"
                                type="datetime-local"
                                name="data"
                                value={request.data}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="button">
                            <Image
                                src="/LogoBtn.svg"
                                alt="Logo"
                                width={90}
                                height={90}
                            />
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
