import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_VERTICAL,
  SPACING_HORIZONTAL,
} from './_variables.style';

export default {
  outerContainer: {
    backgroundColor: PSYCHETAP_COLORS.Transparent,
  },
  innerContainer: {
    width: SCREEN_WIDTH - 2 * SPACING_HORIZONTAL.XXSmall,
    paddingTop: SPACING_HORIZONTAL.XXSmall,
    paddingBottom: SPACING_HORIZONTAL.XXSmall + SCREEN_HEIGHT * (2 / 8),
    paddingHorizontal: SPACING_HORIZONTAL.XXSmall,
    marginVertical: SPACING_HORIZONTAL.XXSmall,
    marginHorizontal: SPACING_HORIZONTAL.XXSmall,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.DarkGray,
  },
  title: {
    width: '100%',
    marginVertical: SPACING_VERTICAL.XSmall,
    fontSize: FONT_SIZE.Medium,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
    color: PSYCHETAP_COLORS.LightPurple,
  },
  section: {
    width: '100%',
    marginBottom: SPACING_HORIZONTAL.XXSmall,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  subtitle: {
    width: '100%',
    marginBottom: SPACING_VERTICAL.XSmall,
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
  },
  outerContent: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  innerContent: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: SPACING_VERTICAL.XSmall,
  },
  text: {
    width: SCREEN_WIDTH * (3 / 4),
    marginBottom: SPACING_VERTICAL.XSmall,
    fontSize: FONT_SIZE.XSmall,
    fontFamily: Fonts.Roboto,
    textAlign: 'left',
    color: PSYCHETAP_COLORS.White,
  },
  image: {
    height: SCREEN_HEIGHT * (1 / 8),
    marginVertical: SPACING_VERTICAL.XSmall,
    resizeMode: 'contain',
  },
};
