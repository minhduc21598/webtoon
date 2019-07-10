/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import RootNav from './RootNav';
import { name as appName } from './app.json';
import GenresOri from './src/screen/GenresOri';
import App_Redux from './App_Redux';
import { Provider } from 'react-redux';
import store from './src_demo_Redux/stores/stores';

// const App = () => (
//     <Provider
//         store={store}
//     >
//         <App_Redux />
//     </Provider>
// )

AppRegistry.registerComponent(appName, () => RootNav)