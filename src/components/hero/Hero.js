import Image from "next/image";
import SomosExpert from "../SomosExpert";

function Hero() {
  return (
    <div>
      <div className="absolute -z-10">
        <Image
          src={"hero.svg"}
          height={861}
          width={1920}
          alt="teste"
          className="object-cover pointer-events-none"
          objectFit="cover"
        />
      </div>
      <div className="pb-[15vw]">
        <div className="sm:p-[10vw] md:p-[5vw] sm:pt-32">
          <div className="w-40">
            <Image
              src={"company.svg"}
              height={180}
              width={255}
              alt="teste"
              className="object-cover pointer-events-none"
              objectFit="cover"
            />
          </div>
          <p className="sm:text-6xl max-sm:w-52 w-3/6 text-[#4B5478] font-bold pb-4 max-sm:pl-6">
            Conquiste a confiança dos seus clientes.
          </p>
          <p className="text-[#D6067E] max-sm:pt-40 w-96">
            Gere credibilidade para a sua marca e fidelize seus clientes com
            nossas estratégias de Marketing Digital
          </p>
        </div>
      </div>
    </div>
  );
}

<style>.teste {}</style>;

export default Hero;
