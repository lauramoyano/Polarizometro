import React from 'react';
import {
  Links,
  Container,
  Chrome,
  Firefox,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
} from "./style";
import imagem from "./../../../assets/images/polarizacion.jpg";

export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>Polarizometro</Titulo>
          <Paragrafo>
            In a world where information flows faster than ever, understanding polarization is essential. Introducing the Polarimeter, an innovative web/mobile application designed to provide you with a powerful tool that allows you to measure polarization caused by specific events
          </Paragrafo>
          <Links>
            <Chrome href="https://www.google.com/intl/pt-BR/chrome/" target="_blank">
              Get it on Chrome
            </Chrome>
            <Firefox href="https://www.mozilla.org/pt-BR/firefox/new/" target="_blank">
              Get it on Firefox
            </Firefox>
          </Links>
        </Textos>
        <ColunaImagem>
          <img src={imagem} alt="bookmark" />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}
