import Matter from 'matter-js';
import { Asteroid, Create_Asteroid_Matter } from './renderers/Asteroid';

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
      console.log(`TYPE OF ENTITIES: ${typeof entities}`);
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
  Matter.Engine.update(engine, time.delta * 0.125);
  return entities;
};

export { CreateBox, Physics };
