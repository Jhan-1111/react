import React, { useState } from 'react';
import ModalPelicula from '../componentes/ModalPelicula';
import '../App.css';

const Peliculas = () => {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const peliculas = [
    {
      id: 1,
      titulo: 'Sena/Quina, la inmortalidad del cangrejo',
      director: 'Paolo Agazzi',
      año: 2005,
      duracion: '1h 31min',
      genero: 'Drama',
      resumen: 'Justo es un hombre inocente en Tarija, Bolivia, que solo quiere casarse con la chica que ama, Casilda, comprando una máquinaria, pero es engañado y pierde todo su dinero antes incluso de comprar su oportunidad de casarse con Casilda.',
      elenco: 'Elenco no especificado',
      calificacion: 'IMDb: No disponible',
      imagen: 'https://pics.filmaffinity.com/sena_quina_la_inmortalidad_del_cangrejo-144510793-large.jpg'
    },
    {
      id: 2,
      titulo: 'Mi Socio',
      director: 'Paolo Agazzi',
      año: 1982,
      duracion: '1h 40min',
      genero: 'Comedia dramática',
      resumen: 'Un camionero colla (Vito) y un niño lustrabotas camba (Brillo) emprenden un viaje por carretera a través de Bolivia, forjando una inesperada y conmovedora amistad. La película explora temas de superación personal, amistad y amor, destacando por su humor y crítica social.',
      elenco: 'Vito: Jorge Ortiz, Brillo: Luis Bredow',
      calificacion: 'IMDb: 7.5/10',
      imagen: 'https://www.bfdistribution.cl/wp-content/uploads/2023/05/afiche-web_MI-SOCIO2.jpg'
    },
    {
      id: 3,
      titulo: '¿Quién mató a la llamita blanca?',
      director: 'Rodrigo Bellott',
      año: 2006,
      duracion: '1h 30min',
      genero: 'Comedia negra',
      resumen: 'Jacinto y Domitila, una pareja de indígenas de El Alto, se involucran en el narcotráfico transportando cocaína de La Paz a Brasil. Durante su viaje por la selva y montañas, son perseguidos por oficiales corruptos mientras cuestionan su futuro como criminales.',
      elenco: 'Jacinto: Reynaldo Pacheco, Domitila: Delfina Paredes',
      calificacion: 'IMDb: 7.1/10',
      imagen: 'https://venbo.shop/wp-content/uploads/2021/09/dvd_llamitablanca_2109_1.jpg'
    },
    {
      id: 4,
      titulo: 'Chuquiago',
      director: 'Antonio Eguino',
      año: 1977,
      duracion: '1h 50min',
      genero: 'Drama social',
      resumen: 'Cuatro historias paralelas en La Paz muestran la contrastante realidad social entre riqueza y pobreza, siguiendo a un niño campesino, un empleado público, la hija de un empresario y un joven aymara que busca emigrar a Estados Unidos.',
      elenco: 'Reparto coral',
      calificacion: 'IMDb: No disponible',
      imagen: 'https://pics.filmaffinity.com/chuquiago-606947725-large.jpg'
    },
    {
      id: 5,
      titulo: 'La Bicicleta de los Huanca',
      director: 'Verónica Córdova',
      año: 2007,
      duracion: '1h 30min',
      genero: 'Comedia',
      resumen: 'En Pucarani, cerca de La Paz, dos familias rivales (Huanca y Choque) deciden resolver su conflicto con una carrera de bicicletas. Eleuterio Huanca, un bebedor, hace competir a su prima Remedios, una mujer fuerte, en su lugar.',
      elenco: 'Remedios: Magaly Solier, Eleuterio: Dino García',
      calificacion: 'IMDb: 6.8/10',
      imagen: 'https://pics.filmaffinity.com/la_bicicleta_de_los_huanca-195422601-large.jpg'
    }
  ];

  return (
    <div className="pagina-peliculas">
      <h2>Películas Bolivianas Destacadas</h2>
      <p className="subtitulo-peliculas">Haz clic en cada película para ver más detalles</p>
      
      <div className="contenedor-botones-peliculas">
        {peliculas.map(pelicula => (
          <button
            key={pelicula.id}
            className="boton-pelicula"
            onClick={() => setPeliculaSeleccionada(pelicula)}
          >
            {pelicula.titulo} ({pelicula.año})
          </button>
        ))}
      </div>

      {peliculaSeleccionada && (
        <ModalPelicula 
          pelicula={peliculaSeleccionada}
          onClose={() => setPeliculaSeleccionada(null)}
        />
      )}
    </div>
  );
};

export default Peliculas;