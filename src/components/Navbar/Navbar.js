import Image from "next/image";
import Social from "../SocialButton";
import NavLinks from "./NavLinks";
import NavbarCaminho from "./NavbarCaminho";

function Header() {
  return (
    <nav className="flex items-center sm:justify-evenly sm:h-24 bg-gradient-to-r from-[#7CC7D4] to-[#FDFF99] from-40% drop-shadow-md pt-6 max-sm:gap-4 p-4">
      <div>
        <Image
          src={"logo.svg"}
          height={38}
          width={38}
          alt="logo"
          className="max-sm:hidden object-cover pointer-events-none"
        />
      </div>
      <div className="flex items-center sm:gap-12">
        <div className="flex gap-8">
          <NavbarCaminho href={"/"} alt={"inicio"}>
            Inicio
          </NavbarCaminho>
          <NavbarCaminho href={"/"} alt={"cerviços"}>
            Serviços
          </NavbarCaminho>
          <NavbarCaminho href={"/"} alt={"clientes"}>
            Clientes
          </NavbarCaminho>
          <NavbarCaminho href={"#sobre"} alt={"sobre"}>
            Sobre
          </NavbarCaminho>
        </div>
        <button className="max-sm:hidden h-10 flex gap-4 items-center bg-gradient-to-r from-[#CB1688] to-[#83B4D8] text-white p-4 rounded-xl hover:scale-105 transition">
          <p className="max-sm:text-sm max-sm:w-24">Contate-nos</p>
          <Image
            src={"span.elementor-button-icon.svg"}
            height={20}
            width={20}
            alt="image"
            className="object-cover pointer-events-none"
          />
        </button>
        <Social />
      </div>
    </nav>
  );
}

export default Header;
