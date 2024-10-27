"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  universidade: string;
  curso: string;
  turno: string;
  senha: string;
  confirmarSenha: string;
  modeloCarro?: string;
  placaCarro?: string;
  corCarro?: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    universidade: "",
    curso: "",
    turno: "",
    senha: "",
    confirmarSenha: "",
    modeloCarro: "",
    placaCarro: "",
    corCarro: "",
  });
  
  const [showCarDetails, setShowCarDetails] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <main>
      <section className="flex flex-col">
        <header className="flex items-center justify-center mt-10">
          <Image
            width={100}
            height={130}
            src="/logoRegister.svg"
            alt="Logo de Registro"
         
          />
        </header>
        <div className="mx-4 sm:mx-10">
          <div className="flex flex-row items-center gap-5 mt-5">
            <Link href="/" passHref>
              <Image
                className="w-[1.5rem] h-[2rem] cursor-pointer"
                width={30}
                height={10}
                src="/backRegister.png"
                alt="Imagem de fundo"
              />
            </Link>
            <h1 className="text-3xl sm:text-4xl">
              Quer <span className="text-roxoText font-bold">Colar</span>?
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center p-4 sm:p-10 gap-5">
            <h1 className="text-xl sm:text-2xl">Dados Pessoais</h1>
            <label className="flex flex-col">
              Nome:
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="input" />
            </label>
            <label className="flex flex-col">
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
            </label>
            <label className="flex flex-col">
              Telefone:
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required className="input" />
            </label>
            <label className="flex flex-col">
              Universidade:
              <Select value={formData.universidade} onValueChange={(value) => setFormData({ ...formData, universidade: value })}>
                <SelectTrigger className="input">
                  <SelectValue placeholder="Selecione sua Faculdade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Unifeso">Unifeso</SelectItem>
                  <SelectItem value="Unopar">Unopar</SelectItem>
                  <SelectItem value="Estácio">Estácio</SelectItem>
                </SelectContent>
              </Select>
            </label>
            <label className="flex flex-col">
              Curso:
              <input type="text" name="curso" value={formData.curso} onChange={handleChange} required className="input" />
            </label>
            <label className="flex flex-col">
              Turno:
              <Select value={formData.turno} onValueChange={(value) => setFormData({ ...formData, turno: value })}>
                <SelectTrigger className="input">
                  <SelectValue placeholder="Selecione seu turno" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manha">Manhã</SelectItem>
                  <SelectItem value="tarde">Tarde</SelectItem>
                  <SelectItem value="noite">Noite</SelectItem>
                </SelectContent>
              </Select>
            </label>

            <label className="flex flex-col">
              Criar Senha:
              <input type="password" name="senha" value={formData.senha} onChange={handleChange} required className="input" />
            </label>
            <label className="flex flex-col">
              Confirmar Senha:
              <input type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required className="input" />
            </label>

            <label className="flex items-center mt-5">
              <input
                type="checkbox"
                onChange={(e) => setShowCarDetails(e.target.checked)}
                className="mr-2"
              />
              Quero dar Carona também
            </label>

            {showCarDetails && (
              <div className="mt-5 p-5 border border-gray-300 rounded-lg">
                <h2 className="text-xl mb-4">Detalhes do Veículo</h2>
                <label className="flex flex-col mt-3">
                  Modelo do Carro:
                  <input type="text" name="modeloCarro" value={formData.modeloCarro} onChange={handleChange} required className="input" />
                </label>
                <label className="flex flex-col mt-3">
                  Placa do Veículo:
                  <input type="text" name="placaCarro" value={formData.placaCarro} onChange={handleChange} required className="input" />
                </label>
                <label className="flex flex-col mt-3">
                  Cor do Veículo:
                  <input type="text" name="corCarro" value={formData.corCarro} onChange={handleChange} required className="input" />
                </label>
              </div>
            )}

            <button type="submit" className="input mt-5">
              Cadastrar
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <p className="text-sm">
              Já possui login?{" "}
              <Link href="/login" className="text-roxoText font-bold">
                Entre aqui
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
