import React, {Component} from 'react';
import List from './listContainer';
import Input from './inputContainer.js';
import {View, Text, TouchableHighlight, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class PlayerScreen extends Component {
    constructor(props){
        super(props);
        this.onPressTeams = this.onPressTeams.bind(this);

    }
    static navigationOptions = {
        title: 'players',
        headerStyle:{
            backgroundColor: 'lightblue'
        }
    }

    onPressTeams() {
        this.props.navigation.navigate('Teams');
     }

    render(){
        return(
            <>
            <Input/>
            <List/>
            <TouchableOpacity
                style = {styles.submitButton}
                onPress = { this.onPressTeams }>
                <Text style = {styles.submitButtonText}>Create Teams</Text>
            </TouchableOpacity>
            </>
        )
    }
}
export default PlayerScreen;


const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })

// const mapStateToProps = ( state ) => {
//     return {
//         players: state.players,
//     }
// };

// // const mapDispatchToProps = dispatch  => ({
// //         handleSubmit: data => {
// //             dispatch(addPlayer(data))
// //     }
// // });

// // const enhancer = connect(mapStateToProps, mapDispatchToProps);
// // const ListScreenConnected = enhancer(ListScreen);

// // export default ListScreenConnected;

// export default connect(mapStateToProps, null)(ListScreen);