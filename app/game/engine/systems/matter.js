import Matter from 'matter-js';

// NOTE :: SYSTEMS

export const Physics = (entities, { time }) => {
  const engine = entities['physics'].engine;
  // TODO: Move gravity to init
  engine.world.gravity.y = 0;
  Matter.Engine.update(engine, time.delta);
  return entities;
};
