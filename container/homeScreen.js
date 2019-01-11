import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableHighlight, } from 'react-native';

// This is the home screen 
class HomeScreen extends Component {
    constructor(props){
        super(props);

        this.onPressPlayers = this.onPressPlayers.bind(this);
        this.onPressTeams = this.onPressTeams.bind(this);
    }
    // setting and styling the header
    static navigationOptions = {
        title: '5-A-Side Randomiser',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }

    
    // When you press the players button it will take you to the player page
    onPressPlayers() {
        this.props.navigation.navigate('Players');

    }
    // When you press the teams button you will be directed to the teams page
    onPressTeams() {
        this.props.navigation.navigate('Teams');
    }

    // rendering what will be on the page
    render(){
        // const players = this.props;
        return(
            <View style={styles.home} >
                {/* <Text>Football Team Randomiser</Text> */}
                <View style={styles.buttons}>
                    <TouchableHighlight style={styles.button} onPress={this.onPressPlayers}>
                        <Text style={styles.buttonText}>Add Players</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this.onPressTeams}>
                        <Text style={styles.buttonText}>Create Teams</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }


}
export default HomeScreen;

// Styling for this page
const styles = StyleSheet.create ({
    home: {
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',

    },
    buttons: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 100,
        
    },
    button: {
       backgroundColor: 'lime',
   
       borderRadius: 15,
    },
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        width: 300,
        height: 150,
        paddingTop: 45,
        
    }

})
