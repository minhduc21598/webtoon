import React from 'react';
import { AppRegistry } from 'react-native';
import RootNav from './RootNav';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/stores/Stores';

const App = () => (
    <Provider
        store = {store}
    >
        <RootNav/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
