import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class NewPlayerInput extends Component {
   constructor(props){
      super(props);

      this.state = {
         input: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);

   }


    handleSubmit = () => {
        console.log('submitted');
         
        let data = this.state.text.toUpperCase();

        this.props.handleSubmit(data);

        console.log(data);

        this.setState({
            text: '',
            
        })

    }
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Insert Player Name "
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText={(text) => this.setState({text})}

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
 
 const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: 'lime',
       borderWidth: 2,
       color: 'black',
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