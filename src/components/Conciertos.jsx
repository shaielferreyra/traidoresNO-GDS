import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import './Conciertos.css';

const Conciertos = () => {
  const shows = [
    { 
      date: '15', 
      month: 'NOV', 
      day: 'VIERNES', 
      venue: 'TEATRO GRAN REX', 
      location: 'Buenos Aires', 
      time: '21:00 HS',
      ticketLink: '#'
    },
    { 
      date: '23', 
      month: 'NOV', 
      day: 'SÁBADO', 
      venue: 'QUALITY ESPACIO', 
      location: 'Córdoba', 
      time: '22:00 HS',
      ticketLink: '#'
    },
    { 
      date: '07', 
      month: 'DIC', 
      day: 'SÁBADO', 
      venue: 'BROADWAY LIVE', 
      location: 'Rosario', 
      time: '21:30 HS',
      ticketLink: '#'
    }
  ];

  return (
    <section id="conciertos" className="conciertos">
      <h2 className="section-title">PRÓXIMOS SHOWS</h2>
      <div className="shows-grid">
        {shows.map((show, idx) => (
          <div key={idx} className="show-card">
            <div className="show-date">
              <span className="date">{show.date}</span>
              <span className="month">{show.month}</span>
              <span className="day">{show.day}</span>
            </div>
            
            <div className="show-info">
              <h3>{show.venue}</h3>
              <p className="location">
                <MapPin size={16} /> {show.location}
              </p>
              <p className="time">
                <Calendar size={16} /> {show.time}
              </p>
            </div>
            
            <button 
              className="btn-tickets"
              onClick={() => window.open(show.ticketLink, '_blank')}
            >
              CONSEGUIR ENTRADAS
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conciertos;