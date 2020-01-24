import HomeScreen from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import SocialMediaScreen from '../screens/SocialMediaScreen';
import OverviewScreen from '../screens/OverviewScreen';
import AsteroidScreen from '../screens/AsteroidScreen';
import SpacecraftScreen from '../screens/SpacecraftScreen';
import ScienceScreen from '../screens/ScienceScreen';
import TeamScreen from '../screens/TeamScreen';

import SideMenu from '../components/SideMenu';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const RouteConfigs = {
  Home: {
    screen: HomeScreen
  },
  Timeline: {
    screen: TimelineScreen
  },
  'Social Media': {
    screen: SocialMediaScreen
  },
  Overview: {
    screen: OverviewScreen
  },
  'The Asteroid': {
    screen: AsteroidScreen
  },
  'The Spacecraft': {
    screen: SpacecraftScreen
  },
  'Instruments and Science': {
    screen: ScienceScreen
  },
  'The Team': {
    screen: TeamScreen
  }
};

const DrawerNavigatorConfig = {
  initialRouteName: 'Home', // Set diff for testing right now
  contentComponent: SideMenu,
  drawerOpenRoute: 'openDrawer',
  drawerCloseRoute: 'closeDrawer',
  drawerToggleRoute: 'toggleDrawer'
};

const RootDrawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

const AppContainer = createAppContainer(RootDrawer);
export default AppContainer;
