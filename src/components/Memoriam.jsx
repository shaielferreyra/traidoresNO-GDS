import React from 'react';
import { Heart, Music } from 'lucide-react';
import './Memoriam.css';

// Importar foto de Ulises (colocar la imagen en src/assets/images/memoriam/)
import ulisesPhoto from '../assets/images/memoriam/ulises-espinoza.jpg';

const Memoriam = () => {
  return (
    <section id="memoriam" className="memoriam">
      <div className="memoriam-container">
        <div className="memoriam-header">
          <Music className="memoriam-icon" size={40} />
          <h2 className="memoriam-title">En Memoria</h2>
          <div className="memoriam-divider"></div>
        </div>

        <div className="memoriam-content">
          <div className="memoriam-photo-container">
            <div className="photo-frame">
              <img 
                src={ulisesPhoto} 
                alt="Ulises Espinoza" 
                className="memoriam-photo"
              />
              <div className="photo-veil"></div>
            </div>
          </div>

          <div className="memoriam-info">
            <h3 className="memoriam-name">Ulises Espinoza</h3>
            <p className="memoriam-date">04 de Noviembre, 2025</p>
            <Heart className="heart-icon" size={24} />
          </div>

          <div className="memoriam-tribute">
            <p className="tribute-text">
              Con un nudo en la garganta y un dolor inmenso, despedimos a nuestro hermano del alma, 
              <strong> Ulises Espinoza</strong>.
            </p>
            
            <p className="tribute-text">
              Se fue de gira el "Gordito" que todos quieren, el amigo del que nadie jamás habló mal, 
              un tipazo que siempre estaba dispuesto para alegrar el día a cualquiera con sus bromas permanentes. 
              Hijo, hermano, padre y amigo del alma.
            </p>

            <p className="tribute-text">
              Durante el tiempo que compartimos juntos, Ulises fue mucho más que nuestro manager: 
              fue el pilar que sostuvo cada sueño, cada proyecto, cada paso que dimos como banda. 
              Su pasión por la música, su dedicación incansable y su amor por el rock fueron la fuerza 
              que nos impulsó a seguir adelante en los momentos más difíciles.
            </p>

            <p className="tribute-text">
              Fomentó la cultura del rock durante toda su vida, no solo con palabras, sino con acciones. 
              Nos enseñó que la música se produce con la mente, pero se disfruta con el corazón. 
              Esa frase, que tanto repetía, se convirtió en nuestro lema y seguirá guiando nuestro camino.
            </p>

            <blockquote className="tribute-quote">
              <p>"Se produce con la mente, se disfruta con el corazón"</p>
              <cite>— Ulises Espinoza</cite>
            </blockquote>

            <p className="tribute-text final-words">
              No te vamos a olvidar nunca, hermano. Tu recuerdo vivirá en cada acorde, 
              en cada show, en cada momento que compartamos con nuestra música. 
              Gracias por creer en nosotros, por impulsarnos, por ser nuestro guía.
            </p>

            <p className="tribute-signature">
              Hasta siempre, Ulises.<br/>
              Descansa en paz.
            </p>
          </div>

          <div className="memoriam-candles">
            <div className="candle"></div>
            <div className="candle"></div>
            <div className="candle"></div>
          </div>
        </div>

        <div className="memoriam-footer">
          <p className="footer-text">
            Su legado permanecerá por siempre en nuestros corazones y en la música que creamos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Memoriam;