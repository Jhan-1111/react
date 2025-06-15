import React from 'react';
import '../App.css';  // Ruta correcta

const BarraNavegacion = ({ setPaginaActual }) => {
  return (
    <nav className="barra-navegacion">
      <button onClick={() => setPaginaActual('inicio')}>Principal</button>
      <button onClick={() => setPaginaActual('peliculas')}>Películas</button>
    </nav>
  );
};

export default BarraNavegacion;  // Usar export default