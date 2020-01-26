import Matter from 'matter-js';
import { PsycheRover } from '../game/renderers';

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
      let body = Matter.Bodies.rectangle(
        t.event.pageX,
        t.event.pageY,
        boxSize,
        boxSize,
        { frictionAir: 0.021, restitution: 1.0 }
      );
      Matter.World.add(world, [body]);
      entities[++boxIds] = {
        body: body,
        size: [boxSize, boxSize],
        color: 'black',
        renderer: PsycheRover
      };
    });
  return entities;
};

const Physics = (entities, { time }) => {
  let engine = entities['physics'].engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export { MoveFinger, CreateBox, Physics };
