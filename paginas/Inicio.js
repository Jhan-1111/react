import React from 'react';
import '../App.css';

const Inicio = () => {
  const actores = [
    {
      id: 1,
      nombre: 'Juan Carlos Aduviri',
      imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcG6w8wP2oRqazrumcjoaQCYjy0e3q-CjmjV8SBt67wSjQOZ8tsPLnZWTUTt7lwVEaeF8XY-O70MBVO02vhNrePQeat9I7LdAn5qUsP_oMzyXJwzu8bJzzoVK2hXmduSEZpIzU2Vlelg/s1600/aduviri.jpg',
      peliculaFamosa: 'También la lluvia (2010)',
      biografia: 'Actor, camarógrafo y productor boliviano. Nominado a los premios Goya como Mejor Actor Revelación por "También la lluvia". Ganador del premio a Mejor Actor en el festival europeo de cine "Les Arcs". Domina la lengua Aymara y estudió mímica con Philippe Bizo.',
      logros: [
        'Protagonista de "Bolishopping" (2013)',
        'Actor en "Cuerpo de Elite" (2016)',
        'Participación en "Oro" de Agustín Díaz Yanes',
        'Embajador Boliviano, Alteño del Arte'
      ]
    },
    {
      id: 2,
      nombre: 'Carla Ximena Herrera',
      imagen: 'https://eldiariony.com/wp-content/uploads/sites/2/2015/08/im_20130710_entretenimiento_130719912.jpg?resize=1316,740&quality=80',
      peliculaFamosa: 'El Pantera (Temporada 3)',
      biografia: 'Actriz, modelo y cantante boliviana radicada en México. Conocida por sus participaciones en telenovelas mexicanas como "La madrastra", "Corazones al límite" y "Hasta el fin del mundo".',
      logros: [
        'Interpretó a Rosaura en "El Pantera"',
        'Reconocida por su versatilidad actoral',
        'Carrera internacional en México'
      ]
    },
    {
      id: 3,
      nombre: 'Milton Cortez',
      imagen: 'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2020/2/15/viviana_perez_gavilan.jpg?itok=9vF914c_',
      peliculaFamosa: 'Variadas producciones',
      biografia: 'Cantautor y actor boliviano con carrera internacional. Reside en México desde 1996 donde ha desarrollado una exitosa carrera artística combinando música y actuación.',
      logros: [
        'Artista multifacético (canto y actuación)',
        'Carrera internacional en México',
        'Reconocido en la comunidad artística boliviana'
      ]
    }
  ];

  return (
    <div className="contenido">
      <h2>Actores Bolivianos Destacados Internacionalmente</h2>
      <p className="subtitulo">Artistas que han llevado el talento boliviano más allá de las fronteras</p>
      
      <div className="contenedor-actores-horizontal">
        {actores.map((actor) => (
          <div className="tarjeta-actor" key={actor.id}>
            <img 
              src={actor.imagen} 
              alt={`Retrato de ${actor.nombre}`}
              className="imagen-actor"
            />
            <h3 className="nombre-actor">{actor.nombre}</h3>
            <p className="obra-destacada"><strong>Obra destacada:</strong> {actor.peliculaFamosa}</p>
            <p className="biografia">{actor.biografia}</p>
            <div className="logros-actor">
              <h4>Logros destacados:</h4>
              <ul>
                {actor.logros.map((logro, index) => (
                  <li key={index}>{logro}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;