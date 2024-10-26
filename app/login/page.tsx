"use client";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <header className="flex justify-center p-5">
        <img src="/LogoLogin.svg" alt="" />
      </header>
      <main>
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <ArrowCircleLeft size={32} />
          </Link>
          <h1 className="text-[32px] text-center">
            <span className="text-roxoText">Cola</span> aqui de novo!
          </h1>
        </div>
        <section className="flex flex-col pt-5 justify-center items-center">
          <div>
            <p>Login</p>
            <form action="submit" className="flex justify-center flex-col items-center">
              <div className="flex justify-center flex-col min-w-[17rem] mt-5">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="emailInput"
                  id="email"
                  className="p-1 pl-4 rounded-lg bg-gradient-to-r from-[#4E187D] to-[#131313] rounded-lg border-2 border-[#8434CB]"
                />
                <label htmlFor="senha" className="mt-10 text">Senha: </label>
                <input type="password" className="p-1 pl-4 rounded-lg bg-gradient-to-r from-[#4E187D] to-[#131313] border-2 border-[#8434CB]"/>
                <a className="text-end text-sm  mt-[0.5rem] text-[#D09AFF]" href="/redefinir">Esqueci a senha</a>
              </div>
              <button
              className="bg-roxoBtn p-2 w-[181px] rounded-2xl mt-10 hover:bg-roxoBtn duration-200">Entrar</button>
            </form>
          </div>
        </section>
       <hr className="mt-[2rem]  lg:hidden" />
       <div className="flex justify-center flex-col items-center mt-3">
        <p>Ainda não <span className="text-roxoBtn">colou</span> com a gente ?</p>
        <button className="border-2 p-2 w-[181px] rounded-2xl mt-5 hover:border-roxoBtn hover:text-roxoBtn duration-200">Cadaste</button>
       </div>
      </main>
    </div>
  );
}
