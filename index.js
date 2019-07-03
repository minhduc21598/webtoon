/**
 * @format
 */

import {AppRegistry} from 'react-native';
import RootNav from './RootNav';
import {name as appName} from './app.json';
import Originals from './src/screen/Originals';
import Canvas from './src/screen/Canvas';

AppRegistry.registerComponent(appName, () => RootNav);