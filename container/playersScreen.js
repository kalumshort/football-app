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
        title: 'The Players',
        headerStyle:{
            backgroundColor: 'lime'
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
       backgroundColor: 'lime',
       padding: 10,
       margin: 15,
       height: 40,
       borderRadius: 10,
    },
    submitButtonText:{
       textAlign: 'center',
       color: 'black',
       fontWeight: 'bold',
    }
 })

