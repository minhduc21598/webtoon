import { createStackNavigator, createAppContainer } from 'react-navigation';
import Footer from './src/component/Footer';

const makeRoot = createStackNavigator(
  {
    Footer: {
      screen: Footer
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(makeRoot);