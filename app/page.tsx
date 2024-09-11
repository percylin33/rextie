import Bancos from "@/components/bancos";
import Business from "@/components/business";
import ButtonInicio from "@/components/button-inicio";
import Carousel from "@/components/carousel";
import Comentarios from "@/components/comentarios";
import Lider from "@/components/lider";
import Medios from "@/components/medios";
import Playtrores from "@/components/play-strores";
import PresentacionConvercion from "@/components/presentacion-convercion";


export default function Home() {
  return (
    <div className="">
      <PresentacionConvercion />
      <Bancos />
      <Business />
      <Lider />
      <Carousel />
      <Comentarios />
      <Medios />
      <Playtrores />
      <ButtonInicio />
    </div>
  );
}
