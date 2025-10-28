import React, { useState } from 'react';
import { Play, X, Eye } from 'lucide-react';
import './Videos.css';

// Importar thumbnails de videos
import thumbDespertar from '../assets/images/videos/despertar-thumb.jpg';
import thumbCalles from '../assets/images/videos/calles-vacias-thumb.jpg';
import thumbTormenta from '../assets/images/videos/tormenta-thumb.jpg';
import thumbResistir from '../assets/images/videos/resistir-thumb.jpg';
import thumbEnVivo from '../assets/images/videos/en-vivo-thumb.jpg';
import thumbAcustica from '../assets/images/videos/sesion-acustica-thumb.jpg';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Lo mejor que pueda',
      album: 'Sueños de Desvelos',
      thumbnail: thumbDespertar,
      url: 'https://www.youtube.com/embed/IgAtaIh4vjE?si=CyXBIXjaTfL0QUL1',
      views: '145K',
      date: '2019'
    },
    {
      id: 2,
      title: 'Este infierno',
      album: 'Sueños de Desvelos',
      thumbnail: thumbCalles,
      url: 'https://www.youtube.com/embed/cBFEc4ZAZuM?si=IQ4GcPXCIir8yyJL',
      views: '98K',
      date: '2020'
    },
    {
      id: 3,
      title: 'Perdido en la noche',
      album: 'Presagio',
      thumbnail: thumbTormenta,
      url: 'https://www.youtube.com/embed/eLHHofAAgBw?si=27Y9Q5oQFm6IgOBD',
      views: '203K',
      date: '2018'
    },
    {
      id: 4,
      title: 'Maldita Ansiedad',
      album: 'Presagio',
      thumbnail: thumbResistir,
      url: 'https://www.youtube.com/embed/yd8nA0oT5Ds?si=14mpOUsbbV8Buvh6',
      views: '167K',
      date: '2023'
    },
    {
      id: 5,
      title: 'Volar',
      album: 'Live Session',
      thumbnail: thumbEnVivo,
      url: 'https://www.youtube.com/embed/L-d5sxjKKEU?si=NC2FdyBZwH_0o5K-',
      views: '89K',
      date: '2024'
    },
    {
      id: 6,
      title: 'Valenfina',
      album: 'Especial',
      thumbnail: thumbAcustica,
      url: 'https://www.youtube.com/embed/b7woMyc75Rc?si=DsBo7-vPqHN_0ZmG',
      views: '76K',
      date: '2024'
    }
  ];

  return (
    <section id="videos" className="videos">
      <h2 className="section-title">VIDEOS MUSICALES</h2>
      
      <div className="videos-grid">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="video-card"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="video-overlay">
                <Play size={48} />
              </div>
              <span className="video-duration">
                <Eye size={14} /> {video.views}
              </span>
            </div>
            
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="video-album">{video.album}</p>
              <p className="video-date">{video.date}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedVideo(null)}>
              <X size={32} />
            </button>
            
            <div className="video-player">
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                allowFullScreen
                frameBorder="0"
              />
            </div>
            
            <div className="video-details">
              <h2>{selectedVideo.title}</h2>
              <p className="detail-album">Álbum: {selectedVideo.album}</p>
              <p className="detail-stats">
                <Eye size={16} /> {selectedVideo.views} visualizaciones • {selectedVideo.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;