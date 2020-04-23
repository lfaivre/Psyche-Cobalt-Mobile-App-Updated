import { Fonts } from '../../components/Fonts';
import { PSYCHETAP_COLORS, FONT_SIZE } from './_variables.style';

export default {
  outerContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.DarkGray,
  },
  loadingText: {
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
  },
  innerContainer: {
    flex: 1,
  },
};
