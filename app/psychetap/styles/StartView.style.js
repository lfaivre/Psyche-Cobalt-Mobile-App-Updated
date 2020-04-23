import { Fonts } from '../../components/Fonts';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING,
  BUTTON_SIZE,
} from './_variables.style';

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
    justifyContent: 'center',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'relative',
  },
  titleTextOne: {
    marginVertical: SPACING.Small,
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Large,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
  },
  titleTextTwo: {
    position: 'absolute',
    top: 4,
    left: 4,
    marginVertical: SPACING.Small,
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Large,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  startButton: {
    height: BUTTON_SIZE.Large.Height,
    width: BUTTON_SIZE.Large.Width,
    borderWidth: 1,
    borderColor: PSYCHETAP_COLORS.LightPurple,
    marginVertical: SPACING.Small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.LightPurple,
  },
  startButtonText: {
    color: PSYCHETAP_COLORS.DarkGray,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
  tutorialButton: {
    height: BUTTON_SIZE.Small.Height,
    width: BUTTON_SIZE.Small.Width,
    borderWidth: 1,
    borderColor: PSYCHETAP_COLORS.LightPurple,
    marginVertical: SPACING.Small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tutorialButtonText: {
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
};
