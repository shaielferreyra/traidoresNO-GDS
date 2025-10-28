import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Conciertos from './components/Conciertos';
import Noticias from './components/Noticias';
import Discografia from './components/Discografia';
import Videos from './components/Videos';
import Miembros from './components/Miembros';
import Galeria from './components/Galeria';
import Historia from './components/Historia';
import Tienda from './components/Tienda';
import Newsletter from './components/Newsletter';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <Conciertos />
      <Noticias />
      <Discografia />
      <Videos />
      <Miembros />
      <Galeria />
      <Historia />
      <Tienda />
      <Newsletter />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;