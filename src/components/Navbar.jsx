import React, { useState } from 'react';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [datos, setDatos] = useState({ nombre: '', localidad: '' });

  const handleEnviar = (e) => {
    e.preventDefault();
    const { nombre, localidad } = datos;
    const msg = encodeURIComponent(
      `Hola, soy ${nombre} de ${localidad}. Soy gestor/dueño de papelería y me gustaría trabajar con ustedes.`
    );
    window.open(`https://wa.me/527561066594?text=${msg}`, '_blank');
    setShowModal(false);
    setDatos({ nombre: '', localidad: '' });
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold tracking-tighter text-[#0a0f1d] leading-none">
              TRÁMITES <span className="text-[#c5a059]">CA</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-bold">Asociados</span>
          </div>
          
          {/* Botón Hamburguesa para Celular */}
          <button 
            className="md:hidden text-[#0a0f1d]"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>

          {/* Menú Escritorio (Visible en PC) */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-[10px] uppercase tracking-widest font-bold text-gray-600 hover:text-[#c5a059] transition-colors">Servicios</a>
            <button 
              onClick={() => setShowModal(true)}
              className="border border-[#c5a059] text-[#c5a059] px-5 py-2 rounded-full text-[10px] font-bold tracking-widest hover:bg-[#c5a059] hover:text-white transition-all"
            >
              TRABAJAR CON NOSOTROS
            </button>
            <a 
              href="https://wa.me/527561066594" 
              className="bg-[#0a0f1d] text-white px-6 py-2.5 rounded-full text-[10px] font-bold hover:bg-[#c5a059] transition-all shadow-lg"
            >
              CONTACTO DIRECTO
            </a>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-b border-gray-100 p-6 space-y-4 animate-in slide-in-from-top duration-300">
            <a 
              href="#servicios" 
              onClick={() => setShowMobileMenu(false)}
              className="block text-center text-[10px] font-bold uppercase tracking-widest text-gray-600"
            >
              Servicios
            </a>
            <button 
              onClick={() => { setShowModal(true); setShowMobileMenu(false); }}
              className="w-full border border-[#c5a059] text-[#c5a059] py-3 rounded-full text-[10px] font-bold tracking-widest"
            >
              TRABAJAR CON NOSOTROS
            </button>
            <a 
              href="https://wa.me/527561066594" 
              className="block w-full bg-[#0a0f1d] text-white py-3 rounded-full text-[10px] font-bold text-center"
            >
              CONTACTO DIRECTO
            </a>
          </div>
        )}
      </nav>

      {/* Modal (El mismo de antes) */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#0a0f1d]/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-heading text-[#0a0f1d] mb-2 text-center italic">Registro de Socio</h3>
            <p className="text-gray-500 text-sm text-center mb-8 font-light">Déjanos tus datos para precios de mayorista.</p>
            <form onSubmit={handleEnviar} className="space-y-4">
              <input 
                required type="text" placeholder="Nombre Completo"
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-1 focus:ring-[#c5a059] text-[#0a0f1d]"
                value={datos.nombre} onChange={(e) => setDatos({...datos, nombre: e.target.value})}
              />
              <input 
                required type="text" placeholder="Localidad / Municipio"
                className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-1 focus:ring-[#c5a059] text-[#0a0f1d]"
                value={datos.localidad} onChange={(e) => setDatos({...datos, localidad: e.target.value})}
              />
              <button type="submit" className="w-full bg-[#0a0f1d] text-white py-4 rounded-2xl font-bold tracking-widest uppercase text-[10px] hover:bg-[#c5a059] transition-all">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}