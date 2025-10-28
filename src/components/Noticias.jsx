import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import './Noticias.css';

// Importar imágenes de noticias
import newsAlbum from '../assets/images/news/nuevo-album.jpg';
import newsGira from '../assets/images/news/gira-nacional.jpg';
import newsColab from '../assets/images/news/colaboracion.jpg';
import newsVideo from '../assets/images/news/video-resistir.jpg';

const Noticias = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      id: 1,
      title: 'Nuevo Álbum en Camino',
      excerpt: 'La banda confirma que están trabajando en su tercer álbum de estudio, con lanzamiento previsto para 2026.',
      image: newsAlbum,
      date: '2025-10-20',
      category: 'Lanzamientos',
      content: 'Traidores NO confirmó oficialmente que se encuentran en proceso de grabación de su tercer álbum de estudio. Según declaraciones de la banda, el nuevo material explorará sonidos más experimentales sin perder la esencia que los caracteriza. Se espera el lanzamiento para mediados de 2026.'
    },
    {
      id: 2,
      title: 'Gira Nacional 2025',
      excerpt: 'Se anuncian 15 fechas por todo el país, incluyendo ciudades que nunca habían visitado.',
      image: newsGira,
      date: '2025-10-15',
      category: 'Conciertos',
      content: 'La banda anunció una extensa gira nacional que los llevará por 15 ciudades argentinas entre noviembre y febrero. Las entradas ya están disponibles en PassLine y las expectativas son altísimas tras el éxito de su última presentación en Buenos Aires.'
    },
    {
      id: 3,
      title: 'Colaboración con Artista Internacional',
      excerpt: 'Confirman colaboración sorpresa con una banda referente del rock alternativo mundial.',
      image: newsColab,
      date: '2025-10-10',
      category: 'Colaboraciones',
      content: 'En una entrevista exclusiva, la banda reveló que están trabajando en una colaboración con una banda icónica del rock alternativo internacional. Si bien no revelaron nombres, prometieron que será una sorpresa que marcará un antes y después en su carrera.'
    },
    {
      id: 4,
      title: 'Video Nuevo: "Resistir"',
      excerpt: 'Estrenan el videoclip oficial de "Resistir", dirigido por Nahuel Lerena.',
      image: newsVideo,
      date: '2025-10-05',
      category: 'Videos',
      content: 'Ya está disponible el video oficial de "Resistir", una producción cinematográfica que refleja la intensidad y el mensaje de la canción. El video fue dirigido por Nahuel Lerena y filmado en locaciones emblemáticas de Buenos Aires.'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="noticias" className="noticias">
      <h2 className="section-title">ÚLTIMAS NOTICIAS</h2>
      
      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
              <span className="news-category">{item.category}</span>
            </div>
            
            <div className="news-content">
              <div className="news-meta">
                <span>
                  <Calendar size={14} /> {formatDate(item.date)}
                </span>
              </div>
              
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              
              <button 
                className="btn-read-more"
                onClick={() => setSelectedNews(item)}
              >
                Leer más <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="news-modal" onClick={() => setSelectedNews(null)}>
          <div className="news-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedNews(null)}>
              <X size={32} />
            </button>
            
            <div className="news-modal-image">
              <img src={selectedNews.image} alt={selectedNews.title} />
            </div>
            
            <div className="news-modal-body">
              <span className="modal-category">{selectedNews.category}</span>
              <h2>{selectedNews.title}</h2>
              
              <div className="modal-meta">
                <span>
                  <Calendar size={16} /> {formatDate(selectedNews.date)}
                </span>
              </div>
              
              <p className="modal-content">{selectedNews.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Noticias;