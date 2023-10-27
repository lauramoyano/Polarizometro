import React from 'react';
import { Container, Logo, Rota, Conjunto, Conjunto2, Rede } from "./style";
import logo from "./../../../assets/images/favicon.icon.png";
import facebook from "./../../../assets/images/icon-facebook.svg";
import twitter from "./../../../assets/images/icon-twitter.svg";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Container>
      <Conjunto>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>

        <Link to="/features">
          <Rota>Features</Rota>
        </Link>

        <Link to="/contact">
          <Rota>Contact</Rota>
        </Link>
      </Conjunto>

      <Conjunto2>
        <Rede href="https://pt-br.facebook.com/" target="_blank">
          <Logo src={facebook} alt="logo" />
        </Rede>

        <Rede href="https://twitter.com/" target="_blank">
          <Logo src={twitter} alt="logo" />
        </Rede>
      </Conjunto2>
    </Container>
  );
}
