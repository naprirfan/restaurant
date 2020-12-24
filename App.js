import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';
import MapScreen from './src/screens/MapScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultDetail: ResultDetailScreen,
  Map: MapScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search',
  }
});

export default createAppContainer(navigator);
