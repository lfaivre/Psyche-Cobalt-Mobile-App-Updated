import { ENGINE, WORLD } from './physicsInit.js';
import { PsycheRover, PsycheRover_Matter } from './renderers/PsycheRover.js';

// NOTE :: RNGE - DEFAULT ENTITIES
export const defaultEntities = () => {
  return {
    physics: {
      engine: ENGINE,
      world: WORLD
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
