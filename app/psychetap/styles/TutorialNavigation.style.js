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
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH - 2 * SPACING_HORIZONTAL.XXSmall,
    marginVertical: SPACING_HORIZONTAL.XXSmall,
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    position: 'absolute',
    top:
      SCREEN_HEIGHT - SCREEN_HEIGHT * (1 / 8) - 2 * SPACING_HORIZONTAL.XXSmall,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    height: BUTTON_SIZE.Small.Height,
    width: BUTTON_SIZE.Small.Width,
    borderRadius: BUTTON_SIZE.Small.BorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.LightPurple,
  },
  text: {
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
};
