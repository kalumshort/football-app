import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import HomeScreen from './container/homeScreen.js';
import TeamScreen from './container/teamScreen.js';
import PlayersScreen from './container/playersScreen';

const RootNavigator = createStackNavigator({
    Home: PlayersScreen,
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