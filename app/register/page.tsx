"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [showCarDetails, setShowCarDetails] = useState(false);

  return (
    <main className="">
      <section className="flex flex-col">
        <header className="flex items-center justify-center mt-10">
          <Image
            width={100}
            height={130}
            src="/logoRegister.svg"
            alt="Logo de Registro"
            objectFit="cover"
          />
        </header>
        <div>
          <div className="pl-10 flex flex-row items-center gap-10 mt-5">
            <Image
              className="w-[1.5rem] h-[2rem]"
              width={30}
              height={10}
              src="/backRegister.png"
              alt="Imagem de fundo"
              objectFit="cover"
            />
            <h1 className="text-4xl">
              Quer <span className="text-roxoText font-bold">Colar</span>?
            </h1>
          </div>
          <form className="flex flex-col justify-center p-10 gap-5">
            <h1>Dados Pessoais</h1>
            <label className="flex flex-col">
              Nome:
              <input type="text" required className="input" />
            </label>
            <label className="flex flex-col">
              Email:
              <input type="email" required className="input" />
            </label>
            <label className="flex flex-col">
              Telefone:
              <input type="tel" required className="input" />
            </label>
            <label className="flex flex-col">
              Universidade:
              <select required className="input">
                <option value="">Selecione sua faculdade</option>
                <option value="Unifeso">Unifeso</option>
                <option value="Unopar">Unopar</option>
                <option value="Estácio">Estácio</option>
              </select>
            </label>
            <label className="flex flex-col">
              Curso:
              <input type="text" required className="input" />
            </label>
            <label className="flex flex-col">
              Turno:
              <select className="input" required>
                <option value="">Selecione seu turno</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
              </select>
            </label>

            {/* Checkbox para indicar carona */}
            <label className="flex items-center mt-5">
              <input
                type="checkbox"
                onChange={(e) => setShowCarDetails(e.target.checked)}
                className="mr-2"
              />
              Quero dar Carona também
            </label>

            {/* Campos adicionais para o carro */}
            {showCarDetails && (
              <div className="mt-5 p-5 border border-gray-300 rounded-lg">
                <h2 className="text-xl mb-4">Detalhes do Veículo</h2>
                <label className="flex flex-col mt-3">
                  Modelo do Carro:
                  <input type="text" required className="input" />
                </label>
                <label className="flex flex-col mt-3">
                  Placa do Veículo:
                  <input type="text" required className="input" />
                </label>
                <label className="flex flex-col mt-3">
                  Cor do Veículo:
                  <input type="text" required className="input" />
                </label>
              </div>
            )}

            <button type="submit" className="input mt-5">
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
