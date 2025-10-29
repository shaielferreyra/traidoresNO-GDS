import React, { useState } from 'react';
import { Guitar, Mic, Music2, Drum } from 'lucide-react';
import './Miembros.css';

// Importar fotos de los miembros
import martinPhoto from '../assets/images/band/martin.jpg';
import piojoPhoto from '../assets/images/band/piojo.jpg';
import marioPhoto from '../assets/images/band/mario.jpg';
import josePhoto from '../assets/images/band/jose.jpg';
import pedroPhoto from '../assets/images/band/pedro.jpg';

const Miembros = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: 'Martin Diaz',
      role: 'Voz Principal',
      icon: <Mic size={40} />,
      photo: martinPhoto,
      bio: 'Fundador y voz de la banda. Con más de 15 años de experiencia en la escena underground, Martin aporta la energía cruda y las letras profundas que caracterizan a Traidores NO.',
      instruments: ['Voz'],
      influences: ['Nirvana', 'Divididos', 'Pearl Jam']
    },
    {
      name: 'Alvaro "Piojo" Acosta',
      role: 'Guitarra Principal',
      icon: <Guitar size={40} />,
      photo: piojoPhoto,
      bio: 'Virtuoso de la guitarra, Alvaro crea los riffs que definen el sonido único de la banda. Su estilo combina técnica clásica con la rebeldía del rock alternativo.',
      instruments: ['Guitarra eléctrica', 'Lap steel'],
      influences: ['Hendrix', 'Tom Morello', 'Pappo']
    },
    {
      name: 'Mario Gramajo',
      role: 'Guitarra Secundaria',
      icon: <Guitar size={40} />,
      photo: marioPhoto,
      bio: 'Complementando las melodías de Alvaro, Mario aporta texturas y armonías que enriquecen cada composición. Su enfoque innovador añade profundidad al sonido de la banda.',
      instruments: ['Guitarra eléctrica', 'Guitarra acústica'],
      influences: ['Hendrix', 'Tom Morello', 'Pappo']
    },
    {
      name: 'Jose Barrionuevo',
      role: 'Bajo',
      icon: <Music2 size={40} />,
      photo: josePhoto,
      bio: 'La base rítmica sólida del grupo. Jose aporta grooves profundos y líneas de bajo memorables que complementan perfectamente la propuesta sonora.',
      instruments: ['Bajo eléctrico', 'Contrabajo'],
      influences: ['Flea', 'Les Claypool', 'Cachorro López']
    },
    {
      name: 'Pedro Barrionuevo',
      role: 'Batería',
      icon: <Drum size={40} />,
      photo: pedroPhoto,
      bio: 'El corazón rítmico de Traidores NO. Con una técnica impecable y feeling único, Pedro marca el pulso que hace vibrar cada show.',
      instruments: ['Batería', 'Percusión'],
      influences: ['Dave Grohl', 'John Bonham', 'Rodolfo García']
    }
  ];

  return (
    <section id="miembros" className="miembros">
      <h2 className="section-title">LA BANDA</h2>
      
      <div className="members-grid">
        {members.map((member, idx) => (
          <div 
            key={idx} 
            className="member-card"
            onClick={() => setSelectedMember(idx)}
          >
            <div className="member-photo">
              <img src={member.photo} alt={member.name} />
              <div className="member-overlay">
                <div className="member-icon">{member.icon}</div>
              </div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedMember !== null && (
        <div className="member-modal" onClick={() => setSelectedMember(null)}>
          <div className="member-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>×</button>
            
            <div className="modal-grid">
              <div className="modal-photo">
                <img src={members[selectedMember].photo} alt={members[selectedMember].name} />
              </div>
              
              <div className="modal-details">
                <h2>{members[selectedMember].name}</h2>
                <p className="modal-role">{members[selectedMember].role}</p>
                
                <p className="modal-bio">{members[selectedMember].bio}</p>
                
                <div className="modal-section">
                  <h4>Instrumentos</h4>
                  <ul>
                    {members[selectedMember].instruments.map((inst, idx) => (
                      <li key={idx}>{inst}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h4>Influencias</h4>
                  <div className="influences-tags">
                    {members[selectedMember].influences.map((inf, idx) => (
                      <span key={idx} className="influence-tag">{inf}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Miembros;