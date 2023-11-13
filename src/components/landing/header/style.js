import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${(props) => props.theme.Dark};
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  justify-content: space-between;
  position: fixed; /* Agrega esta línea */
  width: 100%; /* Opcional: Asegúrate de que el encabezado ocupe toda la anchura de la pantalla */
  z-index: 1000; /* Opcional: Ajusta la superposición si es necesario */
`;

export const Itens = styled.div`
  margin-top: 2rem;
  margin-right: 2rem;

`;



export const Rede = styled.a``;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: hsla(229, 31%, 21%, 0.951);
    position: absolute;
    z-index: 20;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    display: ${({ navToggle }) => (navToggle ? "flex" : "none")};
  }
`;



export const Logo = styled.img`
  margin: 0.5rem;
  margin-left: 1rem;
  max-width: 100px;

  @media (max-width: 800px) {
    max-width: 80px; // Adjust the max-width for smaller screens
  }
`;


export const Rota = styled.text`
  margin: 1.4rem;
  color: ${(props) => props.theme.White};
  @media (max-width: 800px) {
    color: ${(props) => props.theme.White};
    margin: 2rem;
    display: flex;
    border-top: 1px solid ${(props) => props.theme.White};
    padding: 20px 3rem;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  :hover {
    color: ${(props) => props.theme.Grayish};
  }
`;

export const BotaoLogin = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Grayish};
  :hover {
    background: ${(props) => props.theme.White};
    border: 2px solid ${(props) => props.theme.Dark};
    color: ${(props) => props.theme.Dark};
  }
  @media (max-width: 800px) {
    background: transparent;
    :hover {
      background: none;
    }
  }
`;

export const MobileNav = styled.div`
  display: none;
  button {
    background-color: transparent;
    position: relative;
    z-index: 100;
  }
  i {
    img {
      max-width: 20px; // Adjust the max-width for the hamburger icon
    }
    color: ${({ navToggle }) => (navToggle ? "hsl(229, 31%, 21%)" : "black")};
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column; /* Cambia flex-direction a column */
    align-items: center; /* Centra los elementos verticalmente */
    padding: 1rem; /* Agrega un espacio entre los elementos */
  }
`;


