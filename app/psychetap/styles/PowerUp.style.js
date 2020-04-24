import { BUTTON_SIZE } from './_variables.style';

export default {
  outerContainer: {
    flex: 1,
    borderRadius: BUTTON_SIZE.MediumRound.BorderRadius,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
};
