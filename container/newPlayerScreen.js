import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableHighlight, FlatList, TextInput} from 'react-native';
import NewPlayerInput from '../component/newPlayerInput';

class NewPlayerScreen extends Component {
    constructor(props){
        super(props)
    }

    static navigationOptions = {
        title: 'New Player',
        headerStyle:{
            backgroundColor: 'green'
        }
    }

    render(){
        return(
            
            <NewPlayerInput/>
            
        );
    }

}

export default NewPlayerScreen;


