import React from "react";
import SobreButton from "./SobreButton";

function Sobre() {
  return (
    <div className="pb-16">
      <div className="flex justify-center">
        <h3
          id="sobre"
          className="text-[#4B5478] sm:text-2xl max-sm:w-[900px] w-[55%] p-12 pb-16"
        >
          A <span className="font-bold">EXO Company</span> é uma agência
          completa, atuando em todos os seguimentos da área de eventos. Desde
          2014 desenvolvendo projetos criativos para grandes clientes, com foco
          em estratégias que buscam o melhor resultado para a sua empresa.
        </h3>
      </div>
      <div className="flex justify-center items-center sm:gap-12 gap-12 max-sm:flex-col">
        <div className="flex flex-col gap-4">
          <SobreButton>
            CONGRESSOS. SIMPOSIOS, CONFERENCIAS E EXPOSICAO
          </SobreButton>
          <SobreButton>MONTAGEM DE FEIRAS E STANDS</SobreButton>
          <SobreButton>RECURSOS HUMANOS, RECEPCAO E CERIMONIAL</SobreButton>
          <SobreButton>BUFFETS CORPORATIVOS E SOCIAIS</SobreButton>
          <SobreButton>AGENCIAMENTO DE VIAGENS E HOSPEDAGENS</SobreButton>
          <SobreButton>AGENCIAMENTO DE VIAGENS E HOSPEDAGENS</SobreButton>
        </div>
        <div className="flex flex-col gap-4">
          <SobreButton>
            CONGRESSOS. SIMPOSIOS, CONFERENCIAS E EXPOSICAO
          </SobreButton>
          <SobreButton>MONTAGEM DE FEIRAS E STANDS</SobreButton>
          <SobreButton>RECURSOS HUMANOS, RECEPCAO E CERIMONIAL</SobreButton>
          <SobreButton>BUFFETS CORPORATIVOS E SOCIAIS</SobreButton>
          <SobreButton>AGENCIAMENTO DE VIAGENS E HOSPEDAGENS</SobreButton>
          <SobreButton>AGENCIAMENTO DE VIAGENS E HOSPEDAGENS</SobreButton>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
