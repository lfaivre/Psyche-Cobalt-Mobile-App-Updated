import Matter from 'matter-js';
import { Asteroid, Create_Asteroid_Matter } from './renderers/Asteroid';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../game/utilities';

let boxIds = 0;

const CreateBox = (entities, { touches, screen }) => {
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      console.log('GAME: CREATE BOX');
      let body = Create_Asteroid_Matter(
        t.event.pageX,
        t.event.pageY,
        Math.trunc(Math.max(screen.width, screen.height) * 0.075) / 2
      );
      // console.log(`TYPE OF ENTITIES: ${typeof entities}`);
      entities[++boxIds] = {
        body: body,
        renderer: Asteroid
      };
    });
  return entities;
};

const Physics = (entities, { time }) => {
  let engine = entities['physics'].engine;
  // engine.world.gravity.y = 0;
  // Matter.Engine.update(engine, time.delta * 0.125);
  Matter.Engine.update(engine, time.delta);
  return entities;
};

// GOAL: Generate a specified number of asteroids per second

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const calcFrameRate = asteroidsPerSecond => {
  const framesPerSecond = 60;
  return Math.floor(framesPerSecond / asteroidsPerSecond);
};

let frameCounter = 0;
let frameRate = calcFrameRate(4);

const DeployAsteroids = (entities, { touches, screen }) => {
  frameCounter++;
  if (frameCounter === frameRate) {
    let randomHorizontalPos = randomBetween(0, SCREEN_WIDTH - 1);
    // console.log(
    //   `GENERATE ASTEROID - Horizontal Position: ${randomHorizontalPos}\n`
    // );

    let body = Create_Asteroid_Matter(
      randomHorizontalPos,
      0,
      Math.trunc(Math.max(screen.width, screen.height) * 0.075) / 2
    );

    entities[++boxIds] = {
      body: body,
      renderer: Asteroid
    };

    frameCounter = 0;
  }
  return entities;
};

export { CreateBox, Physics, DeployAsteroids };
