import React, { useState, useEffect } from 'react';
import { Youtube, X, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenu(false);
  };

  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Conciertos', id: 'conciertos' },
    { label: 'Noticias', id: 'noticias' },
    { label: 'Discografía', id: 'discografia' },
    { label: 'Videos', id: 'videos' },
    { label: 'La Banda', id: 'miembros' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Historia', id: 'historia' },
    { label: 'Tienda', id: 'tienda' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          TRAIDORES NO.
        </div>
        
        <div className={`nav-links ${mobileMenu ? 'active' : ''}`}>
          {menuItems.map((item, idx) => (
            <a key={idx} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </a>
          ))}
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-youtube"
          >
            <Youtube size={18} /> ESCÚCHANOS
          </a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;