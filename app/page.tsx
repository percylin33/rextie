import Bancos from "@/components/bancos";
import Business from "@/components/business";
import ButtonInicio from "@/components/button-inicio";
import Carousel from "@/components/carousel";
import Comentarios from "@/components/comentarios";
import FloatingButtons from "@/components/floatingButtons";
import Lider from "@/components/lider";
import Medios from "@/components/medios";
import Playtrores from "@/components/play-strores";
import PresentacionConvercion from "@/components/presentacion-convercion";


export default function Home() {
  return (
    <div className="md:bg-transparent">
      <div className="flex items-center justify-center min-h-screen">
        <div className="md:w-[80%] items-center">
          <PresentacionConvercion />
          <Bancos />
        </div>
      </div>
      <Business />
      <Lider />
      <Carousel />
      <Comentarios />
      <Medios />
      <Playtrores />
      <ButtonInicio />
      <FloatingButtons />
    </div>
  );
}
