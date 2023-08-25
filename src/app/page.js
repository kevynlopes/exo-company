import Hero from "@/components/Hero/Hero";
import Impacto from "@/components/Impacto/Impacto";
import Servicos from "@/components/Servicos/Servicos";
import Sobre from "@/components/Sobre/Sobre";
import Play from "@/components/Play/Play";
import Clientes from "@/components/Clientes/Clientes";
import Resultado from "@/components/Resultado/Resultado";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sobre />
      <Servicos />
      <Impacto />
      <Play />
      <Clientes />
      <Resultado />
    </div>
  );
}
