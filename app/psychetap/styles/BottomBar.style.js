import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_HORIZONTAL,
  BUTTON_SIZE,
} from './_variables.style';

export default {
  bottomBarContainer: {
    height: SCREEN_HEIGHT * (3 / 16),
    width: SCREEN_WIDTH - 2 * SPACING_HORIZONTAL.XXSmall,
    marginVertical: SPACING_HORIZONTAL.XXSmall,
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    position: 'absolute',
    top:
      SCREEN_HEIGHT - SCREEN_HEIGHT * (3 / 16) - 2 * SPACING_HORIZONTAL.XXSmall,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  powerUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  powerUpCircle: {
    height: BUTTON_SIZE.MediumRound.Height,
    width: BUTTON_SIZE.MediumRound.Width,
    padding: SPACING_HORIZONTAL.XXSmall,
    borderRadius: BUTTON_SIZE.MediumRound.BorderRadius,
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: PSYCHETAP_COLORS.White,
  },
  healthContainer: {
    width: SCREEN_WIDTH * (1 / 2),
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  healthText: {
    marginBottom: SPACING_HORIZONTAL.XXSmall,
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.XSmall,
    fontFamily: Fonts.BungeeRegular,
  },
  healthBar: {
    height: SCREEN_HEIGHT * (1 / 32),
    borderRadius: SCREEN_HEIGHT * (1 / 64),
    backgroundColor: PSYCHETAP_COLORS.LightGreen,
  },
};
