import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile100866Navigator from '../features/UserProfile100866/navigator';
import Maps100847Navigator from '../features/Maps100847/navigator';
import Settings100825Navigator from '../features/Settings100825/navigator';
import Settings100810Navigator from '../features/Settings100810/navigator';
import NotificationList100809Navigator from '../features/NotificationList100809/navigator';
import Maps100808Navigator from '../features/Maps100808/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile100866: { screen: UserProfile100866Navigator },
Maps100847: { screen: Maps100847Navigator },
Settings100825: { screen: Settings100825Navigator },
Settings100810: { screen: Settings100810Navigator },
NotificationList100809: { screen: NotificationList100809Navigator },
Maps100808: { screen: Maps100808Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
