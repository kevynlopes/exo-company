import Image from "next/image";

const HeroBg = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Imagem de plano de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("hero.svg")', // Substitua pelo caminho da sua imagem
        }}
      />
      {/* Conteúdo sobre a imagem */}
      <div className="absolute inset-0 flex max-sm:items-center max-sm:justify-center">
        <div className="p-6 rounded-md sm:mt-32 max-sm:bg-white/40 from-40% sm:ml-32">
          <Image
            src={"company.svg"}
            height={230}
            width={300}
            alt="logo"
            className="max-sm:ml-8 object-cover pointer-events-none"
          />
          <h1 className="sm:text-6xl sm:w-[60%] font-semibold text-[#4B5478]">
            Conquiste a confiança dos seus clientes.
          </h1>
          <p className="mt-2 sm:w-[39%] text-[#D6067E]">
            Gere credibilidade para a sua marca e fidelize seus clientes com
            nossas estrategias de marketing Digital
          </p>
        </div>
      </div>
      <div className="absolute bg-gradient-to-r from-[#7CC7D4] to-[#FDFF99] from-40% drop-shadow-xl p-6 bottom-0 w-full shadow-2xl">
        <p className="text-center sm:text-5xl font-bold text-white tracking-widest">
          S O M O S <span className="text-white/0">--</span> E X P E R T
        </p>
      </div>
    </div>
  );
};

export default HeroBg;
