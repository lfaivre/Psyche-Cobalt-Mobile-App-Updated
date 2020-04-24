import { SCREEN_WIDTH } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_VERTICAL,
  BUTTON_SIZE,
} from './_variables.style';

export default {
  outerContainer: {
    flex: 1,
    backgroundColor: PSYCHETAP_COLORS.DarkGray,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleText: {
    marginVertical: SPACING_VERTICAL.Small,
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Medium,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
  },
  factText: {
    width: Math.floor(SCREEN_WIDTH * 0.75),
    marginVertical: SPACING_VERTICAL.Small,
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.XSmall,
    fontFamily: Fonts.RobotoThin,
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
    marginVertical: SPACING_VERTICAL.Small,
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
    marginVertical: SPACING_VERTICAL.Small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tutorialButtonText: {
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
};
