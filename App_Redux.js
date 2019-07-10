import { createStackNavigator, createAppContainer } from 'react-navigation';
import Screen1 from './src_demo_Redux/screen/Screen1';
import Screen2 from './src_demo_Redux/screen/Screen2';
import Screen3 from './src_demo_Redux/screen/Screen3';

const makeRoot = createStackNavigator(
    {
        Screen1: {
            screen: Screen1
        },
        Screen2: {
            screen: Screen2
        },
        Screen3: {
            screen: Screen3
        },
    },
    {
        headerMode: 'none'
    }
)

export default createAppContainer(makeRoot);