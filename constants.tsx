
import { Vowel, Story } from './types';

export const VOWELS: Vowel[] = [
  { char: 'A', word: 'Abeja', image: '🐝', color: 'bg-yellow-400' },
  { char: 'E', word: 'Elefante', image: '🐘', color: 'bg-blue-400' },
  { char: 'I', word: 'Isla', image: '🏝️', color: 'bg-green-400' },
  { char: 'O', word: 'Oso', image: '🐻', color: 'bg-orange-400' },
  { char: 'U', word: 'Uvas', image: '🍇', color: 'bg-purple-400' },
];

export const STORIES: Story[] = [
  {
    id: 'ariel-story',
    title: 'Ariel y el Arpa',
    targetVowel: 'A',
    imageUrl: '🧜‍♀️',
    content: 'Ariel ama el agua azul. Ella busca un arpa de arena. La sirena canta una canción alegre para sus amigos del mar.',
    questions: [
      { id: 1, question: '¿Qué ama Ariel?', options: ['El fuego', 'El agua', 'La tierra'], correctAnswer: 1 },
      { id: 2, question: '¿Qué busca Ariel?', options: ['Un arpa', 'Un zapato', 'Un peine'], correctAnswer: 0 },
      { id: 3, question: '¿Cómo es la canción?', options: ['Triste', 'Lenta', 'Alegre'], correctAnswer: 2 }
    ]
  },
  {
    id: 'elsa-story',
    title: 'Elsa y su Estrella',
    targetVowel: 'E',
    imageUrl: '❄️',
    content: 'Elsa tiene un espejo de escarcha. Ella escala la montaña enorme. Su estrella mágica brilla en la noche elegante.',
    questions: [
      { id: 1, question: '¿De qué es el espejo?', options: ['De madera', 'De escarcha', 'De papel'], correctAnswer: 1 },
      { id: 2, question: '¿Qué escala Elsa?', options: ['Un árbol', 'Una casa', 'Una montaña'], correctAnswer: 2 },
      { id: 3, question: '¿Qué brilla en la noche?', options: ['Una estrella', 'Una abeja', 'Una uva'], correctAnswer: 0 }
    ]
  },
  {
    id: 'igor-story',
    title: 'Igor en la Isla',
    targetVowel: 'I',
    imageUrl: '🐴',
    content: 'Igor imagina una isla increíble. Él busca un imán de oro. Igor es un burrito que quiere iluminar su hogar.',
    questions: [
      { id: 1, question: '¿Qué imagina Igor?', options: ['Una isla', 'Un coche', 'Un helado'], correctAnswer: 0 },
      { id: 2, question: '¿Qué busca él?', options: ['Un imán', 'Un perro', 'Una flor'], correctAnswer: 0 },
      { id: 3, question: '¿Qué animal es Igor?', options: ['Un pato', 'Un burrito', 'Un león'], correctAnswer: 1 }
    ]
  },
  {
    id: 'olaf-story',
    title: 'Olaf y el Oso',
    targetVowel: 'O',
    imageUrl: '⛄',
    content: 'Olaf observa al oso pardo. El oso come ocho orugas verdes. Olaf tiene un ojo muy atento y una sonrisa de oro.',
    questions: [
      { id: 1, question: '¿A quién observa Olaf?', options: ['A un oso', 'A un gato', 'A un pez'], correctAnswer: 0 },
      { id: 2, question: '¿Cuántas orugas come el oso?', options: ['Dos', 'Ocho', 'Diez'], correctAnswer: 1 },
      { id: 3, question: '¿Cómo es la sonrisa de Olaf?', options: ['De plata', 'De oro', 'De nieve'], correctAnswer: 1 }
    ]
  },
  {
    id: 'ursula-story',
    title: 'Úrsula y su Uva',
    targetVowel: 'U',
    imageUrl: '🐙',
    content: 'Úrsula usa una capa púrpura. Ella busca una uva única en el universo. El unicornio salta por la unión del bosque.',
    questions: [
      { id: 1, question: '¿Qué usa Úrsula?', options: ['Una capa', 'Un sombrero', 'Un guante'], correctAnswer: 0 },
      { id: 2, question: '¿Qué busca ella?', options: ['Una manzana', 'Una uva', 'Un melón'], correctAnswer: 1 },
      { id: 3, question: '¿Quién salta por el bosque?', options: ['Un perro', 'Un oso', 'Un unicornio'], correctAnswer: 2 }
    ]
  }
];
