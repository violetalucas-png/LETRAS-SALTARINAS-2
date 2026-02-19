
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="glass p-4 flex justify-between items-center sticky top-0 z-50 border-b border-cyan-500/30">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={onHomeClick}
      >
        <div className="w-12 h-12 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform">
          🚀
        </div>
        <h1 className="text-3xl font-kids font-bold tracking-tight">
          <span className="text-cyan-400">Letras</span> <span className="text-white">Saltarinas</span>
        </h1>
      </div>
      
      <nav className="flex gap-4">
        <button 
          onClick={onHomeClick}
          className="px-6 py-2 rounded-full font-bold text-cyan-100 border border-cyan-500/50 hover:bg-cyan-500/20 transition-all"
        >
          Base de Control
        </button>
      </nav>
    </header>
  );
};

export default Header;
