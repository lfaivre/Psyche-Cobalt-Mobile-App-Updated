import Matter from 'matter-js';
import { Asteroid } from './renderers/Asteroid';

let boxIds = 0;

const CreateBox = (entities, { touches, screen }) => {
  let world = entities['physics'].world;
  let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075);
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      console.log('GAME: CREATE BOX');
      let body = Matter.Bodies.circle(
        t.event.pageX,
        t.event.pageY,
        boxSize / 2
      );
      Matter.World.add(world, [body]);
      entities[++boxIds] = {
        body: body,
        size: [boxSize, boxSize],
        color: '#bfbfbf',
        renderer: Asteroid
      };
    });
  return entities;
};

const Physics = (entities, { time }) => {
  let engine = entities['physics'].engine;
  // engine.world.gravity.y = 0;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export { CreateBox, Physics };
