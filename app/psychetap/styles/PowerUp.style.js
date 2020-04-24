import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_HORIZONTAL,
  BUTTON_SIZE,
} from './_variables.style';

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
