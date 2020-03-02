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
  if (entities.player.score === 0) {
    // NOTE :: SET LEVEL
    entities.player.level = 1;

    // NOTE :: SET ENTITY SPEED
    entities.levelsystem.speed.asteroid.min = 2;
    entities.levelsystem.speed.asteroid.max = 3;

    // NOTE :: SET ENTITY DENSITY
    entities.levelsystem.density.asteroid.min = 2;

    // NOTE :: HANDLE VIEW CHANGES
    dispatch({ type: 'setStatusLevel', value: 1 });
  }
  if (entities.player.score === 200) {
    // NOTE :: SET LEVEL
    entities.player.level = 2;

    // NOTE :: SET ENTITY SPEED
    entities.levelsystem.speed.asteroid.min = 3;
    entities.levelsystem.speed.asteroid.max = 4;

    // NOTE :: SET ENTITY DENSITY
    entities.levelsystem.density.asteroid.min = 2;

    // NOTE :: HANDLE VIEW CHANGES
    dispatch({ type: 'setStatusLevel', value: 2 });
  }
  if (entities.player.score === 400) {
    // NOTE :: SET LEVEL
    entities.player.level = 3;

    // NOTE :: SET ENTITY SPEED
    entities.levelsystem.speed.asteroid.min = 3;
    entities.levelsystem.speed.asteroid.max = 4;

    // NOTE :: SET ENTITY DENSITY
    entities.levelsystem.density.asteroid.min = 3;

    // NOTE :: HANDLE VIEW CHANGES
    dispatch({ type: 'setStatusLevel', value: 3 });
  }
  if (entities.player.score === 600) {
    // NOTE :: SET LEVEL
    entities.player.level = 4;

    // NOTE :: SET ENTITY SPEED
    entities.levelsystem.speed.asteroid.min = 4;
    entities.levelsystem.speed.asteroid.max = 5;

    // NOTE :: SET ENTITY DENSITY
    entities.levelsystem.density.asteroid.min = 3;

    // NOTE :: HANDLE VIEW CHANGES
    dispatch({ type: 'setStatusLevel', value: 4 });
  }
  if (entities.player.score === 800) {
    // NOTE :: SET LEVEL
    entities.player.level = 5;

    // NOTE :: SET ENTITY SPEED
    entities.levelsystem.speed.asteroid.min = 4;
    entities.levelsystem.speed.asteroid.max = 5;

    // NOTE :: SET ENTITY DENSITY
    entities.levelsystem.density.asteroid.min = 4;

    // NOTE :: HANDLE VIEW CHANGES
    dispatch({ type: 'setStatusLevel', value: 5 });
  }
  if (entities.player.score === 1000) {
    // NOTE :: SET LEVEL
    entities.player.level = 6;

    // NOTE :: SET ENTITY SPEED
    entities.levelsystem.speed.asteroid.min = 5;
    entities.levelsystem.speed.asteroid.max = 6;

    // NOTE :: SET ENTITY DENSITY
    entities.levelsystem.density.asteroid.min = 4;

    // NOTE :: HANDLE VIEW CHANGES
    dispatch({ type: 'setStatusLevel', value: 6 });
  }
  return entities;
};
