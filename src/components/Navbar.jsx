import React, { useState } from 'react';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [datos, setDatos] = useState({ nombre: '', localidad: '' });

  const handleEnviar = (e) => {
    e.preventDefault();
    const { nombre, localidad } = datos;
    const msg = encodeURIComponent(
      `Hola, soy ${nombre} de ${localidad}. Soy gestor/dueño de papelería y me gustaría trabajar con ustedes. Solicito información sobre precios de mayorista.`
    );
    window.open(`https://wa.me/527561066594?text=${msg}`, '_blank');
    setShowModal(false);
    setDatos({ nombre: '', localidad: '' });
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold tracking-tighter text-navy-dark leading-none">
              TRÁMITES <span className="text-gold-premium">CA</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-bold">Asociados</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-[10px] uppercase tracking-widest font-bold text-gray-600 hover:text-gold-premium transition-colors">Servicios</a>
            
            <button 
              onClick={() => setShowModal(true)}
              className="border border-gold-premium text-gold-premium px-5 py-2 rounded-full text-[10px] font-bold tracking-widest hover:bg-gold-premium hover:text-white transition-all duration-300"
            >
              TRABAJAR CON NOSOTROS
            </button>

            <a 
              href="https://wa.me/527561066594" 
              target="_blank" 
              className="bg-navy-dark text-white px-6 py-2.5 rounded-full text-[10px] font-bold hover:bg-gold-premium transition-all duration-300 shadow-lg"
            >
              CONTACTO DIRECTO
            </a>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-heading text-navy-dark mb-2 text-center italic">Registro de Socio</h3>
            <p className="text-gray-500 text-sm text-center mb-8 font-light">Compártenos tus datos para precios de mayorista.</p>
            <form onSubmit={handleEnviar} className="space-y-4">
              <input 
                required type="text" placeholder="Nombre Completo"
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-1 focus:ring-gold-premium text-navy-dark"
                value={datos.nombre} onChange={(e) => setDatos({...datos, nombre: e.target.value})}
              />
              <input 
                required type="text" placeholder="Localidad / Municipio"
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-1 focus:ring-gold-premium text-navy-dark"
                value={datos.localidad} onChange={(e) => setDatos({...datos, localidad: e.target.value})}
              />
              <button type="submit" className="w-full bg-navy-dark text-white py-4 rounded-2xl font-bold tracking-widest uppercase text-[10px] hover:bg-gold-premium transition-all">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}