import React from 'react';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold-premium/5 rounded-full blur-3xl"></div>
          <h2 className="text-5xl font-heading text-navy-dark leading-tight relative z-10">
            Nuestra experiencia es tu <span className="italic text-gold-premium font-normal underline decoration-gray-200 underline-offset-8">mejor garantía</span>
          </h2>
          <p className="mt-8 text-lg text-gray-600 leading-relaxed font-light">
            En **Trámites CA y Asociados**, transformamos procesos burocráticos complejos en soluciones ágiles y sencillas. Nuestra prioridad es la transparencia absoluta y el resguardo de tu información personal en cada trámite ante dependencias oficiales.
          </p>
          <div className="mt-12 space-y-4">
            {['Atención Personalizada', 'Gestión Ágil y Segura', 'Resultados Garantizados'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-premium/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold-premium"></div>
                </div>
                <span className="font-bold text-xs uppercase tracking-widest text-navy-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-navy-dark p-12 rounded-[3rem] text-white relative">
          <div className="absolute top-0 right-0 p-8 text-gold-premium/10 text-9xl font-serif">“</div>
          <p className="text-2xl font-serif italic text-gold-light leading-relaxed relative z-10">
            Tratamos cada documento como si fuera propio. La eficiencia no es una opción, es nuestro estándar de calidad.
          </p>
          <div className="mt-8 pt-8 border-t border-white/10">
            <span className="block font-bold tracking-widest text-xs uppercase text-gold-premium">Dirección General</span>
            <span className="text-gray-400 text-sm">Trámites CA y Asociados</span>
          </div>
        </div>
      </div>
    </section>
  );
}