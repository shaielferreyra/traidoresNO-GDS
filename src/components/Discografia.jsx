import React, { useState } from 'react';
import { Play, Music } from 'lucide-react';
import './Discografia.css';

// Importar imágenes de álbumes
import albumSuenos from '../assets/images/albums/suenos-desvelos.jpg';
import albumPresagio from '../assets/images/albums/presagio.jpg';

const Discografia = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showLyrics, setShowLyrics] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);

  const albums = [
    {
      title: 'Sueños de Desvelos',
      year: '2019',
      cover: albumSuenos,
      description: 'Primer álbum de la banda. Una exploración cruda de la realidad urbana.',
      songs: [
        { 
          title: 'Despertar', 
          lyrics: 'Entre sombras y luces\nDespierto en la ciudad\nLos sueños se confunden\nCon la realidad...' 
        },
        { 
          title: 'Calles Vacías', 
          lyrics: 'Camino sin destino\nPor calles sin final\nLa noche es testigo\nDe mi soledad...' 
        },
        { 
          title: 'Rebeldía', 
          lyrics: 'No me doblegarán\nNo me harán callar\nMi voz es un grito\nQue no va a parar...' 
        },
        { 
          title: 'Desvelo', 
          lyrics: 'La noche es larga\nY el silencio pesa\nPensamientos que arden\nEn mi cabeza...' 
        }
      ]
    },
    {
      title: 'Presagio',
      year: '2022',
      cover: albumPresagio,
      description: 'Segundo álbum que profundiza en la esencia del rock alternativo.',
      songs: [
        { 
          title: 'Tormenta', 
          lyrics: 'Se acerca la tormenta\nPuedo sentir\nQue algo va a cambiar\nNo hay vuelta atrás...' 
        },
        { 
          title: 'Profecía', 
          lyrics: 'Las estrellas hablan\nDe lo que vendrá\nEl futuro es incierto\nPero hay que avanzar...' 
        },
        { 
          title: 'Resistir', 
          lyrics: 'Seguimos en pie\nA pesar del dolor\nLa lucha continúa\nCon más fervor...' 
        },
        { 
          title: 'Último Aliento', 
          lyrics: 'Con el último aliento\nGritaré tu nombre\nAntes de que todo\nSe desmorone...' 
        }
      ]
    }
  ];

  const handleViewSongs = (idx) => {
    setShowLyrics(idx);
    setSelectedSong(null);
  };

  return (
    <section id="discografia" className="discografia">
      <h2 className="section-title">DISCOGRAFÍA</h2>
      
      <div className="albums-grid">
        {albums.map((album, idx) => (
          <div 
            key={idx} 
            className="album-card"
            onMouseEnter={() => setSelectedAlbum(idx)}
            onMouseLeave={() => setSelectedAlbum(null)}
          >
            <div className="album-cover">
              <img src={album.cover} alt={album.title} />
              <div className={`album-overlay ${selectedAlbum === idx ? 'visible' : ''}`}>
                <h3>{album.title}</h3>
                <p className="album-year">{album.year}</p>
                <p className="album-description">{album.description}</p>
                <button 
                  className="btn-listen" 
                  onClick={() => handleViewSongs(idx)}
                >
                  <Play size={18} /> Ver Canciones
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showLyrics !== false && (
        <div className="lyrics-section">
          <h3>{albums[showLyrics].title} - Canciones</h3>
          <div className="songs-list">
            {albums[showLyrics].songs.map((song, idx) => (
              <div key={idx} className="song-item">
                <div 
                  className="song-header" 
                  onClick={() => setSelectedSong(selectedSong === idx ? null : idx)}
                >
                  <Music size={18} />
                  <span>{idx + 1}. {song.title}</span>
                </div>
                {selectedSong === idx && (
                  <div className="song-lyrics">
                    <p>{song.lyrics}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Discografia;