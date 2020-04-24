export const LEVELS = [
  {
    level: 0,
    text: 'You reached Level 0!',
    requiredScore: 0,
    system: {
      speed: {
        asteroid: { min: 2, max: 3 },
        rubberDuck: { min: 2, max: 3 },
        truck: { min: 2, max: 3 },
      },
      density: {
        asteroid: { min: 2, max: 2 },
        rubberDuck: { min: 2, max: 2 },
        truck: { min: 2, max: 2 },
      },
    },
  },
  {
    level: 1,
    text: 'You reached Level 1!',
    requiredScore: 100,
    system: {
      speed: {
        asteroid: { min: 3, max: 4 },
        rubberDuck: { min: 3, max: 4 },
        truck: { min: 3, max: 4 },
      },
      density: {
        asteroid: { min: 2, max: 2 },
        rubberDuck: { min: 2, max: 2 },
        truck: { min: 2, max: 2 },
      },
    },
  },
  {
    level: 2,
    text: 'You reached Level 2!',
    requiredScore: 250,
    system: {
      speed: {
        asteroid: { min: 3, max: 4 },
        rubberDuck: { min: 3, max: 4 },
        truck: { min: 3, max: 4 },
      },
      density: {
        asteroid: { min: 3, max: 3 },
        rubberDuck: { min: 3, max: 3 },
        truck: { min: 3, max: 3 },
      },
    },
  },
  {
    level: 3,
    text: 'You reached Level 3!',
    requiredScore: 500,
    system: {
      speed: {
        asteroid: { min: 4, max: 5 },
        rubberDuck: { min: 4, max: 5 },
        truck: { min: 4, max: 5 },
      },
      density: {
        asteroid: { min: 3, max: 3 },
        rubberDuck: { min: 3, max: 3 },
        truck: { min: 3, max: 3 },
      },
    },
  },
  {
    level: 4,
    text: 'You reached Level 4!',
    requiredScore: 1000,
    system: {
      speed: {
        asteroid: { min: 4, max: 5 },
        rubberDuck: { min: 4, max: 5 },
        truck: { min: 4, max: 5 },
      },
      density: {
        asteroid: { min: 4, max: 4 },
        rubberDuck: { min: 4, max: 4 },
        truck: { min: 4, max: 4 },
      },
    },
  },
  {
    level: 5,
    text: 'You made it to Psyche!',
    requiredScore: 2000,
    system: {
      speed: {
        asteroid: { min: 5, max: 6 },
        rubberDuck: { min: 5, max: 6 },
        truck: { min: 5, max: 6 },
      },
      density: {
        asteroid: { min: 4, max: 4 },
        rubberDuck: { min: 4, max: 4 },
        truck: { min: 4, max: 4 },
      },
    },
  },
];

export const LEVELS_LENGTH = LEVELS.length;
export const FIRST_LEVEL = LEVELS[0];
export const FINAL_LEVEL = LEVELS[LEVELS_LENGTH - 1];
