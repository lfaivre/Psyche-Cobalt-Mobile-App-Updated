import Matter from 'matter-js';
import {
  ClearScreen,
  Create_ClearScreen_Matter
} from '../renderers/ClearScreen';
import { Clock, Create_Clock_Matter } from '../renderers/Clock';
import { Health, Create_Health_Matter } from '../renderers/Health';
import {
  SCREEN_WIDTH,
  randomBetween,
  calcDensity,
  outsideOfVerticalBounds,
  touchWithinBounds
} from '../../../game/utilities';

// NOTE :: SYSTEMS

let clearScreenDensity = calcDensity(1 / randomBetween(8, 10));
let clockDensity = calcDensity(1 / randomBetween(6, 8));
let healthDensity = calcDensity(1 / randomBetween(4, 6));

let clearScreenIterator = 0;
let clockIterator = 0;
let healthIterator = 0;

export const DeployPowerUps = (entities, {}) => {
  if (clearScreenIterator === clearScreenDensity) {
    const randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let body = Create_ClearScreen_Matter(randomHorizontalPos, 0);
    const minSpeed = entities.levelsystem.speed.clearScreen.min;
    const maxSpeed = entities.levelsystem.speed.clearScreen.max;
    const speed = randomBetween(minSpeed, maxSpeed);
    const clearScreenGeneratedKey = `ClearScreen${Math.random()}`;
    entities.created.createdClearScreens.push(clearScreenGeneratedKey);
    entities[clearScreenGeneratedKey] = { body, speed, renderer: ClearScreen };

    const minDensity = entities.levelsystem.density.clearScreen.min;
    const maxDensity = entities.levelsystem.density.clearScreen.max;
    const density = calcDensity(1 / randomBetween(minDensity, maxDensity));
    clearScreenDensity = density;
    clearScreenIterator = 0;
  }
  if (clockIterator === clockDensity) {
    const randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let body = Create_Clock_Matter(randomHorizontalPos, 0);
    const minSpeed = entities.levelsystem.speed.health.min;
    const maxSpeed = entities.levelsystem.speed.health.max;
    const speed = randomBetween(minSpeed, maxSpeed);
    const clockGeneratedKey = `Clock${Math.random()}`;
    entities.created.createdClocks.push(clockGeneratedKey);
    entities[clockGeneratedKey] = { body, speed, renderer: Clock };

    const minDensity = entities.levelsystem.density.clock.min;
    const maxDensity = entities.levelsystem.density.clock.max;
    const density = calcDensity(1 / randomBetween(minDensity, maxDensity));
    clockDensity = density;
    clockIterator = 0;
  }
  if (healthIterator === healthDensity) {
    const randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let body = Create_Health_Matter(randomHorizontalPos, 0);
    const minSpeed = entities.levelsystem.speed.clock.min;
    const maxSpeed = entities.levelsystem.speed.clock.max;
    const speed = randomBetween(minSpeed, maxSpeed);
    const healthGeneratedKey = `Health${Math.random()}`;
    entities.created.createdHealths.push(healthGeneratedKey);
    entities[healthGeneratedKey] = { body, speed, renderer: Health };

    const minDensity = entities.levelsystem.density.health.min;
    const maxDensity = entities.levelsystem.density.health.max;
    const density = calcDensity(1 / randomBetween(minDensity, maxDensity));
    healthDensity = density;
    healthIterator = 0;
  }

  clearScreenIterator++;
  clockIterator++;
  healthIterator++;

  return entities;
};

export const RemovePowerUps = (entities, {}) => {
  for (clearScreen of entities.created.createdClearScreens) {
    if (outsideOfVerticalBounds(entities[clearScreen].body.bounds)) {
      delete entities[clearScreen];
      const index = entities.created.createdClearScreens.indexOf(clearScreen);
      entities.created.createdClearScreens.splice(index, 1);
    }
  }
  for (clock of entities.created.createdClocks) {
    if (outsideOfVerticalBounds(entities[clock].body.bounds)) {
      delete entities[clock];
      const index = entities.created.createdClocks.indexOf(clock);
      entities.created.createdClocks.splice(index, 1);
    }
  }
  for (health of entities.created.createdHealths) {
    if (outsideOfVerticalBounds(entities[health].body.bounds)) {
      delete entities[health];
      const index = entities.created.createdHealths.indexOf(health);
      entities.created.createdHealths.splice(index, 1);
    }
  }
  return entities;
};

export const MovePowerUps = (entities, {}) => {
  for (clearScreen of entities.created.createdClearScreens) {
    const body = entities[clearScreen].body;
    const speed = entities[clearScreen].speed;
    Matter.Body.translate(body, { x: 0, y: speed });
  }
  for (clock of entities.created.createdClocks) {
    const body = entities[clock].body;
    const speed = entities[clock].speed;
    Matter.Body.translate(body, { x: 0, y: speed });
  }
  for (health of entities.created.createdHealths) {
    const body = entities[health].body;
    const speed = entities[health].speed;
    Matter.Body.translate(body, { x: 0, y: speed });
  }
  return entities;
};

export const AddPowerUps = (entities, { touches, dispatch }) => {
  let touchPositions = [];
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      const touchPosition = { x: t.event.pageX, y: t.event.pageY };
      touchPositions.push(touchPosition);
    });

  if (touchPositions.length !== 0) {
    for (let i = 0; i < touchPositions.length; i++) {
      const touchPosition = touchPositions[i];
      for (clearScreen of entities.created.createdClearScreens) {
        const bounds = entities[clearScreen].body.bounds;
        if (touchWithinBounds(bounds, touchPosition)) {
          delete entities[clearScreen];
          const index = entities.created.createdClearScreens.indexOf(
            clearScreen
          );
          entities.created.createdClearScreens.splice(index, 1);
          dispatch({ type: 'addPowerUpToBar', value: 'clearScreen' });
        }
      }
      for (clock of entities.created.createdClocks) {
        const bounds = entities[clock].body.bounds;
        if (touchWithinBounds(bounds, touchPosition)) {
          delete entities[clock];
          const index = entities.created.createdClocks.indexOf(clock);
          entities.created.createdClocks.splice(index, 1);
          dispatch({ type: 'addPowerUpToBar', value: 'clock' });
        }
      }
      for (health of entities.created.createdHealths) {
        const bounds = entities[health].body.bounds;
        if (touchWithinBounds(bounds, touchPosition)) {
          delete entities[health];
          const index = entities.created.createdHealths.indexOf(health);
          entities.created.createdHealths.splice(index, 1);
          dispatch({ type: 'addPowerUpToBar', value: 'health' });
        }
      }
    }
  }
  return entities;
};

// TODO :: REFACTOR POWERUP EFFECT HANDLING

let clearScreenActive = false;
let clearScreenIterations = 0;

export const ExecutePowerUps = (entities, { touches, dispatch, events }) => {
  if (clearScreenActive) {
    if (clearScreenIterations === 60) {
      clearScreenActive = false;
      clearScreenIterations = 0;
    } else {
      for (asteroid of entities.created.createdAsteroids) {
        if (entities[asteroid]) {
          delete entities[asteroid];
          const index = entities.created.createdAsteroids.indexOf(asteroid);
          entities.created.createdAsteroids.splice(index, 1);
          dispatch({ type: 'setScore', value: 10 });
        }
      }
      clearScreenIterations++;
    }
  }

  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'effectClearScreens') {
        clearScreenActive = true;
      }
    }
  }
  return entities;
};
