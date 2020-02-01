import Matter from 'matter-js';

// INSTANTIATE ENGINE AND WORLD
const ENGINE = Matter.Engine.create({ enableSleeping: false });
const WORLD = ENGINE.world;
// ENGINE.world.gravity.y = ENGINE.world.gravity.x;
// ENGINE.world.gravity.x = ENGINE.world.gravity.y;
export { ENGINE, WORLD };
