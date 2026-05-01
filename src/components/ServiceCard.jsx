import React, { useState } from 'react';

export default function ServiceCard({ titulo, isActa }) {
  const [tipoActa, setTipoActa] = useState("");

  const handleWhatsApp = (e, seleccionada) => {
    const textoActa = seleccionada || "información general";
    const msg = encodeURIComponent(`Hola, quiero la descarga de mi acta de: ${textoActa}`);
    window.open(`https://wa.me/527561066594?text=${msg}`, '_blank');
  };

  if (isActa) {
    return (
      <div className="group relative overflow-hidden bg-navy-dark rounded-[2.5rem] shadow-2xl flex flex-col h-full border border-gray-800 md:row-span-2 min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img src="/acta.jpg" alt="Actas" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
        </div>
        <div className="relative z-10 p-10 mt-auto">
          <span className="bg-gold-premium text-navy-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Destacado</span>
          <h3 className="text-4xl font-heading font-bold text-white mt-4 italic">¿Necesitas tu acta?</h3>
          <p className="text-gray-300 my-6 text-sm font-light">Nosotros te lo descargamos inmediatamente: Acta de nacimiento, matrimonio, divorcio o defunción.</p>
          <div className="space-y-4">
            <select 
              className="w-full p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white text-sm outline-none appearance-none cursor-pointer"
              onChange={(e) => setTipoActa(e.target.value)} value={tipoActa}
            >
              <option value="" className="text-navy-dark">Selecciona tipo de acta...</option>
              <option value="Nacimiento" className="text-navy-dark">Nacimiento</option>
              <option value="Matrimonio" className="text-navy-dark">Matrimonio</option>
              <option value="Divorcio" className="text-navy-dark">Divorcio</option>
              <option value="Defunción" className="text-navy-dark">Defunción</option>
            </select>
            <button 
              onClick={(e) => tipoActa && handleWhatsApp(e, tipoActa)} disabled={!tipoActa}
              className={`w-full py-4 rounded-2xl text-xs font-bold tracking-[0.2em] transition-all uppercase ${tipoActa ? 'bg-gold-premium text-navy-dark hover:bg-white' : 'bg-white/10 text-gray-400 cursor-not-allowed'}`}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between border-b-4 border-b-transparent hover:border-b-gold-premium transition-all">
      <div>
        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-premium/10 transition-colors text-gold-premium">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-navy-dark leading-snug group-hover:text-gold-premium transition-colors">{titulo}</h3>
      </div>
      <button 
        onClick={() => {
          const msg = encodeURIComponent(`Hola, quiero información sobre: ${titulo}`);
          window.open(`https://wa.me/527561066594?text=${msg}`, '_blank');
        }}
        className="w-full mt-8 py-3 bg-navy-dark text-white rounded-xl text-[10px] font-bold tracking-widest hover:bg-gold-premium transition-all uppercase"
      >
        Solicitar
      </button>
    </div>
  );
}