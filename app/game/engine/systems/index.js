import { Physics } from './physics';
import { SystemPhase, SystemHealth, SystemScore } from './base';
import {
  DeployAsteroids,
  DestroyAsteroids,
  RemoveAsteroids,
  MoveAsteroids,
  RemoveCollidedAsteroids
} from './dangerAsteroids';
import {
  DeployClearScreens,
  RemoveClearScreens,
  AddPowerUpClearScreens,
  ClearScreensEffect,
  MoveClearScreens
} from './powerupClearScreens';
import {
  DeployHealths,
  RemoveHealths,
  AddPowerUpHealths,
  MoveHealths
} from './powerupHealths';

import {
  DeployClocks,
  RemoveClocks,
  AddPowerUpClocks,
  MoveClocks
} from './powerupClocks';

export const systems = [
  Physics,
  SystemPhase,
  SystemHealth,
  SystemScore,
  DeployAsteroids,
  DestroyAsteroids,
  RemoveAsteroids,
  MoveAsteroids,
  RemoveCollidedAsteroids,
  DeployClearScreens,
  RemoveClearScreens,
  AddPowerUpClearScreens,
  ClearScreensEffect,
  MoveClearScreens,
  DeployHealths,
  RemoveHealths,
  AddPowerUpHealths,
  MoveHealths,
  DeployClocks,
  RemoveClocks,
  AddPowerUpClocks,
  MoveClocks
];
