import React, {Component} from 'react';

// importing the containers and components needed for this page
import List from './listContainer';
import Input from './inputContainer.js';

// importing the react native components needed for this page
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


class PlayerScreen extends Component {
    constructor(props){
        super(props);
        this.onPressTeams = this.onPressTeams.bind(this);

    }
    // setting and styling the header for this page
    static navigationOptions = {
        title: 'The Players',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }
    // when this button is pressed it takes you too the team page 
    onPressTeams() {
        this.props.navigation.navigate('Teams');
     }
    // rendering out the different components for this pages
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

// Styling for this page
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

