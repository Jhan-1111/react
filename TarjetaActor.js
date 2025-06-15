import React from 'react';

const TarjetaActor = ({ actor }) => {
  return (
    <article className="tarjeta-actor">
      <div className="contenedor-imagen">
        <img 
          src={actor.imagen} 
          alt={`Retrato de ${actor.nombre}`} 
          className="imagen-actor"
        />
      </div>
      <div className="contenido-tarjeta">
        <h3 className="nombre-actor">{actor.nombre}</h3>
        <p className="pelicula-destacada">
          <span className="etiqueta">Obra destacada:</span> {actor.peliculaFamosa}
        </p>
        <p className="biografia">{actor.biografia}</p>
      </div>
    </article>
  );
};

export default TarjetaActor;