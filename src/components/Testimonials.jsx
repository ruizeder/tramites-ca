import React, { useState } from 'react';

export default function Testimonials() {
  const [comentarios, setComentarios] = useState([
    { nombre: "Ricardo D.", texto: "Trámite de RFC rápido y muy profesional." },
    { nombre: "Elena M.", texto: "Me ayudaron con una corrección de acta difícil. Muy recomendados." }
  ]);
  const [nuevo, setNuevo] = useState({ nombre: '', texto: '' });

  const agregar = (e) => {
    e.preventDefault();
    if (nuevo.nombre && nuevo.texto) {
      setComentarios([{ ...nuevo }, ...comentarios]);
      setNuevo({ nombre: '', texto: '' });
    }
  };

  return (
    <section id="opiniones" className="py-20 px-6 bg-navy-dark rounded-[50px] text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Lado izquierdo: Lista compacta */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading mb-8 italic text-gold-premium">Opiniones</h2>
            {comentarios.map((c, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5">
                <p className="text-sm font-light text-gray-300 italic">"{c.texto}"</p>
                <span className="block mt-2 font-bold text-[10px] uppercase tracking-widest text-gold-premium">— {c.nombre}</span>
              </div>
            ))}
          </div>

          {/* Lado derecho: Formulario pequeño */}
          <div className="bg-white p-8 rounded-3xl self-center">
            <h3 className="text-navy-dark font-heading text-lg mb-4 text-center">Deja tu comentario</h3>
            <form onSubmit={agregar} className="space-y-3">
              <input 
                type="text" placeholder="Nombre"
                className="w-full p-3 bg-gray-50 rounded-xl border-none text-sm text-navy-dark outline-none focus:ring-1 focus:ring-gold-premium"
                value={nuevo.nombre} onChange={(e) => setNuevo({...nuevo, nombre: e.target.value})}
              />
              <textarea 
                placeholder="Tu experiencia..."
                className="w-full p-3 bg-gray-50 rounded-xl border-none text-sm h-20 text-navy-dark outline-none focus:ring-1 focus:ring-gold-premium"
                value={nuevo.texto} onChange={(e) => setNuevo({...nuevo, texto: e.target.value})}
              ></textarea>
              <button className="w-full bg-navy-dark text-white py-3 rounded-xl text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold-premium transition-all">
                Publicar
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}