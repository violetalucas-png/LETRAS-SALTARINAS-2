
import React from 'react';

interface HomeProps {
  onStart: () => void;
  onStories: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart, onStories }) => {
  return (
    <div className="text-center animate-fadeIn py-12">
      <div className="mb-12 relative inline-block float">
        <div className="absolute -inset-8 bg-cyan-500 rounded-full blur-[80px] opacity-20"></div>
        <div className="relative p-2 w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center border-4 border-white/20">
          <div className="text-9xl md:text-[10rem] animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            🚀
          </div>
        </div>
        <div className="absolute -bottom-8 -left-8 bg-indigo-600 text-white p-6 rounded-3xl shadow-[0_0_30px_rgba(79,70,229,0.5)] font-bold text-2xl border border-indigo-400">
          ¡Aventura Solar!
        </div>
      </div>
      
      <h2 className="text-6xl md:text-8xl font-kids font-bold mb-8 text-white">
        ¿Listo para el <span className="text-cyan-400">despegue</span>?
      </h2>
      
      <p className="text-2xl text-cyan-100 mb-14 max-w-2xl mx-auto font-light leading-relaxed px-4">
        Explora planetas de letras y descubre historias mágicas en los confines del universo.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center px-4">
        <button 
          onClick={onStart}
          className="group relative w-full sm:w-auto px-12 py-8 bg-transparent text-white text-3xl font-bold rounded-[2rem] overflow-hidden transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative z-10 flex items-center gap-3 justify-center">🌍 Planetas</span>
        </button>
        <button 
          onClick={onStories}
          className="group relative w-full sm:w-auto px-12 py-8 bg-transparent text-white text-3xl font-bold rounded-[2rem] overflow-hidden transition-all hover:scale-105 active:scale-95 border-2 border-purple-500"
        >
          <div className="absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/40 transition-colors"></div>
          <span className="relative z-10 flex items-center gap-3 justify-center">🛰️ Misiones</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
