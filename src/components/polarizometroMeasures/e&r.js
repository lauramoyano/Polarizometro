import React, { useState } from 'react';
import {
  Container, // Agrega aquí los estilos que quieras aplicar
  Titulo,
} from './style'; // Importa tus estilos desde el archivo style.js

function PolarizationForm() {
  const [histogramData, setHistogramData] = useState('');
  const [alpha, setAlpha] = useState('');
  const [beta, setBeta] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos al backend (Flask)
      const response = await fetch('/calcular', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ histogramData, alpha, beta }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          Datos del Histograma (separados por comas):
          <input
            type="text"
            value={histogramData}
            onChange={(e) => setHistogramData(e.target.value)}
          />
        </label>
        <label>
          Alpha:
          <input
            type="number"
            value={alpha}
            onChange={(e) => setAlpha(e.target.value)}
          />
        </label>
        <label>
          Beta:
          <input
            type="number"
            value={beta}
            onChange={(e) => setBeta(e.target.value)}
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {result && (
        <div>
          <Titulo>Resultados:</Titulo>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </Container>
  );
}

export default PolarizationForm;
