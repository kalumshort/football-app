import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import HomeScreen from './container/homeScreen.js';

const RootNavigator = createStackNavigator({
    Home: HomeScreen,
    Players: ListScreen,
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 
});

export default createAppContainer(RootNavigator);