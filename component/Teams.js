import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import Icon from 'react-native-vector-icons/FontAwesome';

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}


class List extends Component {
    constructor(props){
    super(props)
    this.renderItem = this.renderItem.bind(this);
    }

    static navigationOptions = {
        title: 'Teams',
        headerStyle:{
            backgroundColor: 'lime'
        }
    }
    keyExtractor(item, index) {
        return `${index}`;
    }


    

    renderItem({item}) {
        return(
                <View style={styles.listItem}>
                    <TouchableHighlight  style={styles.listButton}>
                        <>
                            <Text style={styles.buttonText}>{item.name}</Text>
                            {/* <Text style={styles.buttonText}>Rating: {item.rating}</Text> */}
                        </>
                    </TouchableHighlight>
                </View>
        )
    }

    render() {
        let randomArray = shuffle(this.props.players);

        return (
            <View style={styles.container}>
                <Text style={styles.TeamText}>Team 1</Text>
                <FlatList
                    style={styles.FlatList}
                    data= { randomArray.slice(0,5) }
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
                <Text style={styles.TeamText}>Team 2</Text>
                <FlatList
                    style={styles.FlatList}
                    data= { randomArray.slice(5,10) }
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>

        );
    }
}
export default List;

const styles = StyleSheet.create({
    container: {
    },
    FlatList: {

    },
    listItem:{
        flex: 1,
        alignItems: 'center',
    },
    listButton:{
        // flexDirection: 'row',
        padding: 10,
        backgroundColor: 'grey',
        width: 300,
        margin:5,
        justifyContent: 'space-between',


    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',

    },
    TeamText: {
        textAlign: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'lime',
        borderRadius: 20,
        backgroundColor: 'lime',
        margin: 10,
        
    },
})