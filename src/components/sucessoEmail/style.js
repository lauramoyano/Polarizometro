import styled from "styled-components";

// En SucessoEmail
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px; /* Añade margen izquierdo para dar espacio a la barra lateral */

  @media (max-width: 800px) {
    margin-left: 0; /* Restablece el margen en dispositivos móviles */
  }
`;

export const PerguntasCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Sucesso = styled.h4`
  background: ${(props) => props.theme.Green};
  color: ${(props) => props.theme.White};
  padding: 0.6rem;
  margin: 2rem;
  width: 16rem;
  transition: 0.5s;
  :hover {
    background: ${(props) => props.theme.GreenDark};
  }
`;
