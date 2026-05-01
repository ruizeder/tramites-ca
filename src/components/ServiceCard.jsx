import React from 'react';

export default function ServiceCard({ titulo }) {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hola, quiero información sobre: ${titulo}`);
    window.open(`https://wa.me/527561066594?text=${msg}`, '_blank');
  };

  return (
    <div className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-transparent hover:border-t-gold-premium">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gold-premium/10 transition-colors">
          <svg className="w-5 h-5 text-gold-premium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-heading font-semibold text-navy-dark leading-tight group-hover:text-gold-premium transition-colors">
          {titulo}
        </h3>
      </div>
      <button 
        onClick={handleWhatsApp}
        className="w-full py-2.5 bg-navy-dark text-white rounded-xl text-xs font-bold tracking-widest hover:bg-gold-premium transition-all uppercase"
      >
        Solicitar
      </button>
    </div>
  );
}