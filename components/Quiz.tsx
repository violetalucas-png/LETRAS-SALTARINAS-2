
import React, { useState } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const currentQuestion = questions[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (feedback) return;
    
    setSelectedOption(idx);
    const isCorrect = idx === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setFeedback('correct');
      setScore(s => s + 1);
    } else {
      setFeedback('incorrect');
    }

    playFeedbackAudio(isCorrect);

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(currentIdx + 1);
        setSelectedOption(null);
        setFeedback(null);
      } else {
        onComplete(score + (isCorrect ? 1 : 0));
      }
    }, 1800);
  };

  const playFeedbackAudio = (isCorrect: boolean) => {
    window.speechSynthesis.cancel();
    const msg = isCorrect ? "Respuesta aceptada. ¡Bien hecho!" : "Error de sistema. Reintenta la próxima.";
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = 'es-ES';
    utterance.pitch = 0.8;
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full max-w-2xl glass p-12 rounded-[4rem] animate-fadeIn space-y-10 border border-purple-500/30">
      <div className="text-center space-y-4">
        <div className="inline-block bg-purple-500/20 text-purple-300 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest border border-purple-500/30">
          Desafío Espacial {currentIdx + 1} / {questions.length}
        </div>
        <h3 className="text-5xl font-kids font-bold text-white">
          ¿Superaste la prueba?
        </h3>
      </div>

      <div className="bg-black/40 p-10 rounded-[3rem] border border-white/10 shadow-inner">
        <p className="text-3xl font-kids text-cyan-100 leading-snug text-center">
          {currentQuestion.question}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(idx)}
            disabled={feedback !== null}
            className={`p-8 rounded-[2rem] text-2xl font-bold transition-all transform active:scale-95 text-left flex items-center justify-between border-2 ${
              feedback === null 
                ? 'bg-white/5 border-white/10 hover:border-cyan-400 hover:bg-cyan-400/10 text-white'
                : idx === currentQuestion.correctAnswer
                ? 'bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                : idx === selectedOption
                ? 'bg-red-500/20 border-red-500 text-red-400'
                : 'bg-white/5 border-white/5 opacity-30 text-white/50'
            }`}
          >
            <span>{option}</span>
            {feedback !== null && idx === currentQuestion.correctAnswer && (
              <span className="text-4xl animate-bounce">💎</span>
            )}
          </button>
        ))}
      </div>

      <div className="w-full bg-white/5 h-4 rounded-full overflow-hidden border border-white/10">
        <div 
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full transition-all duration-700 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Quiz;
