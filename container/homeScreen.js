import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight, FlatList} from 'react-native';


class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.onPressPlayers = this.onPressPlayers.bind(this);
        this.onPressTeams = this.onPressTeams.bind(this);
    }
    static navigationOptions = {
        title: 'Home',
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
                        <Text style={styles.buttonText}>The Players</Text>
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
        width: 300,
        margin: 100,
        
    },
    button: {
       backgroundColor: 'lime',
       width: 300,
       padding: 10,
       borderRadius: 15,
    },
    buttonText: {
        textAlign: 'center',
    }

})

// const mapStateToProps = ( state ) => {
//     return {
//         players: state.players
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPlayers: () => {
//             dispatch(getPlayers());
//         }
//     }
// }

// const enhancer = connect(mapStateToProps, mapDispatchToProps);
// const ListScreenConnected = enhancer(ListScreen);

// export default ListScreenConnected;