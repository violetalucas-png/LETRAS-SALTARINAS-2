
export enum AppState {
  HOME = 'HOME',
  VOWELS = 'VOWELS',
  STORY_SELECTION = 'STORY_SELECTION',
  READING = 'READING',
  QUIZ = 'QUIZ',
  CELEBRATION = 'CELEBRATION'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Story {
  id: string;
  title: string;
  targetVowel: string;
  content: string;
  imageUrl: string;
  questions: Question[];
}

export interface Vowel {
  char: string;
  word: string;
  image: string;
  color: string;
}
