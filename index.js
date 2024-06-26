/**
 * @format
 */

import { AppRegistry, Platform, UIManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';


if (Platform.OS === 'android') {
  // ios布局动画

  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

}

AppRegistry.registerComponent(appName, () => App);
