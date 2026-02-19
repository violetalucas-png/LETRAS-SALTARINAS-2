
import React, { useState, useEffect } from 'react';
import { AppState, Story, Vowel } from './types';
import { VOWELS, STORIES } from './constants';
import Header from './components/Header';
import Home from './components/Home';
import VowelExplorer from './components/VowelExplorer';
import StorySelector from './components/StorySelector';
import KaraokePlayer from './components/KaraokePlayer';
import Quiz from './components/Quiz';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.HOME);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [score, setScore] = useState(0);

  const startLearning = () => setState(AppState.VOWELS);
  const goToStories = () => setState(AppState.STORY_SELECTION);
  
  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
    setState(AppState.READING);
  };

  const handleFinishReading = () => {
    setState(AppState.QUIZ);
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setState(AppState.CELEBRATION);
  };

  const resetToHome = () => {
    setState(AppState.HOME);
    setSelectedStory(null);
    setScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onHomeClick={resetToHome} />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 max-w-4xl mx-auto w-full">
        {state === AppState.HOME && (
          <Home onStart={startLearning} onStories={goToStories} />
        )}

        {state === AppState.VOWELS && (
          <VowelExplorer vowels={VOWELS} onContinue={goToStories} />
        )}

        {state === AppState.STORY_SELECTION && (
          <StorySelector stories={STORIES} onSelect={handleSelectStory} />
        )}

        {state === AppState.READING && selectedStory && (
          <KaraokePlayer 
            story={selectedStory} 
            onComplete={handleFinishReading} 
            onBack={() => setState(AppState.STORY_SELECTION)}
          />
        )}

        {state === AppState.QUIZ && selectedStory && (
          <Quiz 
            questions={selectedStory.questions} 
            onComplete={handleQuizComplete} 
          />
        )}

        {state === AppState.CELEBRATION && (
          <Celebration score={score} onReset={resetToHome} />
        )}
      </main>

      <footer className="p-4 text-center text-gray-500 text-sm">
        Hecho con ❤️ para los pequeños lectores
      </footer>
    </div>
  );
};

export default App;
