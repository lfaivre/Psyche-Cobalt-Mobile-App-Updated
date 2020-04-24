import { ENGINE, WORLD } from './physicsInit.js';
import { PsycheRover, PsycheRover_Matter } from './renderers/PsycheRover.js';
import { randomBetween, calcDensity } from '../utilities';

// NOTE :: DEFAULT GAME VALUES

export const POWERUP_ENUM = Object.freeze({
  clearScreen: 'clearScreen',
  clock: 'clock',
  health: 'health',
  empty: 'empty',
});

export const GAME_DEFAULTS = {
  player: {
    health: 100,
    score: 0,
    level: 0,
  },
  levelsystem: {
    speed: {
      asteroid: { min: 2, max: 3 },
      truck: { min: 4, max: 6 },
      rubberDuck: { min: 4, max: 5 },
      clearScreen: { min: 4, max: 6 },
      health: { min: 4, max: 6 },
      clock: { min: 4, max: 6 },
    },
    density: {
      asteroid: { min: 2, max: 2 },
      truck: { min: 10, max: 10 },
      rubberDuck: { min: 8, max: 8 },
      clearScreen: { min: 8, max: 10 },
      health: { min: 4, max: 6 },
      clock: { min: 6, max: 8 },
    },
  },
  powerUps: [POWERUP_ENUM.empty, POWERUP_ENUM.empty, POWERUP_ENUM.empty],
  clearScreenDensity: calcDensity(1 / randomBetween(8, 10)),
  clockDensity: calcDensity(1 / randomBetween(6, 8)),
  healthDensity: calcDensity(1 / randomBetween(4, 6)),
  asteroidDensity: calcDensity(2),
  truckDensity: calcDensity(1 / 10),
  rubberDuckDensity: calcDensity(1 / 8),
};

// NOTE :: RNGE - DEFAULT ENTITIES
export const defaultEntities = () => {
  return {
    physics: {
      engine: ENGINE,
      world: WORLD,
    },
    player: {
      health: GAME_DEFAULTS.player.health,
      score: GAME_DEFAULTS.player.score,
      level: GAME_DEFAULTS.player.level,
    },
    levelsystem: {
      speed: {
        asteroid: GAME_DEFAULTS.levelsystem.speed.asteroid,
        truck: GAME_DEFAULTS.levelsystem.speed.truck,
        rubberDuck: GAME_DEFAULTS.levelsystem.speed.rubberDuck,
        clearScreen: GAME_DEFAULTS.levelsystem.speed.clearScreen,
        health: GAME_DEFAULTS.levelsystem.speed.health,
        clock: GAME_DEFAULTS.levelsystem.speed.clock,
      },
      density: {
        asteroid: GAME_DEFAULTS.levelsystem.density.asteroid,
        truck: GAME_DEFAULTS.levelsystem.density.truck,
        rubberDuck: GAME_DEFAULTS.levelsystem.density.rubberDuck,
        clearScreen: GAME_DEFAULTS.levelsystem.density.clearScreen,
        health: GAME_DEFAULTS.levelsystem.density.health,
        clock: GAME_DEFAULTS.levelsystem.density.clock,
      },
    },
    created: {
      createdAsteroids: [],
      createdTrucks: [],
      createdRubberDucks: [],
      createdClearScreens: [],
      createdHealths: [],
      createdClocks: [],
    },
    destroy: {
      destroyDangers: [],
    },
    psycheRover: {
      body: PsycheRover_Matter,
      renderer: PsycheRover,
    },
  };
};
