// course-data.js
window.COURSE_DATA = {
  title: 'Python с нуля',
  version: '1.0',
  updated: '2025-01-15',
  tasks: [
    // ... те же 15 заданий, что и раньше ...
    { id: 1, module: 'Модуль 1', type: 'choice', reward: 10, difficulty: 'easy',
      title: 'Какой оператор выводит текст на экран в Python?',
      options: ['echo', 'print()', 'console.log', 'printf'], correct: 1,
      hint: 'Это самая известная функция в Python 😉',
      explain: 'print() — стандартный способ вывода.' },

    { id: 2, module: 'Модуль 1', type: 'text', reward: 10, difficulty: 'easy',
      title: 'Какой тип данных у числа 3.14?',
      answer: 'float', hint: 'Помни: есть int, а есть...',
      explain: 'Числа с точкой — это float.' },

    // ... остальные задания ...
  ]
};