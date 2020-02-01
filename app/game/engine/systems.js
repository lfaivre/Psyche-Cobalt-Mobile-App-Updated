import Matter from 'matter-js';
import { Asteroid } from './renderers';
import { INITIAL_PSYCHEROVER } from '../utilities';

const MoveFinger = (entities, { touches }) => {
  touches
    .filter(t => t.type === 'move')
    .forEach(t => {
      let finger = entities[t.id];
      if (finger && finger.position) {
        finger.position = [
          finger.position[0] + t.delta.pageX,
          finger.position[1] + t.delta.pageY
        ];
      }
    });
  return entities;
};

let boxIds = 0;

const CreateBox = (entities, { touches, screen }) => {
  let world = entities['physics'].world;
  let boxSize = Math.trunc(Math.max(screen.width, screen.height) * 0.075);
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
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

const Collision = (entities, { time, dispatch }) => {
  let engine = entities['physics'].engine;
  Matter.Events.on(engine, 'collisionStart', function(event) {
    // console.log('START COLLISION');
    // dispatch({ type: 'update' });
  });
  return entities;
};

export { MoveFinger, CreateBox, Physics, Collision };
