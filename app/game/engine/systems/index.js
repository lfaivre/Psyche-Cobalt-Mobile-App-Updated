import { Physics } from './physics';
import { SystemPhase, SystemHealth, SystemScore } from './base';
import {
  DeployPowerUps,
  RemovePowerUps,
  MovePowerUps,
  AddPowerUps,
  ExecutePowerUps
} from './powerups';
import {
  DeployAsteroids,
  DestroyAsteroids,
  RemoveAsteroids,
  MoveAsteroids,
  RemoveCollidedAsteroids
} from './dangerAsteroids';

export const systems = [
  Physics,
  SystemPhase,
  SystemHealth,
  SystemScore,
  DeployPowerUps,
  RemovePowerUps,
  MovePowerUps,
  AddPowerUps,
  ExecutePowerUps,
  DeployAsteroids,
  DestroyAsteroids,
  RemoveAsteroids,
  MoveAsteroids,
  RemoveCollidedAsteroids
];
