import React from 'react';
import './Historia.css';

const Historia = () => {
  const testimonials = [
    { 
      text: '"Una banda que redefine el rock alternativo argentino con su sonido único y letras profundas."', 
      author: 'Rock Magazine' 
    },
    { 
      text: '"Traidores NO trae la energía que el rock necesitaba. Imperdibles en vivo."', 
      author: 'La Nación' 
    },
    { 
      text: '"Su último álbum es una obra maestra del género. Cada canción cuenta una historia."', 
      author: 'Rolling Stone Argentina' 
    }
  ];

  return (
    <section id="historia" className="historia">
      <h2 className="section-title">NUESTRA HISTORIA</h2>
      
      <div className="historia-content">
        <div className="historia-text">
          <p>
            Traidores NO nace en 2017 en el underground porteño, con la misión de crear un sonido que 
            fusione la crudeza del rock alternativo con letras que reflejan la realidad social contemporánea.
          </p>
          <p>
            Formada por músicos experimentados de la escena independiente, la banda rápidamente se ganó 
            el reconocimiento por sus enérgicas presentaciones en vivo y su compromiso con la autenticidad musical.
          </p>
          <p>
            Con dos álbumes de estudio y decenas de shows en las principales salas del país, Traidores NO 
            continúa su camino consolidándose como una de las propuestas más interesantes del rock argentino actual.
          </p>
        </div>

        <div className="testimonials">
          <h3>Lo que dicen de nosotros</h3>
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-text">{test.text}</p>
              <p className="testimonial-author">— {test.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Historia;