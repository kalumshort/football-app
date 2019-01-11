import React, {Component} from 'react';

// importing the different react native components needed for this page 
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';


class NewPlayerInput extends Component {
   constructor(props){
      super(props);

      this.state = {
         text: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this);

   }
// When you press the add players button it sends a function carrying the data to be used else where
    handleSubmit = () => {
       //checking to see if there was an input 
       if(this.state.text !== ''){
      //  testing to see if the function has been called
        console.log('submitted');

         // creating a variable thats equal the the text being sbmitted and then making it uppercase
        let data = this.state.text.toUpperCase();

         // handleSubmit is a prop handed down from the container
        this.props.handleSubmit(data);
         // checking to see if im sending what i mean too
        console.log(data);

        this.setState({
            text: '',
            
        })
      // if there was no input a alert will pop up saying to provide a alert
      }else{
         Alert.alert(
            'No Name',
            'Please Provide A Name',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
      }

    }
   //  rendering out what is needed for this page
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Insert Player Name "
                placeholderTextColor = "blue"
                autoCapitalize = "none"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}

                />
             
             {/* <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Rating"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleRating}/>
              */}
             <TouchableOpacity
                style = {styles.submitButton}
                onPress = { this.handleSubmit  }>
                <Text style = {styles.submitButtonText}> Add Player </Text>
             </TouchableOpacity>
          </View>
       )
    }
 }
 export default NewPlayerInput
 
//  styling for this page
 const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: 'lime',
       borderWidth: 2,
       color: 'blue',
    },
    submitButton: {
       backgroundColor: 'lime',
       padding: 10,
       margin: 15,
       height: 40,
       borderRadius: 10,
    },
    submitButtonText:{
       color: 'black',
       textAlign: 'center',
       fontWeight: 'bold',
    }
 })