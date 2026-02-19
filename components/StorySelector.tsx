
import React from 'react';
import { Story } from '../types';

interface StorySelectorProps {
  stories: Story[];
  onSelect: (story: Story) => void;
}

const StorySelector: React.FC<StorySelectorProps> = ({ stories, onSelect }) => {
  return (
    <div className="w-full space-y-10 py-6 px-4">
      <div className="text-center space-y-4">
        <h3 className="text-5xl font-kids font-bold text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          📚 Archivos Estelares
        </h3>
        <p className="text-xl text-cyan-300 font-medium">
          Elige una misión para leer juntos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map(story => (
          <div 
            key={story.id}
            onClick={() => onSelect(story)}
            className="group cursor-pointer glass rounded-[2.5rem] transition-all overflow-hidden border border-white/10 hover:border-cyan-400 transform hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="relative h-48 bg-gradient-to-br from-indigo-900/50 to-black/20 flex items-center justify-center border-b border-white/10">
              <div className="text-8xl transform group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">
                {story.imageUrl}
              </div>
              <div className="absolute top-4 right-4 bg-cyan-400 text-black px-3 py-1 rounded-full font-bold text-xs shadow-md">
                Vocal {story.targetVowel}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-kids font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {story.title}
                </h4>
                <p className="text-cyan-100/60 line-clamp-3 italic text-sm">
                  "{story.content}"
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-cyan-500/20">
                  Transmisión
                </span>
                <span className="text-cyan-400 font-bold group-hover:translate-x-2 transition-transform flex items-center gap-1">
                  Iniciar 🚀
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySelector;
