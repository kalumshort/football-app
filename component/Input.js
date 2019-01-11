import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


class NewPlayerInput extends Component {
   constructor(props){
      super(props);

      this.state = {
         input: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleName = this.handleName.bind(this);


   }

   
    handleName = (text) => {
       this.setState({ input: text })
    }
   //  handleRating = (text) => {
   //     this.setState({ rating: text })
   //  }


    handleSubmit = () => {
         // e.preventDefault(e);
         console.log('submitted');
         console.log(this.state.input);

        let data = this.state.input.toUpperCase();

        this.props.handleSubmit(data);

        console.log(data);


        this.setState({
            input: "",
            
        })

    }
    render() {
       return (
          <View style = {styles.container}>
             <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                placeholderTextColor = "#9a73ef"
               //  value = {this.props.input}
                autoCapitalize = "none"
                onChangeText = {this.handleName}/>
             
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
       color: 'white',
       textAlign: 'center',
    }
 })