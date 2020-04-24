import { Fonts } from '../../components/Fonts';
import { PSYCHETAP_COLORS, FONT_SIZE } from './_variables.style';

export default {
  outerContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.DarkGray,
  },
  loadingText: {
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
    color: PSYCHETAP_COLORS.LightPurple,
  },
  innerContainer: {
    flex: 1,
  },
};
