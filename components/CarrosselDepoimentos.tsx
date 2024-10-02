import { Slider } from "../src/styles/CarrosselProblemas";
import { CardDepoiments } from "./CardDepoiments";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useMediaQuery } from '@mantine/hooks';
// import classes from '../src/styles/Carousel.css';


export const CarrosselDepoimentos = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const mobile = useMediaQuery(`(max-width: 767px)`);

  

  return (
    <Slider>
      <Carousel
        align={"center"}
        slideSize={"50%"}
        loop
        withIndicators = {mobile}
        // classNames={classes}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <CardDepoiments
            nome="André Oliveria Moraes"
            depoimento="Serviço rápido e eficiente. Preço justo. Só tenho elogios."
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Fernanda Rafaela"
            depoimento="O atendimento e serviços são ótimos, eles explicam certinho o que fizeram no aparelho, são super atenciosos e o preço é justo, sempre recomendo a empresa!"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Adde Morais"
            depoimento="Entregaram a minha televisão em 7 dias. Fui mantido informado do processo via e-mail, e pude ter tranquilidade de aguardar o aparelho."
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Rodney Welder"
            depoimento="Excelente atendimento. Recomendo a todos o serviço dessa empresa. Garantia de trabalho bem feito."
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Eliane Skrippa"
            depoimento="Super feliz com o atendimento, minha TV ficou pronta no dia, com um preço bem acessível"
            imagem="src/assets/depoimentimage.svg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Cleiton Tinho"
            depoimento="Recentemente, tive uma experiência incrível com a Smart TV. Depois de ter enfrentado problemas com minha TV por um bom tempo e ter sido recusado por várias assistências técnicas, fiquei frustrado e preocupado. No entanto, minha perspectiva mudou completamente quando entrei em contato com eles.

Desde o primeiro momento em que entrei em contato, fui tratado com profissionalismo e cortesia. O atendimento ao cliente foi excepcional, com a equipe demonstrando uma compreensão genuína da minha situação e um compromisso em resolver o problema da melhor maneira possível.

O que realmente me impressionou foi a habilidade técnica da equipe. Eles diagnosticaram o problema da minha TV de forma rápida e precisa, algo que outras assistências tinham falhado em fazer. Além disso, eles explicaram claramente todas as etapas do processo de reparo e me mantiveram informado durante todo o processo.

O resultado final foi simplesmente incrível. Minha TV foi consertada de forma eficiente e agora esta funcionando melhor do que nunca. Estou extremamente grato à Smat TV por sua dedicação em resolver meu problema, mesmo quando outras assistências falharam.

Se você estiver enfrentando problemas com sua TV, não hesite em entrar em contato com eles. Sua experiência técnica e atendimento ao cliente excepcional farão toda a diferença.

Obrigado novamente, por seu excelente trabalho e por devolver a alegria à minha sala de estar!"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Onilatan Moreira"
            depoimento="Ótimo atendimento, serviço de qualidade e transparência no serviço realizado, pegaram a tv em casa orçamento sem custo algum fizeram o serviço em três dias úteis."
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Jaqueline Rocha"
            depoimento="Super atenciosos e conseguiram resolver o meu problema por telefone mesmo só me orientando. Nota 10."
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Gilson Helpa"
            depoimento="O conserto da minha TV custou um quarto do orçamento da oficina especializada indicada pelo seguro. Serviço bom, barato, com garantia e atendentes super atenciosos. Indico."
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardDepoiments
            nome="Vilmar Machado dos Santos"
            depoimento="Amei Ótimo Atendimento
Pós trabalho feito também tiraram minhas dúvidas
Continuem assim para melhor...
DEUS abençoe sempre vocês"
          />
        </Carousel.Slide>
      </Carousel>
    </Slider>
  );
};
