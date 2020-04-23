import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';

export const PSYCHETAP_COLORS = {
  White: 'white',
  DarkGray: '#1e2223',
  LightPurple: '#bca0dc',
};

export const FONT_SIZE = {
  Small: SCREEN_HEIGHT * (1 / 16),
  Large: SCREEN_HEIGHT * (1 / 4),
};

export const SPACING = {
  Small: SCREEN_HEIGHT * (1 / 32),
};

export const BUTTON_SIZE = {
  Small: {
    Height: SCREEN_HEIGHT * (1 / 8),
    Width: SCREEN_WIDTH * (2 / 5),
  },
  Large: {
    Height: SCREEN_HEIGHT * (1 / 8),
    Width: SCREEN_WIDTH * (3 / 5),
  },
};
