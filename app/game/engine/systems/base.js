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
  // TODO :: DEFINE INITIAL LEVELS
  if (entities.player.score === 0) {
    entities.player.level = 1;
    dispatch({ type: 'setStatusLevel', value: 1 });
  }
  if (entities.player.score === 200) {
    entities.player.level = 2;
    dispatch({ type: 'setStatusLevel', value: 2 });
  }
  if (entities.player.score === 400) {
    entities.player.level = 3;
    dispatch({ type: 'setStatusLevel', value: 3 });
  }
  if (entities.player.score === 600) {
    entities.player.level = 4;
    dispatch({ type: 'setStatusLevel', value: 4 });
  }
  if (entities.player.score === 800) {
    entities.player.level = 5;
    dispatch({ type: 'setStatusLevel', value: 5 });
  }
  if (entities.player.score === 1000) {
    entities.player.level = 6;
    dispatch({ type: 'setStatusLevel', value: 6 });
  }
  return entities;
};
