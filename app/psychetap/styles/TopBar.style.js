import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_HORIZONTAL,
  BUTTON_SIZE,
} from './_variables.style';

export default {
  topBarContainer: {
    height: SCREEN_HEIGHT * (1 / 8),
    width: SCREEN_WIDTH - 2 * SPACING_HORIZONTAL.XXSmall,
    marginVertical: SPACING_HORIZONTAL.XXSmall,
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuButton: {
    height: BUTTON_SIZE.SmallRound.Height,
    width: BUTTON_SIZE.SmallRound.Width,
    borderRadius: BUTTON_SIZE.SmallRound.BorderRadius,
    borderWidth: 2,
    borderColor: PSYCHETAP_COLORS.White,
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonText: {
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.XSmall,
    fontFamily: Fonts.BungeeRegular,
  },
};
