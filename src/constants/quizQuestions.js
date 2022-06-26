export const concerns = {
  ANGER: 1,
  ANXIETY_AND_PANIC_ATTACKS: 2,
  DEPRESSION: 3,
  EATING_DISORDER: 4,
  SELF_ESTEEM: 5,
  SELF_HARM: 6,
  STRESS: 7,
  SLEEPING_DISORDER: 8,
};

export const quiz = {
  questions: [
    {
      question: 'Everything in React is a __________',
      answers: ['Module', 'Component', 'Hooks', 'Template'],
      correctIndex: 1,
      concernType: concerns.ANGER,
    },
    {
      question: 'Onething in React is a __________',
      answers: ['Module', 'Component', 'Hooks', 'Template'],
      correctIndex: 1,
      concernType: concerns.ANGER,
    },
    {
      question: 'Everything in Java is a __________',
      answers: ['Module', 'Component', 'Hooks', 'Template'],
      correctIndex: 1,
      concernType: concerns.ANGER,
    },
    {
      question: 'React is a __________',
      answers: ['Module', 'Component', 'Hooks', 'Template'],
      correctIndex: 1,
      concernType: concerns.ANGER,
    },
    {
      question: 'React is a __________',
      answers: ['Module', 'Component', 'Hooks', 'Template'],
      correctIndex: 1,
      concernType: concerns.ANGER,
    },
    {
      question:
        'What of the following is used in React.js to increase performance?',
      answers: [
        'Original DOM',
        'Virtual DOM',
        'Both A & B',
        'None Of The Above',
      ],
      correctIndex: 1,
      concernType: concerns.ANXIETY_AND_PANIC_ATTACKS,
    },
    {
      question:
        'What of the following is used in Next.js to increase performance?',
      answers: [
        'Original DOM',
        'Virtual DOM',
        'Both A & B',
        'None Of The Above',
      ],
      correctIndex: 1,
      concernType: concerns.ANXIETY_AND_PANIC_ATTACKS,
    },
    {
      question:
        'What of the following is used in Vue.js to increase performance?',
      answers: [
        'Original DOM',
        'Virtual DOM',
        'Both A & B',
        'None Of The Above',
      ],
      correctIndex: 1,
      concernType: concerns.ANXIETY_AND_PANIC_ATTACKS,
    },
    {
      question:
        'What of the following is used in Node.js to increase performance?',
      answers: [
        'Original DOM',
        'Virtual DOM',
        'Both A & B',
        'None Of The Above',
      ],
      correctIndex: 1,
      concernType: concerns.ANXIETY_AND_PANIC_ATTACKS,
    },
    {
      question:
        'What of the following is used in D3.js to increase performance?',
      answers: [
        'Original DOM',
        'Virtual DOM',
        'Both A & B',
        'None Of The Above',
      ],
      correctIndex: 1,
      concernType: concerns.ANXIETY_AND_PANIC_ATTACKS,
    },
    {
      question:
        'Which of the following acts as the input of a class-based component?',
      answers: ['Class', 'Factory', 'Render', 'Props'],
      correctIndex: 3,
      concernType: concerns.DEPRESSION,
    },
    {
      question:
        'Which of the following acts as the input of a function-based component?',
      answers: ['Class', 'Factory', 'Render', 'Props'],
      correctIndex: 3,
      concernType: concerns.DEPRESSION,
    },
    {
      question:
        'Which of the following acts as the input of a module-based component?',
      answers: ['Class', 'Factory', 'Render', 'Props'],
      correctIndex: 3,
      concernType: concerns.DEPRESSION,
    },
    {
      question:
        'Which of the following acts as the input of a package-based component?',
      answers: ['Class', 'Factory', 'Render', 'Props'],
      correctIndex: 3,
      concernType: concerns.DEPRESSION,
    },
    {
      question:
        'Which of the following acts as the input of a frame-based component?',
      answers: ['Class', 'Factory', 'Render', 'Props'],
      correctIndex: 3,
      concernType: concerns.DEPRESSION,
    },
    {
      question: 'React is ............ Javascript library ',
      answers: [
        'Module based',
        'Component based',
        'System based',
        'All are correct',
      ],
      correctIndex: 1,
      concernType: concerns.EATING_DISORDER,
    },
    {
      question:
        'A valid react component can return ...... number of elements. ',
      answers: ['1', '2', '3', 'None of the Above'],
      correctIndex: 0,
      concernType: concerns.EATING_DISORDER,
    },
    {
      question:
        'Which of the following API is a MUST for every ReactJS component? ',
      answers: ['getInitialState', 'render', 'renderComponent', 'None'],
      correctIndex: 2,
      concernType: concerns.EATING_DISORDER,
    },
    {
      question:
        'Which of the following API is a MUST for every ReactJS component? ',
      answers: ['getInitialState', 'render', 'renderComponent', 'None'],
      correctIndex: 2,
      concernType: concerns.EATING_DISORDER,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.EATING_DISORDER,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SELF_ESTEEM,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SELF_ESTEEM,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SELF_ESTEEM,
    },
    {
      question:
        'Which of the following is a correct definition of state in react? ',
      answers: [
        'A persistent storage ',
        'An internal data store (object) of component',
        'Both',
        'None',
      ],
      correctIndex: 1,
      concernType: concerns.SELF_ESTEEM,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SELF_ESTEEM,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.SELF_HARM,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SELF_HARM,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.SELF_HARM,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SELF_HARM,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.SELF_HARM,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.STRESS,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.STRESS,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.STRESS,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.STRESS,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.STRESS,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.SLEEPING_DISORDER,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SLEEPING_DISORDER,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.SLEEPING_DISORDER,
    },
    {
      question: 'React Js is developed by ',
      answers: ['Google', 'Microsoft', 'Facebook', 'None of the Above'],
      correctIndex: 2,
      concernType: concerns.SLEEPING_DISORDER,
    },
    {
      question: 'What is the default port for webpack dev server? ',
      answers: ['3000', '8080', '3306', '8809'],
      correctIndex: 1,
      concernType: concerns.SLEEPING_DISORDER,
    },
  ],
};
