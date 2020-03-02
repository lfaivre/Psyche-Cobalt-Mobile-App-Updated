import { ENGINE, WORLD } from './physicsInit.js';
import { PsycheRover, PsycheRover_Matter } from './renderers/PsycheRover.js';

// NOTE :: RNGE - DEFAULT ENTITIES
export const defaultEntities = () => {
  return {
    physics: {
      engine: ENGINE,
      world: WORLD
    },
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
