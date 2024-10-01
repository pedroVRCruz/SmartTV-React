import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-white-secundary);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* max-width: 1150px; */
  /* overflow: hidden; */

  .fixo{
    position: fixed;
    bottom: 200px;
    right: 150px;
    z-index: 999; 
    img{
      height: 64px;
      width: 64px;
    }
  }

  .button {
    display: flex;
    width: 550px;
    height: 100px;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    background: var(--Azul-claro, #23a4dd);
    margin-top: 70px;
  }

  a {
    :hover {
      background-color: var(--Azul-escuro, #1c465f);
    }
  }
  .marcasMobile{
    display:none;
  }

  .carroselProblemas {
    text-align: left;
    margin-top: 130px;

    .titulo {
      color: var(--Branco, #fff);
      font-family: "Century Gothic";
      font-size: 32px;
      font-weight: 700;
      line-height: 46px;
      margin-bottom: 20px;
    }
    }
  }

  .buscaentrega {
    margin-top: 130px;

    .visible {
    .slider{
      display: flex;
      flex-direction: row;
      gap: 20px;
      height: 241px;
    }


      .passo1 {
        max-width: 368px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
      }

      .passo2 {
        max-width: 368px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
      }

      .passo3 {
        max-width: 368px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }

  .about {
    max-width: 1150px;
    text-align: left;
    margin-top: 130px;
    margin-bottom: 130px;

    .title {
      color: var(--Azul-claro, #23a4dd);
      font-size: 32px;
      font-weight: 700;
    }
    .text {
      font-size: 20px;
    }
  }

  .nossaestrutura {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1150px;
  margin-bottom: 130px;

  .content {
    max-width: 790px;
    text-align: left;

    .title {
      color: var(--Azul-claro, #23a4dd);
      font-size: 32px;
      font-weight: 700;
    }

    .text {
      font-size: 20px;
    }
  }

  .visible {
    width: 317px;
    overflow: hidden;
  
    .images {
      display: flex;
      flex-direction: row;
      animation-name: pausedSlider;
      animation-duration: 15s;
      animation-iteration-count: infinite;

      @keyframes pausedSlider {
        0% {
          transform: translateX(0px);
        }
        10% {
          transform: translateX(0px);
        }
        20% {
          transform: translateX(calc(-317px * 1));
        }
        30% {
          transform: translateX(calc(-317px * 1));
        }
        40% {
          transform: translateX(calc(-317px * 2));
        }
        50% {
          transform: translateX(calc(-317px * 2));
        }
        60% {
          transform: translateX(calc(-317px * 3));
        }
        70% {
          transform: translateX(calc(-317px * 3));
        }
        80% {
          transform: translateX(calc(-317px * 4));
        }
        90% {
          transform: translateX(calc(-317px * 4));
        }
        100% {
          transform: translateX(calc(-317px * 5));
        }
      }

      .img {
        height: 257px;
        width: 317px;
      }
    } 
  } 
} 


  .contato {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 130px;
  margin-bottom: 130px;

  }
  

//tablet
@media (max-width: 991px) {
.body{
  max-width: 700px;
  overflow-x:hidden;
}

  .fixo{
    position: fixed;
    bottom: 160px !important;
    right: 50px !important;

    img{
      height: 46px !important;
      width: 46px !important;
    }
  }

.FraseIA {
  flex-direction: column !important;
  align-self: center !important;
}

#marcasdesk {
  display: none;
}

.marcasMobile {
  display: flex !important;
  flex-direction: column;
  height: 41px;
  width: 100%;
  overflow: hidden;

  .visible {
    display: flex;
    max-width: 100%;
    overflow-x: hidden;
    justify-content: flex-start; 
    
    .slider {
      display: flex;
      gap: 15px;
      flex-direction: row;
      flex-wrap: nowrap;
      white-space: nowrap;

      animation-name: marcasSlider;
      animation-iteration-count: infinite;
      animation-timing-function:linear;
      animation-duration: 30s;

      img {
        height: 41px;
        width: auto;
        flex-shrink: 0;
      }
    }
  }
}

@keyframes marcasSlider {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-984.5px)); }
}

a {
  display: flex !important;
  flex-direction: column !important;
  align-self: center !important;
}

.contato {
  flex-direction: column !important;
  gap: 80px !important;
}

.carroselProblemas{
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.buscaentrega {
  .visible {
    max-width: 281px;
    max-height: 241px;
    overflow: hidden;
    display: flex !important;
    flex-direction: column !important;
    align-self: self-start !important;

    .slider {
      position:relative;
      display: block;

 }
    .passo1{
      position:absolute;  
      animation-name: passo1-animation;
      animation-duration: 14s;
      animation-iteration-count: infinite;
      @keyframes passo1-animation { 0% {transform:translateX(-100%);} 10% {transform:translateX(0%);} 20% {transform:translateX(0%);} 30% {transform:translateX(100%);} 40% {transform:translateX(100%);} 50% {transform:translateX(100%);} 60% {transform:translateX(100%);} 70% {transform:translateX(100%);} 80% {transform:translateX(100%);} 90% {transform:translateX(100%);} 100% {transform:translateX(100%);}}

    }
    .passo2{


      position:absolute;
      animation-name: passo2-animation;
      animation-duration: 14s;
      animation-iteration-count: infinite;
      @keyframes passo2-animation { 0% {transform:translateY(-100%);} 10% {transform:translateY(-100%);} 20% {transform:translateY(-100%);} 30% {transform:translateY(-100%);} 40% {transform:translateY(0%);} 50% {transform:translateY(0%);} 60% {transform:translateY(110%);} 70% {transform:translateY(110%);} 80% {transform:translateY(110%);} 90% {transform:translateY(110%);} 100% {transform:translateY(110%);}}

    }
    .passo3{
      animation-name: passo3-animation;
      animation-duration: 14s;
      animation-iteration-count: infinite;
      @keyframes passo3-animation { 0% {transform:translateX(100%);} 10% {transform:translateX(100%);} 20% {transform:translateX(100%);} 30% {transform:translateX(100%);} 40% {transform:translateX(100%);} 50% {transform:translateX(100%);} 60% {transform:translateX(100%);} 70% {transform:translateX(0%);} 80% {transform:translateX(0);} 90% {transform:translateX(-100%);} 100% {transform:translateX(-100%);}}

    }

  }
}

.about {
    max-width: 700px;
    text-align: left;
    margin-top: 80px;
    margin-bottom: 80px;
    .title {
      font-size: 25px;
    }
    .text {
      font-size: 16px;
    }
  }
  .nossaestrutura {
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    max-width: 700px;
    margin-bottom: 130px;
    gap: 20px;
    .content {
      .title {
        font-size: 25px;
      }
      .text {
        font-size: 16px;
      }
    }
  }
  .contato{
    margin-bottom: 130px;
  }
}
  //mobile
  @media (max-width: 767px) {
    .fixo{
    position: fixed;
    bottom: 150px !important;
    right: 50px !important;
    height: 36px ;
    width: 36px ;
    img{
      height: 36px !important ;
      width: 36px !important;
    }      
    }

    .button{
      font-size:25px !important;
      width:316px !important;
      height:58px !important;
    }

    .carroselProblemas{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  .titulo{
  font-size: 20px !important ;}

}

    .about {
    max-width: 317px;
    margin-top: 80px;
    margin-bottom: 80px;

    .title {
      color: var(--Azul-claro, #23a4dd);
      font-size: 20px;
      font-weight: 700;
    }
    .text {
      font-size: 14px;
    }
  }
    .nossaestrutura {
    max-width: 317px;
    margin-bottom: 80px;

    .title {
      font-size: 20px !important;
      font-weight: 700;
    }
    .text {
      font-size: 14px !important;
    }
  }

  }


  `;
