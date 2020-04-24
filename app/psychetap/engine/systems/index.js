import { Physics } from './physics';
import { Reset } from './reset';
import { SystemPhase, SystemHealth, SystemScore, SystemLevels } from './base';
import {
  DeployPowerUps,
  RemovePowerUps,
  MovePowerUps,
  AddPowerUps,
  ExecutePowerUps,
} from './powerups';
import {
  DeployDangers,
  RemoveDangers,
  DestroyDangers,
  MoveDangers,
  RemoveCollidedDangers,
} from './dangers';

export const SYSTEMS = [
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
  RemoveCollidedDangers,
];

export const RESET_SYSTEMS = Reset;
