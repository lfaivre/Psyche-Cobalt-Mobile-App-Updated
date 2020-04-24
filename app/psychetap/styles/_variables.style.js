import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';

export const PSYCHETAP_COLORS = {
  White: 'white',
  Transparent: 'transparent',
  DarkGray: '#1e2223',
  DarkGrayModal: 'rgba(30, 34, 35, 0.75)',
  LightPurple: '#bca0dc',
  LightGreen: '#a4fba6',
};

export const FONT_SIZE = {
  XSmall: SCREEN_HEIGHT * (1 / 20),
  Small: SCREEN_HEIGHT * (1 / 16),
  Medium: SCREEN_HEIGHT * (1 / 8),
  Large: SCREEN_HEIGHT * (1 / 4),
};

export const SPACING_VERTICAL = {
  XSmall: SCREEN_HEIGHT * (1 / 64),
  Small: SCREEN_HEIGHT * (1 / 32),
};

export const SPACING_HORIZONTAL = {
  XXSmall: SCREEN_WIDTH * (1 / 128),
};

export const BUTTON_SIZE = {
  Small: {
    Height: SCREEN_HEIGHT * (1 / 8),
    Width: SCREEN_WIDTH * (2 / 5),
    BorderWidth: 2,
    BorderRadius: 12.5,
  },
  Large: {
    Height: SCREEN_HEIGHT * (1 / 8),
    Width: SCREEN_WIDTH * (3 / 5),
    BorderWidth: 2,
    BorderRadius: 12.5,
  },
  SmallRound: {
    Height: SCREEN_HEIGHT * (1 / 8),
    Width: SCREEN_HEIGHT * (1 / 8),
    BorderWidth: 2,
    BorderRadius: 50,
  },
  MediumRound: {
    Height: SCREEN_HEIGHT * (3 / 16),
    Width: SCREEN_HEIGHT * (3 / 16),
    BorderWidth: 2,
    BorderRadius: 50,
  },
};
