import Header from "../Components/Header";

export default function Pegar(){
return(
    <div>
        <Header></Header>
        <main>
            <h1 className="text-center text-[25px] pl-[5rem] pr-[5rem]">
                <span className="text-roxoText">Colar </span>
                na facul ou voltar pra casa ?
            </h1>
            <div>
            <form action="">
                <label htmlFor="partida">Partida</label>
                <input type="text" />
                <label htmlFor="destino">Destino</label>
                <input type="text" name="" id="" />
            </form>
            </div>
        </main>
    </div>
)
}