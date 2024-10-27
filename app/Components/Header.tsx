'use client'
import Image from "next/image"
export default function Header(){
    return(
        <header className="bg-[#131313] p-[2vh] flex justify-center items-center">
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={90}
          height={90}
        
        />
      </header> 
    )
}