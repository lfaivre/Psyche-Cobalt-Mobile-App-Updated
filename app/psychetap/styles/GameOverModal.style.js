import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_VERTICAL,
  BUTTON_SIZE,
} from './_variables.style';

export default {
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.DarkGrayModal,
  },
  titleText: {
    marginVertical: SPACING_VERTICAL.Small,
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Medium,
    fontFamily: Fonts.BungeeRegular,
  },
  scoreText: {
    marginVertical: SPACING_VERTICAL.Small,
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  restartButton: {
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
  restartButtonText: {
    color: PSYCHETAP_COLORS.DarkGray,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
  exitButton: {
    height: BUTTON_SIZE.Small.Height,
    width: BUTTON_SIZE.Small.Width,
    borderWidth: BUTTON_SIZE.Small.BorderWidth,
    borderRadius: BUTTON_SIZE.Small.BorderRadius,
    borderColor: PSYCHETAP_COLORS.LightPurple,
    marginVertical: SPACING_VERTICAL.Small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButtonText: {
    color: PSYCHETAP_COLORS.LightPurple,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
};
