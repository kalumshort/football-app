// importing the needed components for use of the navigation 
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

// importing the diffrent screens that will be used
import HomeScreen from './container/homeScreen.js';
import TeamScreen from './container/teamScreen.js';
import PlayersScreen from './container/playersScreen';

const RootNavigator = createStackNavigator({
    Home: HomeScreen,
    Players: PlayersScreen,
    Teams: TeamScreen,
},{
    // creating default header styling 
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: 'black'
    } 
});

export default createAppContainer(RootNavigator);