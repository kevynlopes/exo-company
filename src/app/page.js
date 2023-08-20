import Hero from "@/components/Hero/Hero";
import Impacto from "@/components/Impacto/Impacto";
import Servicos from "@/components/Servicos/Servicos";
import Sobre from "@/components/Sobre/Sobre";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sobre />
      <Servicos />
      <Impacto />
    </div>
  );
}
