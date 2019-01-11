import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import HomeScreen from './container/homeScreen.js';
import TeamScreen from './container/teamScreen.js';
import PlayersScreen from './container/playersScreen';

const RootNavigator = createStackNavigator({
    Home: HomeScreen,
    Players: PlayersScreen,
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