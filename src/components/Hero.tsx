import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Pause } from "lucide-react";

export function Hero() {
  const [isImmersive, setIsImmersive] = useState(false);

  const toggleImmersive = () => {
    setIsImmersive(!isImmersive);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <iframe
        src="https://iframe.mediadelivery.net/play/458976/5638dad3-f6a8-4c2d-a770-833d338074ed"
        className="absolute inset-0 w-full h-full z-0"
        allow="autoplay; fullscreen"
        style={{ border: 'none', objectFit: 'cover' }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 z-10 ${
        isImmersive ? 'bg-transparent' : 'bg-black/40'
      }`}></div>

      {/* Content */}
      <div className={`relative z-20 text-center text-white max-w-4xl mx-auto px-6 transition-all duration-500 ${
        isImmersive ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <h1 className="text-5xl md:text-7xl mb-6 font-bold">
          Crece tu Negocio a 7 Cifras
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Con este Método Probado
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
          Descubre la estrategia que ha transformado cientos de empresas 
          y multiplicado sus resultados exponencialmente
        </p>
        
        {/* Play Button for Video */}
        <div className="mb-8">
          <Button
            onClick={toggleImmersive}
            size="lg"
            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold"
          >
            {isImmersive ? (
              <>
                <Pause className="h-6 w-6 mr-3" />
                Mostrar Contenido
              </>
            ) : (
              <>
                <Play className="h-6 w-6 mr-3" />
                Ver Video Completo
              </>
            )}
          </Button>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Ver Mi Trabajo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white hover:text-black"
          >
            Contactar
          </Button>
        </div>
        
        {/* Calendly Widget - Debajo del video */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">📅 Agenda tu Consulta Gratuita</h3>
            <p className="text-xl text-gray-200">Selecciona el horario que mejor te convenga</p>
          </div>
          
          {/* Principio del widget integrado de Calendly */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/scaleally/30min" style={{minWidth: '320px', height: '700px'}}></div>
          {/* Final del widget integrado de Calendly */}
        </div>
      </div>
    </section>
  );
}
