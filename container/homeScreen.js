import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableHighlight, FlatList} from 'react-native';


class HomeScreen extends Component {
    constructor(props){
        super(props);

        this.onPressPlayers = this.onPressPlayers.bind(this);
        this.onPressTeams = this.onPressTeams.bind(this);
    }
    static navigationOptions = {
        title: '5-A-Side Randomiser',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }

    componentDidMount() {

    }

    onPressPlayers() {
        this.props.navigation.navigate('Players');

    }

    onPressTeams() {
        this.props.navigation.navigate('Teams');
    }

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
