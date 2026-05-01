import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';

const servicios = [
  "Actas (Nacimiento, Matrimonio, Divorcio, Defunción)",
  "Certificación o Anulación de CURP",
  "Constancia de Situación Fiscal (RFC)",
  "Corrección de actas",
  "Registros extemporáneos",
  "Citas al SAT"
];

function App() {
  return (
    <div className="min-h-screen bg-cream-soft">
      <Navbar />
      <Hero />
      
      {/* Sección Servicios más compacta */}
      <main id="servicios" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-gold-premium font-bold tracking-[0.3em] uppercase text-[9px]">Especialidades</span>
          <h2 className="text-4xl font-heading mt-2 text-navy-dark italic underline decoration-gold-premium/20">Nuestros Servicios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((item, index) => (
            <ServiceCard key={index} titulo={item} />
          ))}
        </div>
      </main>

      <AboutUs />
      
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <Testimonials />
      </div>

      {/* Footer Minimalista Solicitado */}
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col mb-4">
            <span className="text-xl font-heading font-bold text-navy-dark leading-none">
              TRÁMITES <span className="text-gold-premium">CA</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">Asociados</span>
          </div>
          
          <a href="tel:7561066594" className="text-2xl font-heading text-navy-dark hover:text-gold-premium transition-colors">
            756 106 6594
          </a>
          
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-gray-400">
            © 2026 Trámites CA y Asociados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;