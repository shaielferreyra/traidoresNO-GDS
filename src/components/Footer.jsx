import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TRAIDORES NO.</h3>
          <p>Rock Alternativo Argentino</p>
          <p className="footer-slogan">
            "La música que no traiciona"
          </p>
        </div>

        <div className="footer-section">
          <h4>Seguinos</h4>
          <div className="social-links">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>contacto@traidoresno.com</p>
          <p>Management: La Calandria</p>
          <p>+54 11 1234-5678</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TRAIDORES NO. Todos los derechos reservados.</p>
        <p className="footer-credits">
          Diseñado con <span className="heart">♥</span> para el rock argentino
        </p>
      </div>
    </footer>
  );
};

export default Footer;