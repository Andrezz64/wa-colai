import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-10 flex lg:hidden space-x-[30%] items-center justify-center">
      <Link href={"/driver"}>
        <Image src="/carro.svg" alt="Logo" width={24} height={24}></Image>
      </Link>

      <Link href={"/"}>
        <Image src="/home.svg" alt="Logo" width={24} height={24}></Image>
      </Link>
      <Link href={"/pegar"}>
      <Image src="/homem.svg" alt="Logo" width={24} height={24}></Image>
      </Link>
    </footer>
  );
}
