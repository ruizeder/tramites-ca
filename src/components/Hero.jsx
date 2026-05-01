import React from 'react';

const Hero = () => {
  return (
    <section className="pt-48 pb-20 px-6 text-center bg-white rounded-b-[60px] shadow-sm">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-gray-100 bg-gray-50">
          <span className="text-tramites-gold font-bold tracking-widest uppercase text-[10px]">Gestión Legal & Administrativa</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-medium text-gray-950 tracking-tight leading-[1.1]">
          Trámites <span className="italic text-tramites-gold">CA y Asociados</span>
        </h1>
        
        <p className="mt-10 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
          Soluciones eficientes para tus actas, trámites ante el SAT y registros gubernamentales con la seriedad que te mereces.
        </p>
      </div>
    </section>
  );
};

export default Hero;