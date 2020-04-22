import {
  LEVELS,
  LEVELS_LENGTH,
  FIRST_LEVEL,
  FINAL_LEVEL,
} from '../repo/levels';
import { calcHealth, calcScore } from '../../utilities';

export const SystemPhase = (entities, { events, dispatch }) => {
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'gameOver') {
        //   NOTE: HANDLED IN RESET SYSTEM, CONSIDER REFACTORING
      }
    }
  }
  return entities;
};

export const SystemHealth = (entities, { events, dispatch }) => {
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'setHealth') {
        const currentHealth = entities.player.health;
        const modifier = events[i].value;
        const newHealth = calcHealth(currentHealth, modifier);
        if (newHealth !== null) {
          entities.player.health = newHealth;
          dispatch({ type: 'setStatusHealth', value: newHealth });
          if (newHealth === 0) {
            dispatch({ type: 'gameOver' });
          }
        }
      }
    }
  }
  return entities;
};

export const SystemScore = (entities, { events, dispatch }) => {
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'setScore') {
        const currentScore = entities.player.score;
        const modifier = events[i].value;
        const newScore = calcScore(currentScore, modifier);
        if (newScore !== null) {
          entities.player.score = newScore;
          dispatch({ type: 'setStatusScore', value: newScore });
          if (newScore === Number.MAX_SAFE_INTEGER) {
            dispatch({ type: 'gameOver' });
          }
        }
      }
    }
  }
  return entities;
};

export const SystemLevels = (entities, { dispatch }) => {
  if (entities.player.level === FINAL_LEVEL.level) {
    return entities;
  }

  const next = LEVELS[entities.player.level + 1];
  if (entities.player.score === next.requiredScore) {
    entities.player.level = next.level;
    entities.levelsystem.speed.asteroid = next.system.speed.asteroid;
    entities.levelsystem.density.asteroid = next.system.density.asteroid;
    dispatch({ type: 'setStatusLevel', value: next.level });
  }
  return entities;
};
