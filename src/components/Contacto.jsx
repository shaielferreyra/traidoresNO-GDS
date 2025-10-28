import React, { useState } from 'react';
import { Mail, Phone, Users } from 'lucide-react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="contacto">
      <h2 className="section-title">CONTACTO</h2>
      
      <div className="contacto-grid">
        <div className="contacto-info">
          <h3>¡DEJANOS TU MENSAJE!</h3>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>contacto@traidoresno.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-text">
                <h4>Teléfono</h4>
                <p>+54 11 1234-5678</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Users size={24} />
              </div>
              <div className="contact-text">
                <h4>Management</h4>
                <p>La Calandria Producciones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contacto-form-wrapper">
          <div className="contacto-form">
            <input
              type="text"
              name="name"
              placeholder="TU NOMBRE"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="TU EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="MENSAJE"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
            />
            <button 
              type="button" 
              className="btn-submit"
              onClick={handleSubmit}
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;