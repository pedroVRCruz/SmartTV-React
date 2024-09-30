import { Slider } from "../src/styles/CarrosselProblemas";
import { CardProblemas } from "./CardProblemas";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
// import { useMediaQuery } from '@mantine/hooks';


export const CarrosselProblemas = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));


  return (
    <Slider>
      <Carousel
        align={ "start"}
        slideGap="md"
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <CardProblemas
            titulo="Com som e sem imagem"
            descricao="Pode ser causado por problemas nos barramentos de led, tela LCD/LED, na placa T-con ou na placa-mãe. A verificação e substituição dessas peças é necessária para resolver o problema."
            imagem="src/assets/problema1.svg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardProblemas
            titulo="TV não liga"
            descricao="Uma falha comum que pode ser causada por problemas na fonte de alimentação ou defeito na placa-central. Requer verificação dos componentes internos e possíveis substituições."
            imagem="src/assets/problema2.svg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardProblemas
            titulo="Imagem azulada"
            descricao="Possivelmente os LEDs com defeito devido ao desgaste das peças.Nossa empresa realiza a troca completa do kit de LEDs para garantir a durabilidade e o funcionamento adequado do aparelho, evitando problemas futuros que podem ocorrer com a substituição parcial dos componentes."
            imagem="src/assets/problema3.svg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardProblemas
            titulo="Problemas na Conexão Wi-Fi"
            descricao="Problemas no roteador, configurações de rede incorretas ou falhas no módulo Wi-Fi da TV são as causas mais comuns. Requer verificação da rede e possível substituição do módulo Wi-Fi ou até mesmo placa principal."
            imagem="src/assets/problema4.svg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardProblemas
            titulo="TV com partes da imagem escura"
            descricao="Esse defeito é mais comum em modelos da Samsung a partir de 2019, geralmente exigindo a troca dos barramentos de LED e do acrílico. Nossa empresa é especialista nesses modelos, garantindo um reparo com qualidade impecável."
            imagem="src/assets/problema5.svg"
          />{" "}
        </Carousel.Slide>
        <Carousel.Slide>
          <CardProblemas
            titulo="TV não liga após raio"
            descricao="Geralmente, isso ocorre após uma descarga elétrica que, devido à alta tensão, acaba afetando componentes internos da TV. Nossa equipe realiza uma análise detalhada para identificar a peça danificada e realiza o reparo corretamente."
            imagem="src/assets/problema6.svg"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardProblemas
            titulo="Nenhuma dessas opções?"
            descricao="Caso não saiba exatamente qual é o problema da sua tv, traga que iremos fazer uma avaliação!"
            imagem="src/assets/problema7.svg"
          />
        </Carousel.Slide>
      </Carousel>
    </Slider>
  );
};
