import Matter from 'matter-js';

// NOTE :: MATTERJS - INSTANTIATE ENGINE AND WORLD
const ENGINE = Matter.Engine.create({ enableSleeping: false });
const WORLD = ENGINE.world;

// NOTE :: MATTERJS - SET ENGINE AND WORLD SETTINGS
ENGINE.world.gravity.x = 0;
ENGINE.world.gravity.y = 0;

export { ENGINE, WORLD };
