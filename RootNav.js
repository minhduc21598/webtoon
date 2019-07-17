import { createStackNavigator, createAppContainer } from 'react-navigation';
import Footer from './src/component/Footer';
import Policy from './src/screen/Policy';

const makeRoot = createStackNavigator(
  {
    Footer: {
      screen: Footer
    },
    Policy:{
      screen: Policy
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(makeRoot);