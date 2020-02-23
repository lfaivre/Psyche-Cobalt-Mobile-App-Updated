// NOTE :: TEMPORARY FILE (WILL REFACTOR)

// NOTE :: VARIABLES

let resetRunning = false;
let resetIterations = 0;

// NOTE :: SYSTEMS

export const Reset = (entities, { touches, dispatch, events }) => {
  if (resetRunning) {
    if (resetIterations === 60) {
      resetRunning = false;
      resetIterations = 0;
      if (entities.physics) delete entities['physics'];
      if (entities.created) delete entities['created'];
      if (entities.destroy) delete entities['destroy'];
      if (entities.psycheRover) delete entities['psycheRover'];
      dispatch({ type: 'endCleanup' });
    } else {
      for (asteroid of entities.created.createdAsteroids) {
        if (entities[asteroid]) {
          delete entities[asteroid];
          entities.created.createdAsteroids.splice(
            entities.created.createdAsteroids.indexOf(asteroid),
            1
          );
        }
      }
      for (clearScreen of entities.created.createdClearScreens) {
        if (entities[clearScreen]) {
          delete entities[clearScreen];
          entities.created.createdClearScreens.splice(
            entities.created.createdClearScreens.indexOf(clearScreen),
            1
          );
        }
      }
      for (health of entities.created.createdHealths) {
        if (entities[health]) {
          delete entities[health];
          entities.created.createdHealths.splice(
            entities.created.createdHealths.indexOf(health),
            1
          );
        }
      }
      for (clock of entities.created.createdClocks) {
        if (entities[clock]) {
          delete entities[clock];
          entities.created.createdClocks.splice(
            entities.created.createdClocks.indexOf(clock),
            1
          );
        }
      }
      resetIterations++;
    }
  }
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === 'beginCleanup') {
        resetRunning = true;
      }
    }
  }
  return entities;
};
