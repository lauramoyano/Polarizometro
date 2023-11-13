import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;

  img {
    margin-left: auto;
    margin-right: auto;
    width: 15rem;

    @media (max-width: 800px) {
      width: 10rem;
    }
  }

  input {
    width: 97%;
    height: 2rem;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
  }
`;

export const Title = styled.h4`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.White};
`;

export const Button = styled.button`
  width: 20rem;
  height: 2rem;
  border-radius: 5px;
  margin: 5px;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};

  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;

export const SignInButton = styled.button`
  width: 20rem;
  height: 2rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};

  :hover {
    color: ${(props) => props.theme.Blue};
    background: ${(props) => props.theme.Green};
  }
`;

export const Field = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 5px;
`;

export const StyledBox = styled.form`
  background: ${(props) => props.theme.Dark};
  max-width: 800px;
  padding: 2rem;
  border-radius: 20px;
`;
