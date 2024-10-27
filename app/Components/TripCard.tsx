export default function TripCar(props:any) {
  return (
    <div className="border-2 flex items-center border-[#8434CB] w-[17rem] h-[8rem] rounded-lg p-4">
      <div>
        <p>{props.nome}</p>
        <p className="text-[12px] text-[#B460FF]">{props.curso}</p>
        <p className="text-[12px] mt-1">Rota de Partida</p>
        <strong className="text-[#B460FF]">{props.partida}</strong>
      </div>
      <strong className="ml-10 text-lg">R${props.valor}</strong>
    </div>
  );
}
