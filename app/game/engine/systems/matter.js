import Matter from 'matter-js';

// NOTE :: SYSTEMS

export const Physics = (entities, { time }) => {
  const engine = entities['physics'].engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};
