import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import HomeScreen from './container/homeScreen.js';
import TeamScreen from './container/teamScreen.js';

const RootNavigator = createStackNavigator({
    Home: ListScreen,
    Players: ListScreen,
    Teams: TeamScreen,
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 
});

export default createAppContainer(RootNavigator);