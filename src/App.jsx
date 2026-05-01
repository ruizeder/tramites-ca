import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';

const serviciosPrincipales = [
  "Situación Fiscal (RFC)",
  "Corrección de actas",
  "Certificación de CURP",
  "Registros extemporáneos"
];

function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7]">
      <Navbar />
      <Hero />
      
      <main id="servicios" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-[#c5a059] font-bold tracking-[0.3em] uppercase text-[10px]">Gestiones Oficiales</span>
          <h2 className="text-5xl font-serif mt-4 text-[#0a0f1d] italic underline decoration-[#c5a059]/10">Nuestros Servicios</h2>
        </div>

        {/* Grid con la tarjeta de actas destacada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Columna 1: Acta (Ocupa 2 filas y aumentamos su presencia visual) */}
          <div className="lg:row-span-2 min-h-[550px]">
            <ServiceCard isActa={true} />
          </div>
          
          {/* Columnas 2 y 3: Servicios automáticos */}
          {serviciosPrincipales.map((item, index) => (
            <ServiceCard key={index} titulo={item} />
          ))}

          {/* Citas al SAT: Ahora alineado en la Columna 2 (debajo de CURP) */}
          <div className="lg:col-start-2">
            <ServiceCard titulo="Citas al SAT" />
          </div>
        </div>
      </main>

      <AboutUs />
      
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <Testimonials />
      </div>

      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex flex-col mb-4">
            <span className="text-xl font-serif font-bold text-[#0a0f1d] leading-none">TRÁMITES <span className="text-[#c5a059]">CA</span></span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">Asociados</span>
          </div>
          <a href="tel:7561066594" className="text-3xl font-serif text-[#0a0f1d] hover:text-[#c5a059] transition-colors italic tracking-tighter">756 106 6594</a>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-gray-400">© 2026 Trámites CA y Asociados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;