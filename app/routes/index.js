import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from '../components/SideMenu';

// NOTE :: IMPORT SCREENS
import HomeScreen from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import OverviewScreen from '../screens/OverviewScreen';
import AsteroidScreen from '../screens/AsteroidScreen';
import SpacecraftScreen from '../screens/SpacecraftScreen';
import ScienceScreen from '../screens/ScienceScreen';
import TeamScreen from '../screens/TeamScreen';
import PsycheTapScreen from '../screens/PsycheTapScreen';

// NOTE :: CONFIGURE ROUTES & DRAWER NAVIGATOR
const RouteConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Timeline: {
    screen: TimelineScreen,
  },
  'Social Media': {
    screen: SocialMediaScreen,
  },
  Overview: {
    screen: OverviewScreen,
  },
  'The Asteroid': {
    screen: AsteroidScreen,
  },
  'The Spacecraft': {
    screen: SpacecraftScreen,
  },
  'Instruments and Science': {
    screen: ScienceScreen,
  },
  'The Team': {
    screen: TeamScreen,
  },
  PsycheTap: {
    screen: PsycheTapScreen,
  },
};

const DrawerNavigatorConfig = {
  initialRouteName: 'Home',
  contentComponent: SideMenu,
  drawerOpenRoute: 'openDrawer',
  drawerCloseRoute: 'closeDrawer',
  drawerToggleRoute: 'toggleDrawer',
};

// NOTE :: CREATE DRAWER NAVIGATOR FROM CONFIGURATION
const RootDrawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

// NOTE :: CREATE AND EXPORT APP CONTAINER (FROM DRAWER NAVIGATOR)
const AppContainer = createAppContainer(RootDrawer);
export default AppContainer;
