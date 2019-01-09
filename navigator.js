import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import ListScreen from './container/listScreen.js';
import HomeScreen from './container/homeScreen.js';
import TeamScreen from './container/teamScreen.js';
import NewPlayerScreen from './container/newPlayerScreen.js';

const RootNavigator = createStackNavigator({
    Home: HomeScreen,
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