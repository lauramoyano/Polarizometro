import React, { useEffect, useState } from 'react';
import { Container, Logo, Rota, BotaoLogin, Conjunto, Itens, MobileNav } from "./style";
import Hamburger from "../../../assets/images/icon-hamburger.svg";
import Close from "../../../assets/images/icon-close.svg";
import logo from "./../../../assets/images/favicon.icon.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);

  const alternar = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navToggle]);

  return (
    <Container>
       <Link to="/">
        {!navToggle && <Logo src={logo} alt="promueva" />}
      </Link>
      <MobileNav navToggle={navToggle}>
        <button onClick={alternar}>
          {navToggle ? (
            <i>
              <img src={Close} alt="Fechar" />
            </i>
          ) : (
            <i>
              <Logo src={Hamburger} alt="abrir" />
            </i>
          )}
        </button>
        {navToggle && (
          <Itens>
            <Link to="/features">
              <Rota>Features</Rota>
            </Link>

            <Link to="/contact">
              <Rota>Contact</Rota>
            </Link>

            <BotaoLogin>
              <Link to="/login">
                <Rota>Login</Rota>
              </Link>
            </BotaoLogin>
          </Itens>
        )}
      </MobileNav>
      {!navToggle && ( // Renderizar Conjunto solo cuando navToggle es falso
        <Conjunto navToggle={navToggle}>
         
          <Itens>
            <Link to="/features">
              <Rota>Features</Rota>
            </Link>
            <Link to="/contact">
              <Rota>Contact</Rota>
            </Link>
            <BotaoLogin>
              <Link to="/login">
                <Rota>Login</Rota>
              </Link>
            </BotaoLogin>
          </Itens>
        </Conjunto>
      )}
    </Container>
  );
}
