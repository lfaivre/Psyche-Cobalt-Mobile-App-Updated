import Matter from 'matter-js';
import { Asteroid, Create_Asteroid_Matter } from './renderers/Asteroid';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../game/utilities';
import { ENGINE, WORLD } from './init';

let boxIds = 0;

const CreateBox = (entities, { touches, screen }) => {
  // touches
  //   .filter(t => t.type === 'press')
  //   .forEach(t => {
  //     // console.log('GAME: CREATE BOX');
  //     let body = Create_Asteroid_Matter(
  //       t.event.pageX,
  //       t.event.pageY,
  //       Math.trunc(Math.max(screen.width, screen.height) * 0.075) / 2
  //     );
  //     // console.log(`TYPE OF ENTITIES: ${typeof entities}`);
  //     entities[++boxIds] = {
  //       body: body,
  //       renderer: Asteroid
  //     };
  //   });
  return entities;
};

const Physics = (entities, { time }) => {
  let engine = entities['physics'].engine;
  engine.world.gravity.y = 0;
  // Matter.Engine.update(engine, time.delta * 0.125);
  Matter.Engine.update(engine, time.delta);
  return entities;
};

// START: DEPLOY ASTEROIDS

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const calcFrameRate = asteroidsPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / asteroidsPerSecond);
};

let frameCounter = 0;
let frameRate = calcFrameRate(0.25);

const DeployAsteroids = (entities, { touches, screen }) => {
  frameCounter++;
  if (frameCounter === frameRate) {
    let randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    let randomVerticalPos = randomBetween(0, SCREEN_HEIGHT - 1);
    // console.log(
    //   `GENERATE ASTEROID - Horizontal Position: ${randomHorizontalPos}\n`
    // );

    let body = Create_Asteroid_Matter(
      randomHorizontalPos,
      randomVerticalPos,
      Math.trunc(Math.max(screen.width, screen.height) * 0.25) / 2
    );

    entities[++boxIds] = {
      body: body,
      renderer: Asteroid
    };

    frameCounter = 0;
  }
  return entities;
};

// GOAL: Remove asteroid entity on tap

const matterBounds = {
  max: {
    x: 383.5,
    y: 201.5
  },
  min: {
    x: 283.5,
    y: 173.5
  }
};

const touchWithinBounds = (asteroidBodyBounds, touchPosition) => {
  if (
    touchPosition.x <= asteroidBodyBounds.max.x + 50 &&
    touchPosition.x >= asteroidBodyBounds.min.x - 50 &&
    touchPosition.y <= asteroidBodyBounds.max.y + 50 &&
    touchPosition.y >= asteroidBodyBounds.min.y - 50
  ) {
    console.log('HIT!');
    return true;
  }
  console.log('MISS!');
  return false;
};

const DestroyAsteroids = (entities, { touches, screen }) => {
  let touchPositions = [];
  // let entitiesCopy = entities.psycheRover;
  // console.log('boxIds: ', boxIds);
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      const touchPosition = {
        x: t.event.pageX,
        y: t.event.pageY
      };
      touchPositions.push(touchPosition);
    });
  if (touchPositions.length !== 0) {
    for (let i = 0; i < touchPositions.length; i++) {
      const touchPosition = touchPositions[i];
      // console.log('TOUCH POSITION: ', touchPosition);

      for (let id = 0; id < boxIds; id++) {
        const asteroidBody = entities[id];
        let asteroidBodyBounds = {};
        // console.log('asteroidBody: ', asteroidBody);

        if (entities[id]) {
          if (entities[id].body !== undefined) {
            // console.log('CHECK 1');
            asteroidBodyBounds = entities[id].body.bounds;
            // console.log('asteroidBodyBounds: ', asteroidBodyBounds);

            if (touchWithinBounds(asteroidBodyBounds, touchPosition)) {
              // console.log('CHECK 2');
              Matter.World.remove(WORLD, entities[id].body);
              // console.log('CHECK 3');
              delete entities[id];
            }
          }
        }
      }
    }
  }
  return entities;
};

// TODO: Remove asteroids from memory once top of asteroid is greater than sceen height

export { CreateBox, Physics, DeployAsteroids, DestroyAsteroids };
