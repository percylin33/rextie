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
      <div className="flex items-center justify-center h-auto  xl:my-16">
        <div className="md:w-[80%] items-center">
          <PresentacionConvercion />
        </div>
      </div>
          <Bancos />
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
