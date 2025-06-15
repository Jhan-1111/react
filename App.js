import React, { useState } from 'react';
import Encabezado from './componentes/Encabezado';
import BarraNavegacion from './componentes/BarraNavegacion';
import Inicio from './paginas/Inicio';
import PiePagina from './componentes/PiePagina';
import Peliculas from './paginas/Peliculas';
import './App.css';

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  return (
    <div className="app">
      <Encabezado />
      <BarraNavegacion setPaginaActual={setPaginaActual} />
      
      <div className="contenido">
        {paginaActual === 'inicio' ? <Inicio /> : <Peliculas />}
      </div>
      
      <PiePagina />
    </div>
  );
}

export default App;