import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../psychetap/utilities';
import { Fonts } from '../../components/Fonts';
import { PSYCHETAP_COLORS, FONT_SIZE } from './_variables.style';

export default {
  topContent: {
    backgroundColor: 'transparent',
  },
  content: {
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    paddingTop: SCREEN_WIDTH * (1 / 128),
    paddingBottom: SCREEN_HEIGHT * (2 / 8) + SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentSection: {
    margin: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    height: SCREEN_HEIGHT * (1 / 8),
    resizeMode: 'contain',
  },
  container: {
    height: SCREEN_HEIGHT * (7 / 8) - SCREEN_WIDTH * (3 / 128),
    width: SCREEN_WIDTH - SCREEN_WIDTH * (2 / 128),
    paddingVertical: SCREEN_WIDTH * (1 / 128),
    paddingHorizontal: SCREEN_WIDTH * (1 / 128),
    marginVertical: SCREEN_WIDTH * (1 / 128),
    marginHorizontal: SCREEN_WIDTH * (1 / 128),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: SCREEN_HEIGHT * (1 / 64),
    fontSize: SCREEN_HEIGHT * (1 / 8),
    fontFamily: Fonts.BungeeRegular,
    textAlign: 'center',
    color: '#bca0dc',
  },
  subtitle: {
    marginVertical: SCREEN_HEIGHT * (1 / 128),
    color: '#bca0dc',
    fontSize: SCREEN_HEIGHT * (1 / 16),
    fontFamily: Fonts.BungeeRegular,
  },
  bodyText: {
    width: Math.floor(SCREEN_WIDTH * 0.75),
    marginVertical: SCREEN_WIDTH * (1 / 64),
    fontSize: SCREEN_HEIGHT * (1 / 20),
    fontFamily: Fonts.RobotoLight,
    textAlign: 'center',
    color: 'white',
  },
};
