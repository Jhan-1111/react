import React from 'react';
import '../App.css';

const ModalPelicula = ({ pelicula, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-pelicula">
        <button className="boton-cerrar" onClick={onClose}>×</button>
        
        <div className="modal-contenido">
          <div className="modal-imagen">
            <img src={pelicula.imagen} alt={pelicula.titulo} />
          </div>
          
          <div className="modal-texto">
            <h2>{pelicula.titulo} ({pelicula.año})</h2>
            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Duración:</strong> {pelicula.duracion}</p>
            <p><strong>Género:</strong> {pelicula.genero}</p>
            <p><strong>Elenco principal:</strong> {pelicula.elenco}</p>
            <p><strong>Calificación:</strong> {pelicula.calificacion}</p>
            
            <div className="modal-resumen">
              <h3>Sinopsis</h3>
              <p>{pelicula.resumen}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPelicula;