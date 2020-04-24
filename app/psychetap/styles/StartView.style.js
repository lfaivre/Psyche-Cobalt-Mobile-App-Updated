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
    marginVertical: SPACING_VERTICAL.Small,
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Large,
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
  },
  titleTextTwo: {
    position: 'absolute',
    top: 4,
    left: 4,
    marginVertical: SPACING_VERTICAL.Small,
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
    borderWidth: BUTTON_SIZE.Large.BorderWidth,
    borderRadius: BUTTON_SIZE.Large.BorderRadius,
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
    borderWidth: BUTTON_SIZE.Small.BorderWidth,
    borderRadius: BUTTON_SIZE.Small.BorderRadius,
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
