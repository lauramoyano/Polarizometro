import styled from 'styled-components';

export const Container = styled.nav`
  background-color: ${(props) => props.theme.Dark};
  color: ${(props) => props.theme.White};
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  justify-content: space-between;
  position: fixed; /* Agrega esta línea */
  height: 100%; /* Opcional: Asegúrate de que el encabezado ocupe toda la anchura de la pantalla */
  z-index: 1000; /* Opcional: Ajusta la superposición si es necesario */
`;

export const Sidebar = styled.div`
  background-color: ${(props) => props.theme.Dark};
  color: ${(props) => props.theme.White};
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: width 0.3s; /* Agrega una transición para el ancho */

  @media (max-width: 800px) {
    display: none;
  }
`;



export const Rota = styled.div`
  padding: 10px;
  margin-top:10px;
  color: ${(props) => props.theme.White};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.Grayish};
  }
`;

export const Logo = styled.img`
  margin: 0.5rem;
  margin-left: 1rem;
  max-width: 100px;
`;

export const MobileNav = styled.div`
  display: none;
  button {
    background-color: transparent;
    position: relative;
    z-index: 100;
  }
  i {
    font-size: 1.4rem;
    color: ${({ navToggle }) => (navToggle ? "hsl(229, 31%, 21%)" : "black")};
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column; /* Cambia flex-direction a column */
    align-items: center; /* Centra los elementos verticalmente */
    padding: 1rem; /* Agrega un espacio entre los elementos */
  }
`;


export const Itens = styled.div`
  margin-left: 10px;
  margin-top: 2rem;
  text-align: left;

`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    background-color: hsla(229, 31%, 21%, 0.951);
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    display: ${({ navToggle }) => (navToggle ? 'flex' : 'none')};
  }
`;
