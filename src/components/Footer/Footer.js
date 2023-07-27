import Image from "next/image";
import Social from "../SocialButton";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#7CC7D4] to-[#FDFF99] from-40% drop-shadow-md p-12 text-white">
      <h3 className="font-bold text-4xl text-center">Fale com a Exo</h3>
      <div className="flex gap-20">
        <div>
          <Image
            src={"logo.svg"}
            height={40}
            width={40}
            alt="teste"
            className="object-cover pointer-events-none"
          />
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <a className="hover:font-bold" href="/">
              Quem somos
            </a>
            <a className="hover:font-bold" href="/">
              Fale Conosco
            </a>
            <a className="hover:font-bold" href="/">
              Serviços
            </a>
          </ul>
        </div>
        <div className="flex flex-col gap-2 items-center bg-gradient-to-r from-[#C42490] to-[#8EA2D9] pb-20 p-4 rounded-lg">
          <p className="text-center text-2xl">Contato</p>
          <p>Rua Coronel Madureira, 40 - 13</p>
          <p>Centro, Saquarema / RJ</p>
          <p>Tel: (83) 3578-4917 / 3578-4836</p>
          <Social />
        </div>
      </div>
    </div>
  );
}
