import React from 'react';
import anuncio from '../assets/img/banners/anuncio.png';

const Anuncio = () => {
  return (
    <section className="anuncio-section">
      <a href="https://www.max.com/co/es" target="_blank" rel="noopener noreferrer">
        <img src={anuncio} alt="Anuncio" className="anuncio-img" />
      </a>
    </section>
  );
};

export default Anuncio;
