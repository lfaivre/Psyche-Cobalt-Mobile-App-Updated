import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import {
  PSYCHETAP_COLORS,
  FONT_SIZE,
  SPACING_VERTICAL,
  SPACING_HORIZONTAL,
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
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exitButton: {
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
  exitButtonText: {
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
  cancelButton: {
    height: BUTTON_SIZE.Small.Height,
    width: BUTTON_SIZE.Small.Width,
    marginVertical: SPACING_VERTICAL.Small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PSYCHETAP_COLORS.Transparent,
  },
  cancelButtonText: {
    color: PSYCHETAP_COLORS.White,
    fontSize: FONT_SIZE.Small,
    fontFamily: Fonts.BungeeRegular,
  },
};
