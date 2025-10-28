import React, { useState, useEffect } from 'react';
import { Clock, Music, Calendar } from 'lucide-react';
import './Countdown.css';

const Countdown = () => {
  const targetDate = new Date('2026-03-15T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="countdown">
      <div className="countdown-content">
        <div className="countdown-header">
          <Music size={48} className="countdown-icon" />
          <h2>PRÓXIMO LANZAMIENTO</h2>
          <p className="countdown-subtitle">Nuevo Álbum · Marzo 2026</p>
        </div>

        <div className="countdown-timer">
          <div className="time-box">
            <span className="time-number">{timeLeft.days}</span>
            <span className="time-label">Días</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-box">
            <span className="time-number">{timeLeft.hours}</span>
            <span className="time-label">Horas</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-box">
            <span className="time-number">{timeLeft.minutes}</span>
            <span className="time-label">Minutos</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-box">
            <span className="time-number">{timeLeft.seconds}</span>
            <span className="time-label">Segundos</span>
          </div>
        </div>

        <div className="countdown-info">
          <div className="info-card">
            <Calendar size={32} />
            <h4>Fecha de Lanzamiento</h4>
            <p>15 de Marzo, 2026</p>
          </div>
          <div className="info-card">
            <Music size={32} />
            <h4>12 Canciones</h4>
            <p>Una nueva experiencia sonora</p>
          </div>
          <div className="info-card">
            <Clock size={32} />
            <h4>Pre-Save</h4>
            <p>Disponible próximamente</p>
          </div>
        </div>

        <button className="btn-notify">
          NOTIFICARME DEL LANZAMIENTO
        </button>
      </div>
    </section>
  );
};

export default Countdown;