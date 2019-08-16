import { createStackNavigator, createAppContainer } from 'react-navigation';
import Footer from './src/component/Footer';
import DetailAnime from './src/screen/DetailAnime';
import DetailManga from './src/screen/DetailManga';

const makeRoot = createStackNavigator(
  {
    Footer: {
      screen: Footer
    },
    DetailAnime: {
      screen: DetailAnime
    },
    DetailManga: {
      screen: DetailManga
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(makeRoot);