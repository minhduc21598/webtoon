import { createStackNavigator, createAppContainer } from 'react-navigation';
import Footer from './src/component/Footer';
import DetailAnime from './src/screen/DetailAnime';

const makeRoot = createStackNavigator(
  {
    Footer: {
      screen: Footer
    },
    DetailAnime: {
      screen: DetailAnime
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(makeRoot);