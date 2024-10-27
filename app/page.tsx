'use client'
import { InstagramLogo } from "@phosphor-icons/react"
import Link from 'next/link'
export default function Home() {

  return (
    <div>
      <main className="flex flex-col items-center">
        <section className="mb-[10vh]">
          <div className="h-[100vh] w-[99vw] lg:items-start lg:w-[99vw] flex justify-center flex-col bg-[url('./carro.png')] bg-cover bg-center ">
            <div className="flex flex-col  items-center w-[90%] max-w-[480px] 640px:max-w-[600px] 1024px:max-w-[800px] mx-auto text-center">
              <p className="text-2xl  md:text-[3rem] 480px:text-3xl 768px:text-4xl font-semibold w-full max-w-[80%]">
                Vá para a aula com sua carona no{" "}
                <span className="text-roxoText">colaí</span>
              </p>
              <p className="mt-4 lg:text-[1.5rem] text-base 480px:text-lg 768px:text-xl w-full max-w-[80%]">
                Crie conexões, compartilhe o caminho, economize e faça a
                diferença.
              </p>
            </div>
            <div className="mt-8 flex gap-4 640px:gap-6 w-[80vw] max-w-[480px] 640px:max-w-[600px] 1024px:max-w-[800px] mx-auto">
              <Link href={"/login"} className="p-2 bg-roxoBtn text-center w-[40vw] 640px:w-[20vw] rounded-xl 768px:rounded-2xl text-lg hover:bg-roxoText duration-200">
                Colar
              </Link>
              <button className="p-2 bg-transparent border-2 border-roxoBtn hover:border-roxoText hover:text-roxoText duration-200 w-[40vw] 640px:w-[20vw] rounded-xl 768px:rounded-2xl text-lg">
                Saiba mais
              </button>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center max-w-2xl">
          <section className="mb-4 text-left w-[80vw] 2xl:w-[60vw]">
            <h1 className="mb-4 font-bold text-4xl text-left">
              Por que você deve <span className="text-purple-500">Colar</span>?
            </h1>
            <p>
              Com nossa plataforma, você compartilha o trajeto para a faculdade
              de um jeito inteligente, seguro e econômico.
            </p>
            <p>
              Quer dar ou pegar carona? Aqui você economiza, faz novas conexões
              e ainda ajuda o planeta, tudo na companhia de outros estudantes.
              Cada carona é um passo para menos trânsito, menos poluição e mais
              interação.
            </p>
            <p>
              Que tal transformar sua ida e volta em algo mais divertido e
              sustentável? Vem com a gente e descubra um jeito novo de se
              locomover!
            </p>
          </section>
          <section className="mb-4 text-left w-[80vw] 2xl:w-[60vw]">
            <h2 className="font-bold text-2xl">Novas conexões</h2>
            <p>
              A plataforma também é uma oportunidade para conhecer e se conectar
              com outros estudantes da sua faculdade. Além de tornar o trajeto
              mais agradável, isso facilita novas amizades e expande seu círculo
              de contatos acadêmicos e profissionais.
            </p>
          </section>
          <section className="mb-4 text-left w-[80vw] 2xl:w-[60vw]">
            <h2 className="font-bold text-2xl">Flexibilidade</h2>
            <p>
              Aqui, você tem a liberdade de alternar entre ser motorista e
              passageiro conforme sua necessidade, aumentando a flexibilidade de
              uso. Com apenas um único perfil, você pode escolher seu papel a
              cada viagem, sem a necessidade de criar contas separadas. Assim,
              fica fácil adaptar o uso da plataforma ao seu dia a dia!
            </p>
          </section>
          <section className="mb-4 text-left w-[80vw] 2xl:w-[60vw]">
            <h2 className="font-bold text-2xl">Sustentabilidade</h2>
            <p>
              Optar pelo compartilhamento de caronas é uma forma de ajudar o
              meio ambiente. Com menos carros nas ruas, contribuímos para a
              redução das emissões de CO₂, promovendo uma mobilidade mais verde
              e sustentável para todos.
            </p>
          </section>
          <div className="h-[90vh] w-[99vw] lg:pl-[20vw] flex justify-end pb-[10rem] pl-[5vw] items-start  mt-10 mb-10 flex flex-col bg-[url('./HomeBanner2.svg')] bg-cover bg-center sm:rounded-3xl">
          <p className="text-[3rem] max-md:text-[2rem]"><span className="text-roxoText">Colar </span> com a gente é fácil</p>
          </div>
          <div className=" flex items-center gap-2 flex-col justify-center mb-4 text-left w-[80vw] 2xl:w-[60vw]">
            <h3 className="font-bold text-xl">
              1. Cadastre-se:{" "}
              <span className="font-thin">Crie seu perfil gratuito</span>
            </h3>
            <h3 className="font-bold text-xl">
              2. Escolha seu Papel:{" "}
              <span className="font-thin">
                Como motorista, ofereça carona; como passageiro, encontre uma.
              </span>
            </h3>
            <h3 className="font-bold text-xl">
              3. Conecte-se:{" "}
              <span className="font-thin">
                Veja as caronas disponíveis ou os passageiros que estão na sua
                rota.
              </span>
            </h3>
            <h3 className="font-bold text-xl">
              4. Aproveite:{" "}
              <span className="font-thin">
                Curta o trajeto economizando tempo e dinheiro.
              </span>
            </h3>
            <button className="p-2 bg-roxoBtn w-[20vw] rounded-xl 768px:rounded-2xl text-lg hover:bg-roxoText duration-200">
                Quero Colar
            </button>
          </div>
        </div>
        <footer className="flex p-10 w-[100vw] max-md:hidden space-x-[40rem] bg-gradient-to-r from-[#121212] to-[#8C2EDF] justify-center items-center">
          <div className="flex flex-col ">
            <p>Informações Gerais</p>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Segurança</a>
              </li>
              <li>
                <a href="">Sobre</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex">
              <li>EmailRealTop@dominioreal.com</li>
            </ul>
              <ul className="flex flex-col">
              <a href=""className="flex items-center"><InstagramLogo size={23} />@rollbackalea</a>
              
              </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
