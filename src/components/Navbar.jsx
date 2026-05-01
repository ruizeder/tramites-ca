import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-heading font-bold tracking-tighter text-navy-dark leading-none">
            TRÁMITES <span className="text-gold-premium">CA</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-bold">Asociados</span>
        </div>
        
        {/* Menú de Navegación */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-xs uppercase tracking-widest font-bold text-gray-600 hover:text-gold-premium transition-colors">Servicios</a>
          <a href="#nosotros" className="text-xs uppercase tracking-widest font-bold text-gray-600 hover:text-gold-premium transition-colors">Nosotros</a>
          <a href="#comentarios" className="text-xs uppercase tracking-widest font-bold text-gray-600 hover:text-gold-premium transition-colors">Opiniones</a>
        </div>

        <a 
          href="https://wa.me/527561066594" 
          target="_blank" 
          className="bg-navy-dark text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-gold-premium transition-all duration-300 shadow-lg shadow-navy-dark/10"
        >
          CONTACTO DIRECTO
        </a>
      </div>
    </nav>
  );
}