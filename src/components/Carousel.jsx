import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

// Importar imágenes y video local
import carouselVideo from '../assets/videos/carousel-video.mp4';
import slide1 from '../assets/images/carousel/slide1.jpg';
import slide2 from '../assets/images/carousel/slide2.jpg';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  
  const slides = [
    { 
      type: 'video', 
      src: carouselVideo,
      alt: 'Video de la banda'
    },
    { 
      type: 'image', 
      src: slide1,
      alt: 'Banda en vivo'
    },
    { 
      type: 'image', 
      src: slide2,
      alt: 'Concierto'
    }
  ];

  const next = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, idx) => (
          <div 
            key={idx} 
            className={`slide ${idx === current ? 'active' : ''}`}
          >
            {slide.type === 'video' ? (
              <video 
                src={slide.src} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="carousel-video"
              />
            ) : (
              <img src={slide.src} alt={slide.alt} />
            )}
            <div className="slide-overlay"></div>
          </div>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prev}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-btn next" onClick={next}>
        <ChevronRight size={32} />
      </button>

      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span 
            key={idx} 
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;