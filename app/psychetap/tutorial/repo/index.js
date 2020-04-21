// NOTE :: The 'imagePath' value describes the path of an image relative to this file

const TUTORIAL_INTRODUCTION = {
  title: 'Introduction',
  content: [
    {
      id: 0,
      text:
        'The objective of PsycheTap is to protect a spacecraft on its mission to the Psyche asteroid.',
      imagePath: undefined,
    },
    {
      id: 1,
      text:
        'Many different objects will fly towards you as you travel through space.',
      imagePath: undefined,
    },
    {
      id: 2,
      text:
        'Tap Dangers to remove them from the screen and prevent them from damaging the spacecraft.',
      imagePath: undefined,
    },
    {
      id: 3,
      text:
        'Tap Powerups to trigger effects to help you get to Psyche and complete the mission!',
      imagePath: undefined,
    },
  ],
};

const TUTORIAL_GAME_SCREEN = {
  title: 'Game Screen',
  content: [
    {
      id: 0,
      text:
        'The game screen has a menu button in the upper-left corner. Click this button to exit the game. You can also navigate back to this tutorial.',
      imagePath: require('../../../assets/psychetap/other/MenuButton.png'),
    },
    {
      id: 1,
      text: 'In the upper-right corner is your score and level number.',
      imagePath: require('../../../assets/psychetap/other/ScoreAndLevel.png'),
    },
    {
      id: 2,
      text:
        'The bottom-right contains the health bar of the spacecraft. Notice it starts at 100.',
      imagePath: require('../../../assets/psychetap/other/HealthBar.png'),
    },
    {
      id: 3,
      text:
        'The bottom-left contains three Powerup slots (more on that later). Notice there are three.',
      imagePath: require('../../../assets/psychetap/other/PowerupSlots.png'),
    },
    {
      id: 4,
      text:
        "Finally, in the center of the game screen is the Psyche spacecraft. This is what you'll be protecting during the mission!",
      imagePath: require('../../../assets/psychetap/spacecraft/Psyche.png'),
    },
  ],
};

const TUTORIAL_DANGERS = {
  title: 'Dangers',
  content: [
    {
      id: 0,
      text:
        "Some of the objects moving toward the spacecraft are Dangers, and letting them hit the spacecraft will decrease its health. Letting the spacecraft's health reach 0 will render the mission a failure!",
      imagePath: undefined,
    },
    {
      id: 1,
      text:
        'Tap on the Dangers to remove them from the screen. Removing them from the screen will also increase your score.',
      imagePath: undefined,
    },
    {
      id: 2,
      text:
        'These hit hard, and there are many! This danger will cause -10 health to the spacecraft if it hits.',
      imagePath: require('../../../assets/psychetap/dangers/Asteroid1.png'),
    },
    {
      id: 3,
      text:
        'Small but mighty! This danger will cause -20 health to the spacecraft if it hits.',
      imagePath: require('../../../assets/psychetap/dangers/RubberDuck.png'),
    },
    {
      id: 4,
      text:
        'A truck flying through space is no joke! This danger will cause -30 health to the spacecraft if it hits.',
      imagePath: require('../../../assets/psychetap/dangers/Truck.png'),
    },
  ],
};

const TUTORIAL_POWERUPS = {
  title: 'Powerups',
  content: [
    {
      id: 0,
      text:
        "You will also encounter Powerups flying toward you. Don't worry, they don't damage the spacecraft.",
      imagePath: undefined,
    },
    {
      id: 1,
      text:
        'Instead, tapping these will help you in the game in different ways depending on their color.',
      imagePath: undefined,
    },
    {
      id: 2,
      text:
        'When you tap one, it will be added to one of the Powerup slots in the bottom left. You can only hold three at a time, so use them strategically!',
      imagePath: undefined,
    },
    {
      id: 3,
      text: 'Tapping this Powerup will add +10 health to the spacecraft.',
      imagePath: require('../../../assets/psychetap/powerups/Health.png'),
    },
    {
      id: 4,
      text:
        'Tapping this Powerup will slow down the speed of any Dangers on screen for a short period of time.',
      imagePath: require('../../../assets/psychetap/powerups/Clock.png'),
    },
    {
      id: 5,
      text:
        'Tapping this Powerup will remove all dangers from the screen. Use these to quickly increase your score and protect the spacecraft!',
      imagePath: require('../../../assets/psychetap/powerups/ClearScreen.png'),
    },
  ],
};

export const TUTORIAL_VIEWS = [
  TUTORIAL_INTRODUCTION,
  TUTORIAL_GAME_SCREEN,
  TUTORIAL_DANGERS,
  TUTORIAL_POWERUPS,
];

export const TUTORIAL_VIEWS_LENGTH = TUTORIAL_VIEWS.length;
