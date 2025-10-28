import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import './Galeria.css';

// Importar fotos de la galería
import foto1 from '../assets/images/gallery/foto1.jpg';
import foto2 from '../assets/images/gallery/foto2.jpg';
import foto3 from '../assets/images/gallery/foto3.jpg';
import foto4 from '../assets/images/gallery/foto4.jpg';
import foto5 from '../assets/images/gallery/foto5.jpg';
import foto6 from '../assets/images/gallery/foto6.jpg';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: foto1,
      alt: 'Banda en concierto 1'
    },
    {
      src: foto2,
      alt: 'Banda en concierto 2'
    },
    {
      src: foto3,
      alt: 'Banda en concierto 3'
    },
    {
      src: foto4,
      alt: 'Banda en concierto 4'
    },
    {
      src: foto5,
      alt: 'Banda en concierto 5'
    },
    {
      src: foto6,
      alt: 'Banda en concierto 6'
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="galeria">
      <h2 className="section-title">GALERÍA</h2>
      
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className="gallery-item" 
            onClick={() => handleImageClick(img)}
          >
            <img src={img.src} alt={img.alt} />
            <div className="gallery-overlay">
              <Play size={32} />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <X size={32} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;