import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <Mail size={48} className="newsletter-icon" />
          <h2>UNITE A NUESTRA COMUNIDAD</h2>
          <p>
            Suscribite a nuestro newsletter y recibí las últimas noticias, 
            fechas de conciertos exclusivas, y contenido especial antes que nadie.
          </p>
        </div>

        <div className="newsletter-form">
          {!subscribed ? (
            <>
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              <button 
                className="btn-subscribe"
                onClick={handleSubscribe}
              >
                SUSCRIBIRME
              </button>
            </>
          ) : (
            <div className="subscribe-success">
              <CheckCircle size={32} />
              <span>¡Gracias por suscribirte!</span>
            </div>
          )}
        </div>

        <p className="newsletter-disclaimer">
          No spam. Solo rock. Prometido. 🤘
        </p>
      </div>
    </section>
  );
};

export default Newsletter;