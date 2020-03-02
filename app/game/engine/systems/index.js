import { Physics } from './physics';
import { SystemPhase, SystemHealth, SystemScore, SystemLevels } from './base';
import {
  DeployPowerUps,
  RemovePowerUps,
  MovePowerUps,
  AddPowerUps,
  ExecutePowerUps
} from './powerups';
import {
  DeployDangers,
  RemoveDangers,
  DestroyDangers,
  MoveDangers,
  RemoveCollidedDangers
} from './dangers';

export const systems = [
  Physics,
  SystemPhase,
  SystemHealth,
  SystemScore,
  SystemLevels,
  DeployPowerUps,
  RemovePowerUps,
  MovePowerUps,
  AddPowerUps,
  ExecutePowerUps,
  DeployDangers,
  RemoveDangers,
  DestroyDangers,
  MoveDangers,
  RemoveCollidedDangers
];
