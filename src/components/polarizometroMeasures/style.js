import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin-top: 20px;
`;

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }

  button {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
`;

export const ResultContainer = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  pre {
    font-size: 16px;
    background-color: #f5f5f5;
    padding: 10px;
    border: 1px solid #ccc;
  }
`;

export const Titulo = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333; /* Personaliza el color según tu diseño */
`;
