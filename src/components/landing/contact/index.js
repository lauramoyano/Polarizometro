import React from 'react';
import {
  Container,
  Enviar,
  Email,
  Formulario,
  Titulo,
} from "./style";
import Header from "../header";

export default function Contact() {
  return (
    <Container>
      <Header/>
      <Titulo>Stay up-to-date with what we’re doing</Titulo>
      <Formulario action="/sucessoEmail">
        <Email
          type="text"
          required
          placeholder="Enter your email address"
          id="email"
          className="input"
        />
        <Enviar>Contact Us</Enviar>
      </Formulario>
    </Container>
  );
}
