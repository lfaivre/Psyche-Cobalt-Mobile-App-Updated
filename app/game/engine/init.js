import { ENGINE, WORLD } from './physicsInit.js';
import { PsycheRover, PsycheRover_Matter } from './renderers/PsycheRover.js';
import { randomBetween, calcDensity } from '../utilities';

// NOTE :: DEFAULT GAME VALUES

export const GAME_DEFAULTS = {
  player: {
    health: 100,
    score: 0,
    level: 0
  },
  levelsystem: {
    speed: {
      asteroid: { min: 2, max: 3 },
      clearScreen: { min: 4, max: 6 },
      health: { min: 4, max: 6 },
      clock: { min: 4, max: 6 }
    },
    density: {
      asteroid: { min: 2, max: 2 },
      clearScreen: { min: 8, max: 10 },
      health: { min: 4, max: 6 },
      clock: { min: 6, max: 8 }
    }
  },
  powerUps: ['empty', 'empty', 'empty'],
  clearScreenDensity: calcDensity(1 / randomBetween(8, 10)),
  clockDensity: calcDensity(1 / randomBetween(6, 8)),
  healthDensity: calcDensity(1 / randomBetween(4, 6)),
  asteroidDensity: calcDensity(2)
};

// NOTE :: RNGE - DEFAULT ENTITIES
export const defaultEntities = () => {
  return {
    physics: {
      engine: ENGINE,
      world: WORLD
    },
    player: {
      health: GAME_DEFAULTS.player.health,
      score: GAME_DEFAULTS.player.score,
      level: GAME_DEFAULTS.player.level
    },
    levelsystem: {
      speed: {
        asteroid: GAME_DEFAULTS.levelsystem.speed.asteroid,
        clearScreen: GAME_DEFAULTS.levelsystem.speed.clearScreen,
        health: GAME_DEFAULTS.levelsystem.speed.health,
        clock: GAME_DEFAULTS.levelsystem.speed.clock
      },
      density: {
        asteroid: GAME_DEFAULTS.levelsystem.density.asteroid,
        clearScreen: GAME_DEFAULTS.levelsystem.density.clearScreen,
        health: GAME_DEFAULTS.levelsystem.density.health,
        clock: GAME_DEFAULTS.levelsystem.density.clock
      }
    },
    created: {
      createdAsteroids: [],
      createdClearScreens: [],
      createdHealths: [],
      createdClocks: []
    },
    destroy: {
      destroyAsteroids: []
    },
    psycheRover: {
      body: PsycheRover_Matter,
      renderer: PsycheRover
    }
  };
};
