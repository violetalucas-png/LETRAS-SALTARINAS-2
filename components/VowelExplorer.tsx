
import React, { useState } from 'react';
import { Vowel } from '../types';

interface VowelExplorerProps {
  vowels: Vowel[];
  onContinue: () => void;
}

const VowelExplorer: React.FC<VowelExplorerProps> = ({ vowels, onContinue }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentVowel = vowels[selectedIndex];

  const speak = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.8;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const nextVowel = () => {
    if (selectedIndex < vowels.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      speak(vowels[selectedIndex + 1].char);
    } else {
      onContinue();
    }
  };

  const prevVowel = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      speak(vowels[selectedIndex - 1].char);
    }
  };

  return (
    <div className="w-full text-center space-y-12 animate-fadeIn py-8 px-4">
      <h3 className="text-5xl font-kids font-bold text-cyan-300">Exploración Planetaria</h3>
      
      <div className="flex justify-center flex-wrap items-center gap-6">
        {vowels.map((v, i) => (
          <div 
            key={v.char}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-3xl md:text-4xl cursor-pointer transition-all relative ${
              i === selectedIndex 
                ? 'scale-125' 
                : 'opacity-50 hover:opacity-80'
            }`}
            onClick={() => {
              setSelectedIndex(i);
              speak(v.char);
            }}
          >
            <div className={`absolute inset-0 rounded-full blur-lg opacity-40 ${v.color}`}></div>
            <div className={`relative w-full h-full rounded-full flex items-center justify-center border-4 border-white/20 ${v.color} text-white shadow-2xl`}>
              {v.char}
            </div>
          </div>
        ))}
      </div>

      <div 
        className="max-w-xl mx-auto glass p-8 md:p-12 rounded-[3.5rem] cursor-pointer transition-all hover:scale-[1.02] border border-white/10 group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        onClick={() => speak(`${currentVowel.char}... de... ${currentVowel.word}`)}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`text-[10rem] md:text-[12rem] font-kids font-bold flex justify-center items-center h-64 md:h-72 w-full rounded-[3rem] ${currentVowel.color} text-white shadow-inner group-hover:rotate-3 transition-transform`}>
            {currentVowel.char}
          </div>
          <div className="space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
              <div className="relative text-[8rem] md:text-[10rem] drop-shadow-2xl animate-bounce">
                {currentVowel.image}
              </div>
            </div>
            <p className="text-5xl md:text-6xl font-kids font-bold text-white tracking-wider">
              {currentVowel.word}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-lg mx-auto w-full gap-6 md:gap-8">
        <button 
          onClick={prevVowel}
          disabled={selectedIndex === 0}
          className={`flex-1 py-5 md:py-6 px-4 md:px-8 rounded-3xl font-bold text-xl md:text-2xl transition-all border border-white/10 ${
            selectedIndex === 0 ? 'bg-white/5 text-gray-600 cursor-not-allowed' : 'glass text-white hover:bg-white/10'
          }`}
        >
          Anterior
        </button>
        <button 
          onClick={nextVowel}
          className="flex-1 py-5 md:py-6 px-4 md:px-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-3xl font-bold text-xl md:text-2xl shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all"
        >
          {selectedIndex === vowels.length - 1 ? 'Iniciar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

export default VowelExplorer;
