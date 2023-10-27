import React, { useState } from 'react';
import {
  Container,
  Informacao,
  Paragrafo,
  Titulo,
  Ilustracao,
  Card,
  TituloPrincipal,
  ParagrafoPrincipal,
  Menu,
  Texto,
} from "./style";
import ilustracao1 from "./../../../assets/images/illustration-features-tab-1.svg";
import ilustracao2 from "./../../../assets/images/illustration-features-tab-2.svg";
import ilustracao3 from "./../../../assets/images/illustration-features-tab-3.svg";
import Header from "../header";

export default function Features() {
  const [opcao, setOpcao] = useState("");

  return (
    <Container>
      <Header/>
      <TituloPrincipal>Features</TituloPrincipal>
      <ParagrafoPrincipal>
        We are an application that allows you to analyze polarization using various measures and methods to obtain reliable data
      </ParagrafoPrincipal>

      <Menu>
        <p onClick={() => setOpcao("1")}>Measurements</p>
        <p onClick={() => setOpcao("2")}>Graphs</p>
        <p onClick={() => setOpcao("3")}>Surveys</p>
      </Menu>

      <div>
        {opcao === "1" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao1} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>Different Measurements</Titulo>
              <Paragrafo>
                Different polarization measures will be implemented, enabling analysis for specific topics
              </Paragrafo>
              <Informacao href="/">More Info</Informacao>
            </Texto>
          </Card>
        ) : opcao === "2" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao2} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>Graphs</Titulo>
              <Paragrafo>
                Descriptive graphics that allow modeling polarization and how opinions vary, respectively
              </Paragrafo>
              <Informacao href="/">More Info</Informacao>
            </Texto>
          </Card>
        ) : (
          <Card>
            <Ilustracao>
              <img src={ilustracao3} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>Create Surveys</Titulo>
              <Paragrafo>
                Easily share your surveys and collecting data for analysis. Create a shareable link that you can send at the click of a button
              </Paragrafo>
              <Informacao href="/">More Info</Informacao>
            </Texto>
          </Card>
        )}
      </div>
    </Container>
  );
}
