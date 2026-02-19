
import React, { useEffect } from 'react';

interface CelebrationProps { score: number; onReset: () => void; }

const Celebration: React.FC<CelebrationProps> = ({ score, onReset }) => {
  useEffect(() => {
    const utter = new SpeechSynthesisUtterance("Misión cumplida. Eres el mejor astronauta de la lectura.");
    utter.lang = "es-ES";
    utter.pitch = 0.9;
    window.speechSynthesis.speak(utter);
  }, []);

  return (
    <div className="text-center space-y-12 animate-fadeIn py-12 px-4">
      <div className="relative inline-block float">
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-2 shadow-[0_0_60px_rgba(34,211,238,0.4)] flex items-center justify-center border-4 border-white/20">
          <div className="text-9xl md:text-[11rem] drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-bounce">
            🏆
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-6xl md:text-8xl font-kids font-bold text-white tracking-tight">
          ¡Misión <span className="text-cyan-400">Lograda</span>!
        </h2>
        <p className="text-2xl md:text-4xl text-cyan-100/70 font-light">
          Has recolectado <span className="text-white font-bold text-5xl">{score} de 3</span> núcleos.
        </p>
      </div>

      <div className="glass p-8 md:p-12 rounded-[3rem] border border-cyan-500/20 max-w-xl mx-auto shadow-2xl">
        <p className="text-2xl md:text-3xl text-cyan-200 font-medium italic leading-relaxed">
          "El universo de las palabras ahora es tuyo. ¡Sigue explorando nuevas galaxias!"
        </p>
      </div>

      <button 
        onClick={onReset}
        className="group relative px-12 md:px-16 py-6 md:py-8 bg-transparent text-white text-2xl md:text-3xl font-bold rounded-[2.5rem] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(34,211,238,0.2)] w-full sm:w-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        <span className="relative z-10 flex items-center gap-4 justify-center">
          👨‍🚀 Base de Control
        </span>
      </button>
    </div>
  );
};

export default Celebration;
