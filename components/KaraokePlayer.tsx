
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Story } from '../types';

interface KaraokePlayerProps {
  story: Story;
  onComplete: () => void;
  onBack: () => void;
}

const KaraokePlayer: React.FC<KaraokePlayerProps> = ({ story, onComplete, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const words = story.content.split(' ');
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  const startReading = useCallback(() => {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(story.content);
    utterance.lang = 'es-ES';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    
    utterance.onboundary = (event) => {
      if (event.name === 'word') {
        const charIndex = event.charIndex;
        let currentTotal = 0;
        for (let i = 0; i < words.length; i++) {
          if (currentTotal >= charIndex) {
            setCurrentWordIndex(i);
            break;
          }
          currentTotal += words[i].length + 1;
        }
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentWordIndex(-1);
      setTimeout(onComplete, 1500);
    };

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }, [story.content, words, onComplete]);

  const togglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        startReading();
      }
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="w-full max-w-4xl glass p-8 md:p-12 rounded-[3.5rem] space-y-10 animate-fadeIn border border-cyan-500/30">
      <div className="flex justify-between items-center border-b border-white/10 pb-6">
        <button 
          onClick={onBack} 
          className="text-cyan-400 font-bold hover:text-cyan-200 transition-colors flex items-center gap-2"
        >
          ← Abortar Misión
        </button>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]"></div>
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs md:text-sm">Lectura en curso</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <div className="w-full flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-6 bg-white/5 p-4 md:p-6 rounded-[2.5rem] border border-white/10 w-full">
            <button 
              onClick={togglePlay}
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl shadow-2xl transform active:scale-90 transition-all ${
                isPlaying ? 'bg-red-500 shadow-[0_0_20px_#ef4444]' : 'bg-cyan-500 shadow-[0_0_20px_#22d3ee]'
              }`}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <div className="flex-grow space-y-2">
              <div className="flex justify-between text-xs font-bold text-cyan-300 uppercase tracking-widest">
                <span>Progreso</span>
                <span>{Math.round(((currentWordIndex + 1) / words.length) * 100)}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                 <div 
                   className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-300" 
                   style={{ width: `${((currentWordIndex + 1) / words.length) * 100}%` }}
                 />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center p-6 glass rounded-full w-48 h-48 border border-cyan-400/20">
             <div className="text-7xl animate-pulse">{story.imageUrl}</div>
          </div>
        </div>

        <h3 className="text-4xl md:text-5xl font-kids font-bold text-white leading-tight text-center">
          {story.title}
        </h3>
      </div>

      <div className="text-3xl md:text-5xl font-kids leading-[1.6] text-center p-10 md:p-14 bg-black/60 rounded-[4rem] border-2 border-cyan-500/20 shadow-inner flex flex-wrap justify-center content-center gap-x-5 gap-y-4">
        {words.map((word, idx) => (
          <span 
            key={idx}
            className={`transition-all duration-300 rounded-2xl px-4 py-1 ${
              idx === currentWordIndex 
                ? 'bg-cyan-400 text-black scale-110 shadow-[0_0_40px_rgba(34,211,238,1)] font-bold karaoke-glow' 
                : 'text-white/40'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
      
      <p className="text-center text-cyan-500/30 font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
        {isPlaying ? 'Recibiendo datos estelares...' : 'Inicia el protocolo de lectura'}
      </p>
    </div>
  );
};

export default KaraokePlayer;
