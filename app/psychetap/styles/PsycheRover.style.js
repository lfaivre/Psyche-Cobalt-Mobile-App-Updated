import { SCREEN_HEIGHT } from '../../psychetap/utilities';

export default {
  psycheRover: {
    position: 'absolute',
    bottom: 10,
    top: Math.trunc(-SCREEN_HEIGHT / 3.7),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
};
